import {
    GET_RECIPE_BY_ID_REQUEST,
    GET_RECIPE_BY_ID_RESPONSE
} from './recipeAction'

const initialRecipeState = {
    fetching: false,
    recipe
}

export function recipeReducer(state = initialRecipeState, action) {
    switch (action.type) {
        case GET_RECIPE_BY_ID_REQUEST:
            return {
                ...state,
                fetching: true
            };
        case GET_RECIPE_BY_ID_RESPONSE:
            return {
                fetching: false,
                recipe: action.payload
            }
    }
}