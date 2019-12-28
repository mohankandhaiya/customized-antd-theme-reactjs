import actions from "redux/Menu/sagas";

const initState = {
    foodname: null,
    category: null,
    price: null,
};

export default function menuReducer(state = initState, action) {
    switch (action.type) {
        case actions.MENU: {
            return {
                ...state,
                menuLoader: true,
            };
        }
        case actions.MENU_SUCCESS: {
            return {
                ...state,
                menuLoader: false,
                menu: action.menu,
            };
        }
        case actions.MENU_FAILURE: {
            return {
                ...state,
                menuLoader: false,
                menu: null,
            };
        }
        default:
            return state;
    }
}