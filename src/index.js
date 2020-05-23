import React from 'react';
import ReactDom from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';

import App from './App';

ReactDom.render(
    <BrowserRouter>

        <Route path="/" component={App} />

    </BrowserRouter>

    , document.getElementById('root')
);
