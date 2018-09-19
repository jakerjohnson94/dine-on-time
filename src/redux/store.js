import thunk from 'redux-thunk'
import {
    compose,
    applyMiddleware,
    createStore,
} from "redux";

import {
    recipeReducer
} from './recipeReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(recipeReducer, composeEnhancers(applyMiddleware(thunk)))