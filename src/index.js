import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import store from './redux/store';
// 这是 dev- 1 注释
import App from './router/index';
// 2212312
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);