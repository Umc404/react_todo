import React from 'react';

const Todo = ({todo, onRemove, onToggle}) => {
    return (
        <div className='todo'>
                <span style={{
                    cursor:'pointer',
                    textDecoration: todo.done? 'line-through':'none'
                }}
                onClick={()=> onToggle(todo.id)}>
                    {todo.todothing}
                </span>
                {/* function으로 매개변수를 전달할 경우 */}
                <button className='removeBt' onClick={()=>onRemove(todo.id)}>X</button>
        </div>
    );
};

export default Todo;