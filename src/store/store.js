
import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import thunkMiddleware from 'redux-thunk'

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type){
//         return next(action)
//     }
//     console.log('type',action.type)
//     console.log('payload',action.payload)
//     console.log('currentState1',store.getState())

//     next(action)
//     console.log('currentState2',store.getState())

// }

const middleWares =[thunkMiddleware]

// const composeEnhancers = compose(applyMiddleware(...middleWares))
const preloadedState = {};

export const store = configureStore({
    reducer:rootReducer,
   
    // middleware: [logger,thunkMiddleware],
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({  serializableCheck: false }).concat(...middleWares),
    preloadedState
})

