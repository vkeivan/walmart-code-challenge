import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {productReducer} from "./productreducer";


export const reducer = combineReducers({
    product: productReducer,
    routing: routerReducer,
});
