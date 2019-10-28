//import  store and apply middelware

import { createStore, applyMiddleware,compose } from 'redux'

import thunk from 'redux-thunk';

import rootReducer from './reducer';

const initialState = {};

const  middelware ={thunk};

const Store = createStore(
    rootReducer,initialState, compose(
        applyMiddleware(...middelware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)
console.log("hello code",Store)

export default Store;
