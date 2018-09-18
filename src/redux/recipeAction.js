export const GET_RECIPE_BY_ID_REQUEST = 'GET_RECIPE_BY_ID_REQUEST'
export const GET_RECIPE_BY_ID_RESPONSE = 'GET_RECIPE_BY_ID_RESPONSE'

const RECIPE_URL = 'https://cryptic-beach-93122.herokuapp.com/'


//redux thunk function
export function fetchRecipeByID(idFromScanner) {
    return dispatch => {

        //dispatching get recipe by id action creator
        dispatch(getRecipeByIdRequest());

        //fetching from API with id from Scanner, placeholder of 1 for now
        fetch(RECIPE_URL + 'recipe/1') //will be idFromScanner from above
            .then(res => res.json())
            .then(data => {
                dispatch(getRecipeByIdResponse(data))
                return data
            })
    }
}


//Get recipe by Id request
const getRecipeByIdRequest = () => {
    return {
        type: GET_RECIPE_BY_ID_REQUEST
    }
}

//Get recipe by Id response with data from thunk function
const getRecipeByIdResponse = data => {
    return {
        type: GET_RECIPE_BY_ID_RESPONSE,
        payload: data
    }
}