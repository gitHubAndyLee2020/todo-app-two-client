import React,{ useState } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { createTodo,updateTodo } from '../actions/todos'
import { clearText,changeText } from '../actions/todo'

export default function Form() {
    const text = useSelector((state) => state.todo.text)
    const activeUpdate = useSelector((state) => state.todo.active)
    const id = useSelector((state) => state.todo.id)
    const dispatch = useDispatch()

    const documentize = text => {
        return {text: text}
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!activeUpdate) {
            dispatch(createTodo(documentize(text))) 
        } else { 
            dispatch(updateTodo(id, documentize(text)))
        }
        dispatch(clearText())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={e => dispatch(changeText(e.target.value))}/>
                <button type='submit'>{activeUpdate ? 'update' : 'submit'}</button>
            </form>
            <button onClick={() => dispatch(clearText())}>clear</button>
            <p>{activeUpdate ? 'true' : 'false'}</p>
            <p>{text}</p>
            <p>{id}</p>
        </div>
    )
}

