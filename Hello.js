import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {signInAction, logInAction} from './index';
import './style.css';

const Hello = () => {
  const loginPage = useSelector(state => state);
  const dispatch  = useDispatch(); 
  
  return (
   <div className = "page">
   <h1 className = "heading">REACT TUTORIAL</h1>
    <div>
      <h4 >LOG IN </h4>
      <button onClick = {() => dispatch(logInAction()) }>LOG IN</button>
    <br/>
      <p> Create an Account </p>
      <button onClick = {() => dispatch(signInAction())}>SIGN IN</button>
    </div>
    <h3 >{loginPage}</h3>
  </div> 
  )
}

export default Hello;
