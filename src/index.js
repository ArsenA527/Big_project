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

let DialogsData = [
  {img: "https://sun9-76.userapi.com/c604829/v604829349/17130/3mqMijGE1To.jpg", name: "Арсен", id: 2,  },
  {img: "https://sun9-5.userapi.com/c858136/v858136201/206a01/_TFSsVFYljI.jpg", name: "Александр", id: 3,  },
  {img: "https://sun9-34.userapi.com/T3j15nFBhuCH_Zzxu9yDc5PuOF9yznnXlur-9w/TUMpqwlmgOU.jpg", name: "Павел", id: 4, },
  {img: "https://sun9-4.userapi.com/o1lmv5tCrRo3GlGhuTHEvJ7fXhP0iHZQr32SfA/9W31_HwCy5Q.jpg", name: "Дмитрий", id: 5,  }
]


let MessagesData = [
  {id: 2, message: ""},
  {id: 3, message: ""},
  {id: 4, message: ""},
  {id: 5, message: ""}
]

ReactDOM.render(
  <React.StrictMode>
    <App Iam = {myData} dialogs = {DialogsData} messages = {MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
