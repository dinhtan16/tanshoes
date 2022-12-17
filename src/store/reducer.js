import {combineReducers} from 'redux'
import { userContext } from '../context/UserContext'
export const rootReducer =combineReducers({
        user: userContext
})