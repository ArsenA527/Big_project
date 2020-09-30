import React from 'react';

import './App.css';

import { SideBar } from './Component/SideBar/SideBar';
import Header from './Component/Header/Header';
import Profile from './Component/Content/Profile';

const App = (props) => {
  return (
    <div className="appWrapper">
      <Header />
      <SideBar />
      <div class = "content">
        <Profile m_mydata = {props.Iam}/>
      </div>
  
    </div>
  );
}

export default App;
