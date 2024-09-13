import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './UserLogin.css'
const UserLogin = () => {

    const[userId,setUserId]=useState("");
    const[userPassword,setUserPassword]=useState("");
  
   async function handleSubmit(ev)
   {
    ev.preventDefault();

    const response=await fetch('http://localhost:4000/userLogin',{
      method: 'POST',
      body:JSON.stringify({userId,userPassword}),
      headers: {'Content-Type':'application/json'},
    });

    if(response.status===200){
      alert('Login successful');
  } else {
      alert('Login failed');
  }
   }
  return (
    <div className='UserLoginPage'>
    <h1>Library Management System</h1>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>User Id :</Form.Label>
        <Form.Control 
        name="userId"
        value={userId}
        type="text"
        placeholder="ABCD1234"
        onChange={(ev)=>setUserId(ev.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Password :</Form.Label>
        <Form.Control
        name="userPassword" 
        value={userPassword}
        type='password'
        onChange={(ev)=>setUserPassword(ev.target.value)}
        />

      </Form.Group>

      <Button variant="primary" className='btn'>Cancel</Button>
      <Button variant="primary" className='btn' onClick={handleSubmit}>Log In</Button>

    </Form>
    Login as <NavLink to="/">Admin ?</NavLink>
    </div>

    
  )
}

export default UserLogin