import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap';
import {NavLink,Navigate} from 'react-router-dom';
import './AdminLogin.css'

const Login = () => {

  const[adminId,setAdminId]=useState("");
  const[adminPassword,setAdminPassword]=useState("");
  const[redirect,setRedirect]=useState(false);

  async function handleSubmit(ev)
  {
    ev.preventDefault();
    
    const response=await fetch('http://localhost:4000/adminLogin',{
      method: 'POST',
      body:JSON.stringify({adminId,adminPassword}),
      headers: {'Content-Type':'application/json'},
    });

    if(response.status===200){
      // alert('Login successful');
      setRedirect(true);
  } else {
      alert('Login failed');
  }
  }

  if(redirect)
    {
     return <Navigate to={'/adminHomePage'} />
    }

  return (
    <div className='AdminLoginPage'>
   
    <h1>Library Management System</h1>
    
     <Form >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Admin Id :</Form.Label>
        <Form.Control type="text" name="adminId" value={adminId} placeholder="ABCD1234" onChange={(ev)=>setAdminId(ev.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Admin Password :</Form.Label>
        <Form.Control type='password' name="adminPassword" value={adminPassword} onChange={(ev)=>setAdminPassword(ev.target.value) } required/>
      </Form.Group>

      <Button variant="primary" className='btn'>Cancel</Button>
      <Button variant="primary" className='btn' onClick={handleSubmit}>Log In</Button>

    </Form>

     Login as <NavLink to="/userLogin">User?</NavLink>
    </div>
  )
}

export default Login