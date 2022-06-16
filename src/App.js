import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Component/About/About';
import AddUser from './Component/AddUser/AddUser';
import Login from './Component/Athentication/Login';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
