import React from 'react';

import './App.css';

import { SideBar } from './Component/SideBar/SideBar';
import { Profile } from './Component/Content/Profile';
import Header from './Component/Header/Header';

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <SideBar />
      <div class = "content">
        <Profile /> 
      </div>
  
    </div>
  );
}

export default App;
