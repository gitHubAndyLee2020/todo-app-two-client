import axios from 'axios'

const url = 'https://todo-app-two-techandy42.herokuapp.com/todos'

export const fetchTodos = () => axios.get(url)
export const createTodo = (todo) => axios.post(url, todo)
export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo)
export const deleteTodo = (id) => axios.delete(`${url}/${id}`)
export const likeTodo = (id) => axios.patch(`${url}/${id}/likeTodo`)
