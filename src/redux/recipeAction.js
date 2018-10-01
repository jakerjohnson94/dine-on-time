import history from '../history';

export const GET_RECIPE_BY_ID_REQUEST = 'GET_RECIPE_BY_ID_REQUEST';
export const GET_RECIPE_BY_ID_RESPONSE = 'GET_RECIPE_BY_ID_RESPONSE';
export const GET_ALL_RECIPES_REQUEST = 'GET_ALL_RECIPES_REQUEST'
export const GET_ALL_RECIPES_RESPONSE = 'GET_ALL_RECIPES_RESPONSE'
export const GET_RECIPE_BY_ID_RESPONSE_ERROR = 'GET_RECIPE_BY_ID_RESPONSE_ERROR';

const RECIPE_URL = 'https://cryptic-beach-93122.herokuapp.com/';

//redux thunk function
export default function fetchRecipeByID(id) {
  return dispatch => {
    //dispatching get recipe by id action creator
    dispatch(getRecipeByIdRequest());
    //fetching from API with id from Scanner or root page input
    fetch(`${RECIPE_URL}recipe/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(getRecipeByIdResponse(data));
        history.push(`/recipe/${id}`);
        return data;
      })
      .catch(err => {
        dispatch(getRecipeByIdResponseError(err));
        history.push(`/error`);
      });
  };
}

//redux thunk function
export function fetchRecipeByURLParam(id) {
  return dispatch => {
    //dispatching get recipe by id action creator
    dispatch(getRecipeByIdRequest());
    //fetching from API with id from Scanner or root page input
    fetch(`${RECIPE_URL}recipe/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(getRecipeByIdResponse(data));
        history.push(`/recipe/${id}`);
        return data;
      })
      .catch(err => {
        dispatch(getRecipeByIdResponseError(err));
        history.push(`/error`);
      });
  };
}

//get all recipes redux thunk
export function fetchAllRecipes() {
  return dispatch => {
    dispatch(getAllRecipesRequest());
    fetch(`${RECIPE_URL}recipes`)
      .then(res=>res.json())
      .then(data=> {
        dispatch(getAllRecipesResponse(data))
      })
  }
}

//Get recipe by Id request
const getRecipeByIdRequest = () => {
  return {
    type: GET_RECIPE_BY_ID_REQUEST,
  };
};

//Get recipe by Id response with data from thunk function
const getRecipeByIdResponse = data => {
  return {
    type: GET_RECIPE_BY_ID_RESPONSE,
    payload: data,
  };
};

//Get recipe by Id response with error n
const getRecipeByIdResponseError = data => {
  return {
    type: GET_RECIPE_BY_ID_RESPONSE_ERROR,
    payload: data,
  };
};

//Get all recipes request
const getAllRecipesRequest = () => {
  return {
    type: GET_ALL_RECIPES_REQUEST,
  }
}

//Get all recipes response
const getAllRecipesResponse = (data) => {
  return {
    type: GET_ALL_RECIPES_RESPONSE,
    payload: data
  }
}

