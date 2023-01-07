import React from "react";
import ReactDom from 'react-dom';
import App from './app/App';
import './index.scss';
import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./reducers";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
