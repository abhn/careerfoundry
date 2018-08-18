import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './landing-page';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
