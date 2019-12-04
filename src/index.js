import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./component/App";
import { BrowserRouter } from 'react-router-dom';
import store from './store';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
 ), document.getElementById('root'))
