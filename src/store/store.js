import {applyMiddleware,compose} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import thunkMiddleware from 'redux-thunk'
const middleWares =[logger,thunkMiddleware]

// const composeEnhancers = compose(applyMiddleware(...middleWares))
const preloadedState = {};

export const store = configureStore({
    reducer:rootReducer,
   
    // middleware: [logger,thunkMiddleware],
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({  serializableCheck: false }).concat(...middleWares),
    preloadedState
})

