import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'

const AddUserPage = () => {

  const[userName,setUserName]=useState("");
  const[userPassword,setUserPassword]=useState("");

  async function handleSubmit(ev){
    ev.preventDefault();

    // const response=await fetch('http://localhost:4000/')
  }
  return (
    <div>
    <h1>Add a user</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>User Name :</Form.Label>
        <Form.Control
        name="username"
        value={userName}
        onChange={setUserName}
        type="text"
        placeholder="John Doe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Give User a Password :</Form.Label>
        <Form.Control
        name="userpassword"
        value={userPassword}
        onChange={setUserPassword}
        type="password" />
      </Form.Group>
      <Button variant="primary">Cancel</Button>
      <Button variant="primary" onSubmit={handleSubmit}>Confirm</Button>
      </Form>
    </div>
  )
}

export default AddUserPage