import { UPDATETEXT,CLEARTEXT,CHANGETEXT } from "../constants/updateTodoTypes"

export const changeText = (text) => {
    const action = {type:CHANGETEXT, payload: text}
    return action 
}

export const updateText = (text, id) => {
    const action = {type: UPDATETEXT, payload: {text: text, id: id}}
    return action
}

export const clearText = () => {
    const action = {type: CLEARTEXT}
    return action
}