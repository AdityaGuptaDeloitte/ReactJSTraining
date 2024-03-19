import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import UserNameDemo from './UserNameDemo';
import Login from './Login';
import DeptArrayCrud from './DeptArrayCrud';
import ShoppingCart from './ShoppingCart';
import EmployeesCRUD from './EmployeesCRUD';
import AjaxDemo1 from './AjaxDemo1';
import AjaxDemo2 from './AjaxDemo2';
import AjaxDemoEmp from './AjaxDemoEmp';
import Logout from './Logout';

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './NotFound';




const routing = (
  <Router>

    <div>
      <div style={{backgroundColor: 'burlywood'}}>
        <h1 style={{padding:2, margin:0, paddingTop: 20}}>Assignment - React JS Training</h1>
        <h3 style={{padding:0, margin:0, paddingBottom:20}}>Routing and Authentication</h3>
      </div>
      <br/>
      <div className='navigation'>
        <Link className='navbtn' to="/">Home</Link>
        <Link className='navbtn' to="/AjaxDemo1">AjaxDemo1</Link>
        <Link className='navbtn' to="/AjaxDemo2">AjaxDemo2</Link>
        <Link className='navbtn' to="/AjaxDemoEmp">AjaxDemo3</Link>
        <Link className='navbtn' to="/Login">Login</Link>
        <Link className='navbtn' to="/Logout">LogOut</Link>
        <Link className='navbtn' to="/NotFound">InvalidUrl</Link>
      </div>
      <br />
    </div>

    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/AjaxDemo1' element={
        <ProtectedRoute returnUrl="/AjaxDemo1">
          <AjaxDemo1/>
        </ProtectedRoute>
      } />
      <Route path='/AjaxDemo2' element={
        <ProtectedRoute returnUrl="/AjaxDemo2">
          <AjaxDemo2/>
        </ProtectedRoute>
      } />
      <Route path='/AjaxDemoEmp' element={
        <ProtectedRoute returnUrl="/AjaxDemoEmp">
          <AjaxDemoEmp/>
        </ProtectedRoute>
      } />
      <Route path="/Login" element={ <Login />} />
      <Route path='/Logout' element={
        <ProtectedRoute returnUrl="/">
          <Logout/>
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
