import axios from 'axios';
import settings from 'config/settings';
import { getAuthToken } from './utility';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = settings.ROOT_URL;

axiosClient.defaults.headers = settings.headers;

export function getRequest(URL) {
    settings.headers['Authorization'] = getAuthToken();
    return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
    settings.headers['Authorization'] = getAuthToken();
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
    settings.headers['Authorization'] = getAuthToken();
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
    settings.headers['Authorization'] = getAuthToken();
    return axiosClient.delete(`/${URL}`).then(response => response);
}
