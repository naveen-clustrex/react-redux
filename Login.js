import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

export const Login = () => {
  return(
    <>
    <table >
     <tr>
      <td> <h3>UserName</h3> </td>
      <td>:</td>
      <td> <input input = "text"/> </td>
     </tr>
     <tr>
      <td><h3>Password</h3></td>
      <td>:</td>
      <td><input input = "text"/></td>
     </tr>
    </table>
    <button>LOG IN </button>
  </>
  )
}
