import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddUser from './Component/AddUser/AddUser';
import Home from './Component/Home/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
};

export default App;
