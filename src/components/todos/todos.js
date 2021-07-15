import React from 'react'

import { useSelector } from 'react-redux'

import Todo from './todo/todo'

export default function Todos() {
    const todos = useSelector((state) => state.todos)
    
    return (
        <div>
            {todos.map((todo) => {
                return <Todo todo={todo} />
            })}
        </div>
    )
}
