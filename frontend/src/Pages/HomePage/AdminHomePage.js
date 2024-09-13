import React,{useState} from 'react'
import {Navigate,NavLink} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap'

const AdminHomePage = () => {

    const[redirect,setRedirect]=useState(false);

    function handleClick()
    {
        setRedirect(true);
    }

    if(redirect)
    {
        return <Navigate to={'/'} />
    }
  return (
    <div className='AdminHomePage'>
    <NavLink to="/maintenancePage">Maintenance</NavLink>
    <NavLink to="/reportsPage">Reports</NavLink>
    <NavLink to="/transactionPage">Transactions</NavLink>
    <h1>Product Details</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Code No. From</th>
          <th>Code No. To</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        
          <td>SC(B/M)000001</td>
          <td>SC(B/M)000004</td>
          <td>Science</td>
        </tr>
        <tr>
         
          <td>EC(B/M)000001</td>
          <td>EC(B/M)000004</td>
          <td>Economics</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="primary" className='btn' onClick={handleClick}>Log Out</Button>
    </div>
  )
}

export default AdminHomePage