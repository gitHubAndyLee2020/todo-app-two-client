import { combineReducers } from 'redux'

import todos from './todos'
import todo from './todo'

export const reducers = combineReducers({ todos,todo })

