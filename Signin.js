import React, {useState} from 'react';
import './style.css';
import axios from './axios-content';

export const Signin = () => {
  const [form, setState] = useState({
    username    : '',
    email       : '',
    phonenumber : '',
    password    : ''
  });

  const printValues = e => {

    const details = {
      name : form.username,
      email : form.email,
      phone : form.phonenumber,
      pass : form.password
    }

    axios.post('/users.json', details)
    .then(response => console.log(response))
    .catch(error => console.log(error));

    console.log(details);
  };

  const updateField = e => {
    e.preventDefault();
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
   <> 
    <form onSubmit={printValues}>
     <table>
     <tbody>
       <tr>
        <td><h3>UserName</h3></td>
        <td>:</td>
        <td> <input
          value={form.username}
          name="username"
          onChange={updateField}
        /></td>
        </tr>
      <tr>
        <td><h3>Email ID</h3></td>
        <td>:</td>
        <td> <input
          value={form.email}
          name="email"
          onChange={updateField}
        /></td>
        </tr>
        <tr>
        <td><h3>Phone Number</h3></td>
        <td>:</td>
        <td><input
          value={form.phonenumber}
          name="phonenumber"
          onChange={updateField}
        /></td>
        </tr>
        <tr>
        <td><h3>Password</h3></td>
        <td>:</td>
        <td>  <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        /></td>
        </tr>
       </tbody> 
      </table>
      <button type = "submit">REGISTER</button>
    </form>
    </>
  );
}
