import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE } from '../constants/actionTypes'

export default (todos = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...todos, action.payload]
        case DELETE:
            return todos.filter((todo) => todo._id !== action.payload)
        case UPDATE:
            return todos.map((todo) => (todo._id === action.payload._id ? action.payload : todo))
        case LIKE:
            return todos.map((todo) => (todo._id === action.payload._id ? action.payload : todo))
        default:
            return todos
    }
}