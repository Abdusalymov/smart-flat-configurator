import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frame from 'react-frame-component';

ReactDOM.render(
    <Frame style={{width: '30%', height: '80vh'}} 
    initialContent='<!DOCTYPE html><html><head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head><body><div id="mountHere"></div></body></html>'
    >
        <App />
    </Frame>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
