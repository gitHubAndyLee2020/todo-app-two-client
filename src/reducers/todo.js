import { UPDATETEXT,CLEARTEXT,CHANGETEXT } from "../constants/updateTodoTypes"

export default (todo = {text:'',active:false,id:''}, action) => {
    switch (action.type) {
        case CHANGETEXT:
            return {text:action.payload,active:todo.active,id:todo.id}
        case UPDATETEXT:
            return {text:action.payload.text,active:true,id:action.payload.id}
        case CLEARTEXT:
            return {text:'',active:false,id:''}
        default:
            return todo
    }
}