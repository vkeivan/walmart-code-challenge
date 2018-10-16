import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer} from '../reducers';

export const appStore = createStore(
    reducer,
    compose(applyMiddleware(thunkMiddleware))
);
