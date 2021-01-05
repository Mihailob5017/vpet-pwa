import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'


import './index.css';
import App from './App';
// Context API
import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId="b74aaf8a-5f74-466a-83d6-6a587905a7a4" language="en-US">
        <Provider><App />
        </Provider>
    </SpeechProvider>, document.getElementById('root'));

