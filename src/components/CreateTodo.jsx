import React from 'react';
import './todo.css'

const CreateTodo = ({todothing, onChange, onCreate}) => {
    return (
        <div className='createTodo'>
            <input
                type="text" 
                name='todothing' 
                placeholder='할거' 
                onChange={onChange}
                value={todothing}
            />
            <button className='createBt' onClick={onCreate}>Create</button>
        </div>
    );
};

export default CreateTodo;