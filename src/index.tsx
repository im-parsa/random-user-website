import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyles from './global.styles';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = 'https://randomuser.me/';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={window.location.pathname || ''}>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
