import { useState } from 'react';
import '../apps/App.css';

export default function Todolist() {
    const [todos, setTodos] = useState ([
        {id:'1234', work:'공부하기', status:'active'},
        {id:'4567', work:'청소', status:'active'},
    ]);
    return (
        <div>
            <ul>
                {
                    todos.map(todo => (
                        <li>
                            <input type='checkbox' id={todo.id} checked={todo.status === 'completed'}
                            onChange={handlechange} />
                            <label htmlFor={todo.id}>{todo.work}</label>
                            <button>삭제 하기</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}