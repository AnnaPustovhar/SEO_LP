import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import SaasOnepage from './pages/Saas Onepage/index';

const app = (
        <BrowserRouter>
            <SaasOnepage/>
        </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();