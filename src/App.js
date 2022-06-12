
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  })
  return (
    <div className="App">
      <h1>Length: {users.length}</h1>
      {users.map(user=>
        <li
        key={user.id}
        >Name: {user.name}</li>
      )}
    </div>
  );
}

export default App;
