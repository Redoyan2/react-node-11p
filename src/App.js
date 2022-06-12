
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  })

const handleInput= event=>{
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const user={name, email}
  console.log(user)
  fetch('http://localhost:5000/user',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  })
}


  return (
    <div className="App">
      <h1>Length: {users.length}</h1>
      {users.map(user=>
        <li
        key={user.id}
        >Name: {user.name}</li>
      )}

<form onSubmit={handleInput}>
<input type="text" name='name' placeholder='name' required />
<input type="email" name='email' placeholder='email' required />
<input type="submit" name='Add User' />

</form>

    </div>
  );
}

export default App;
