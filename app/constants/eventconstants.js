const keyMirror = require('keymirror');

export const EventConstants = {
    ActionTypes: keyMirror({
        PRODUCT_LOAD_SUCCESS: null,
        PRODUCT_LOAD_REQUEST: null,
        PRODUCT_LOAD_ERROR: null,
        PRODUCTS_LOAD_SUCCESS: null,
        PRODUCTS_LOAD_REQUEST: null,
        PRODUCTS_LOAD_ERROR: null,
        PRODUCTS_SEARCH_REQUEST: null,
    })
};
