import AdminLogin from './Pages/Auth/AdminLogin'
import AdminHomePage from './Pages/HomePage/AdminHomePage';
import MaintenancePage from './Pages/MaintenancePage';
import ReportsPage from './Pages/ReportsPage'
import TransactionPage from './Pages/TransactionPage'
import UserLogin from './Pages/Auth/UserLogin'
import AddBooksPage from './Pages/BooksPags/AddBooksPage';
import UpdateBooksPage from './Pages/BooksPags/UpdateBooksPage';
import AddMemberShipPage from './Pages/MemberShipPage/AddMemberShipPage';
import UpdateMemberShipPage from './Pages/MemberShipPage/UpdateMemberShip';
import AddUserPage from './Pages/UsersPage/AddUserPage';
import UpdateUserPage from './MemberShipPage/UpdateMemberShip';

import {Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<AdminLogin />}></Route>
    {/* <Route path="/login" element={<Login />}></Route> */}
    <Route path="/userLogin" element={<UserLogin />}></Route>
    <Route path="/adminHomePage" element={<AdminHomePage />} />
    <Route path="/maintenancePage" element={<MaintenancePage />}/>
    <Route path="/reportsPage" element={<ReportsPage />}/>
    <Route path="/transactionPage" element={<TransactionPage />}/>
    
    {/* Maintenance Page */}
    <Route path="/addMemberShip" element={<AddMemberShipPage />}/>
    <Route path="/updateMemberShip" element={<UpdateMemberShipPage />}/>
    
    <Route path="/addBooks" element={<AddBooksPage />}/>
    <Route path="/updateBooks" element={<UpdateBooksPage />}/>
    
    <Route path="/addUser" element={<AddUserPage />}/>
    <Route path="/updateUser" element={<UpdateUserPage />}/>

    </Routes>
    </div>
  );
}

export default App;
