import history from '../history'

export const GET_RECIPE_BY_ID_REQUEST = 'GET_RECIPE_BY_ID_REQUEST'
export const GET_RECIPE_BY_ID_RESPONSE = 'GET_RECIPE_BY_ID_RESPONSE'

const RECIPE_URL = 'https://cryptic-beach-93122.herokuapp.com/'


//redux thunk function
export default function fetchRecipeByID(idFromScanner) {
    return dispatch => {

        //dispatching get recipe by id action creator
        dispatch(getRecipeByIdRequest());

        //fetching from API with id from Scanner or root page input
        fetch(`${RECIPE_URL}recipe/${idFromScanner}`)
            .then(res => res.json())
            .then(data => {
                dispatch(getRecipeByIdResponse(data))
                history.push('/recipe')
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