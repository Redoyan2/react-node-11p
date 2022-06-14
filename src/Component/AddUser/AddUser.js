import React, { useEffect, useState } from 'react';
import '../AddUser/AddUser.css';

const AddUser = () => {
    const [users, setUsers] = useState([]);


    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};
        console.log(user)
    }

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    })
    return (
        <div className='addUser'>
            <h1>Add Your User</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' required />
               
                <input type="email" name="email" placeholder='Email' required />
                
                <input type="submit" value="Add User" />
            </form>
            <div>
                {
                    users.map(user => <li
                        key={user.id}
                    >name: {user.name}</li>)
                }
            </div>
        </div>
    );
};

export default AddUser;