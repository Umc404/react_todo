import React from 'react';
import CreateTodo from './CreateTodo';
import Todo from './Todo';
import { useState, useRef } from 'react';

const TodoList = () => {

    const[ todos, setTodos ] = useState([
        {
           
        }
    ]);

    const nextId = useRef(2);

    const [ input, setInput ] = useState({
        todothing:''
    });

    const {todothing} = input;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInput({
            // ...input,
            [name] : value
        })
        console.log(input);
    }

    const onCreate = () => {
        const todo = {
            id: nextId.current,
            todothing: todothing
        };
        setTodos(todos.concat(todo)); // 데이터 세팅

        setInput({
            todothing:''
        })

        nextId.current += 1;
        console.log(todos);
    }

    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onToggle = (id) => {
        setTodos(
            todos.map(t => (
                t.id === id? {...t, done : !t.done} : t
            ))
        )
    }

    return (
        <div className='todoList'>
            <h3>Week TodoList</h3>
            <div className='listUp'>
            <CreateTodo todothing={todothing} onChange={onChange} onCreate={onCreate}/>
            </div>
            <div className='todoArea'>
                {
                    todos.map(t=> (
                        <Todo todo = {t} key={t.id} onRemove={onRemove} onToggle={onToggle} />
                    ))
                }
            </div>
        </div>
    );
};

export default TodoList;