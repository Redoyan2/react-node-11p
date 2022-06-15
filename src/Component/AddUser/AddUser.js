import React, { useEffect, useState } from 'react';
import '../AddUser/AddUser.css';
import User from './User';

const AddUser = () => {
    const [users, setUsers] = useState([]);


    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        //post method
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('post user');
                event.target.reset();
            })
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
                    users.map(user => <User
                    key={user._id}
                    user={user}
                    ></User>)
                    
                }
            </div>
        </div>
    );
};

export default AddUser;