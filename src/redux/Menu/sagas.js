import { all, call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import { history } from 'redux/store';
import actions from './actions';
import {
    handleException,
    setLocalData,
    clearLocalData,
    getErrorMessages,
} from 'helpers/utility';
import { deleteRequest, getRequest, postRequest } from 'helpers/axiosClient';

export function* userAuth(params) {
    try {
        const response = yield call(() => postRequest('login', params.payload));
        setLocalData(response);
        yield put({
            type: actions.AUTHENTICATE_USER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({ type: actions.AUTHENTICATE_USER_FAILURE });
        if ([401, 404].includes(error.response.status)) {
            getErrorMessages(error.response.data.error);
        } else {
            window.bugsnagClient.notify(error.response.data.error[0].message);
            message.error('Something went wrong');
        }
    }
}

export function* userRegistration(params) {
    try {
        const response = yield call(() => postRequest('signup', params.payload));
        setLocalData(response);
        yield put({ type: actions.USER_REGISTRATION_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: actions.USER_REGISTRATION_FAILURE });
        handleException(error);
    }
}

export function* logoutUser() {
    try {
        yield call(() => deleteRequest('logout'));
        yield put({ type: actions.LOGOUT_USER_SUCCESS });
        clearLocalData();
        history.push('/login');
    } catch (error) {
        handleException(error);
    }
}

export function* sendPasswordResetLink(params) {
    try {
        const response = yield call(() =>
            postRequest('reset_link', params.payload),
        );
        history.push('/login');
        message.success(response.data.data.message);
        yield put({ type: actions.SEND_PASSWORD_RESET_LINK_SUCCESS });
    } catch (error) {
        yield put({ type: actions.SEND_PASSWORD_RESET_LINK_FAILURE });
        if ([401, 422, 404].includes(error.response.status)) {
            getErrorMessages(error.response.data.error);
        } else {
            window.bugsnagClient.notify(error.response.data.error[0].message);
            message.error('Something went wrong');
        }
    }
}

export function* resetPassword(params) {
    try {
        const response = yield call(() =>
            postRequest('password_reset', params.payload),
        );
        message.success(response.data.data.message);
        yield put({ type: actions.RESET_PASSWORD_SUCCESS });
        history.push('/login');
    } catch (error) {
        yield put({ type: actions.RESET_PASSWORD_FAILURE });
        if ([401, 422, 404].includes(error.response.status)) {
            getErrorMessages(error.response.data.error);
        } else {
            window.bugsnagClient.notify(error.response.data.error[0].message);
            message.error('Something went wrong');
        }
    }
}

export function* validateAuthToken() {
    try {
        const response = yield call(() => getRequest('validate/user'));
        yield put({
            type: actions.AUTHENTICATE_USER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({ type: actions.AUTHENTICATE_USER_FAILURE });
        handleException(error);
    }
}

export function* updateAppData() {
    try {
        const response = yield call(() => getRequest('validate/user'));
        yield put({
            type: actions.UPDATE_APP_DATA_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({ type: actions.AUTHENTICATE_USER_FAILURE });
        handleException(error);
    }
}

export function* setRecentChannel(params) {
    try {
        yield call(() => postRequest(`user/channel/${params.payload}/recent`));
        yield put({
            type: actions.SET_SELECTED_CHANNEL_ID_SUCCESS,
            payload: { channelID: params.payload },
        });
        history.push('/app/dashboard');
    } catch (error) {
        yield put({
            type: actions.SET_SELECTED_CHANNEL_ID_FAILURE,
        });
        handleException(error);
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.AUTHENTICATE_USER, userAuth),
        takeEvery(actions.USER_REGISTRATION, userRegistration),
        takeEvery(actions.LOGOUT_USER, logoutUser),
        takeEvery(actions.SEND_PASSWORD_RESET_LINK, sendPasswordResetLink),
        takeEvery(actions.RESET_PASSWORD, resetPassword),
        takeEvery(actions.VALIDATE_AUTH_TOKEN, validateAuthToken),
        takeEvery(actions.UPDATE_APP_DATA, updateAppData),
        takeEvery(actions.SET_SELECTED_CHANNEL_ID, setRecentChannel),
    ]);
}
