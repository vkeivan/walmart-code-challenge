import {EventConstants} from "../constants/eventconstants";


export const productReducer = (state = {
    loading: false,
    data: null,
    query: null

}, action) => {
    switch (action.type) {
        case EventConstants.ActionTypes.PRODUCTS_LOAD_SUCCESS:
            return {
                data: action.data,
                loading: false,
                query: null
            };
        case EventConstants.ActionTypes.PRODUCTS_LOAD_REQUEST:
            return {
                data: null,
                loading: true,
                query: null
            };
        case EventConstants.ActionTypes.PRODUCTS_SEARCH_SUCCESS:
            return {
                data: action.data,
                loading: false,
                query:action.query
            };
        case EventConstants.ActionTypes.PRODUCTS_SEARCH_REQUEST:
            return {
                data: null,
                loading: true,
                query: action.query
            };

        default:
            return state;
    }
};

