import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// Context API
import { Provider } from './context/context';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));

