import React from 'react'
import { NavLink } from 'react-router-dom'
import './MaintenancePage.css'

const MaintenancePage = () => {
  return (
    <div className='MaintenancePage'>
     <NavLink className='navlink' to="/addMemberShip">Add MemberShip</NavLink>
     <NavLink className='navlink' to="/updateMemberShip">Update MemberShip</NavLink>

    <NavLink className='navlink' to="/addBooks">Add Books</NavLink>
    <NavLink className='navlink' to="/updateBooks">Update Books</NavLink>

    <NavLink className='navlink' to="/addUser">Add User</NavLink>
    <NavLink className='navlink' to="/updateUser">Update User</NavLink>
    </div>
  )
}

export default MaintenancePage