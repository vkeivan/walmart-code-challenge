import {EventConstants} from "../constants/eventconstants";


export const productReducer = (state = {
    loading: false,
    data: null

}, action) => {
    switch (action.type) {
        case EventConstants.ActionTypes.PRODUCTS_LOAD_SUCCESS:
            return {
                data: action.data,
                loading: false
            };
        case EventConstants.ActionTypes.PRODUCTS_LOAD_REQUEST:
            return {
                data: null,
                loading: true
            };

        default:
            return state;
    }
};

