import thunk from 'redux-thunk'
import {
    applyMiddleware,
    createStore,
} from "redux";

import {
    recipeReducer
} from './recipeReducer'


export const store = createStore(recipeReducer, applyMiddleware(thunk))