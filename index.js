import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Signin} from './Signin';
import {Login} from './Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Action
export const signInAction = () => ({type : "SIGN_IN"});
export const logInAction = () => ({type : "LOG_IN"});

//Reducer
const entryPageReucer = (state, actions) => {
  switch(actions.type) {
    case 'SIGN_IN':
      return state =  <Signin/>
    case 'LOG_IN':
      return state =  <Login/>
    default:
      return state = "";  
 }
}
//store

let store = createStore(entryPageReucer);


render(<Provider store = {store}>
        <Hello/>
      </Provider> , document.getElementById('root'));
