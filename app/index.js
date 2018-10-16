import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import App from './containers/app';
import {appStore} from './store/configurestore';
import './styles/main.sass';

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>
    , document.getElementById('app')
);
