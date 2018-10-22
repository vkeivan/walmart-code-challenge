import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import App from './containers/app';
import {appStore} from './store/configurestore';
import './styles/main.sass';
import '../node_modules/react-bootstrap-typeahead/css/Typeahead.min.css';
import 'material-icons/iconfont/material-icons.css'

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>
    , document.getElementById('app')
);
