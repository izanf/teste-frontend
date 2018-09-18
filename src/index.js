import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
