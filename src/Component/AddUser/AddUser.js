import React from 'react';
import '../AddUser/AddUser.css';

const AddUser = () => {

    const handleSubmit = event=>{
        event.preventDefault()
    }
    return (
        <div className='addUser'>
            <h1>Add Your User</h1>
            <form onSubmit={handleSubmit()}>
                <input type="text" name='name' placeholder='name' required />
                <input type="email" name='email' placeholder='email' required />
                <input type="submit" name='submit' />
            </form>
        </div>
    );
};

export default AddUser;