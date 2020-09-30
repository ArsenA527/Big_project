import React from 'react';

import './App.css';

import { SideBar } from './Component/SideBar/SideBar';
import Header from './Component/Header/Header';
import Profile from './Component/Content/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <SideBar />
        <div class = "content">
          <Route path = "/Content" render = { () => <Profile m_mydata = {props.Iam}/> } />
        </div>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
