import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

export const appStore = createStore(
    compose(applyMiddleware(thunkMiddleware))
);
