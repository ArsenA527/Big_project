import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let myData = {
  name: "Andy Currant",
  img: "https://sun1-21.userapi.com/P9-gotmk8Jfqz3BXyeU_JfS1coHrdPb7fInADg/4Ki1-EmkoSw.jpg",
  description: "Memento mori",
  id: 1
}


ReactDOM.render(
  <React.StrictMode>
    <App Iam = {myData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
