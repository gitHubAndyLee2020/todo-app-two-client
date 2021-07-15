import React from 'react'

import { useDispatch } from 'react-redux'
import { likeTodo,updateTodo,deleteTodo } from '../../../actions/todos'
import { updateText,clearText } from '../../../actions/todo'

export default function Todo({ todo }) {
    const dispatch = useDispatch()
    
    const handleDelete = () => {
        dispatch(clearText())
        dispatch(deleteTodo(todo._id))
    }

    return (
        <div>
            <span>{todo.text} | </span>
            <span>{todo.likeCount} | </span>
            <button onClick={() => dispatch(likeTodo(todo._id))}>like</button>
            <button onClick={() => dispatch(updateText(todo.text, todo._id))}>update</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}
