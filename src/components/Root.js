import React from 'react';
// import { Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

const Root = () => (
  <div className="wrapper">
    <Header></Header>
    <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>

          <div className="col-md-8">
            <Main />
          </div>
        </div>
    </div>
  </div>);

export default Root;
