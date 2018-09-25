import { GET_RECIPE_BY_ID_REQUEST, GET_RECIPE_BY_ID_RESPONSE } from './recipeAction';
import { EATING_INPUT_TIME } from './eatingInputTimeAction';
import { SET_ACTIVE_STEP } from './activeStepAction';
const initialRecipeState = {
  fetching: false,
  recipe: '',
  ingredients: [],
  steps: [],
  eatingInputTime: '',
  activeStep: 0,
};

export function recipeReducer(state = initialRecipeState, action) {
  switch (action.type) {
    case GET_RECIPE_BY_ID_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_RECIPE_BY_ID_RESPONSE:
      return {
        ...state,
        fetching: false,
        recipe: action.payload,
        ingredients: action.payload.ingredients,
        steps: action.payload.steps,
      };
    case EATING_INPUT_TIME:
      return {
        ...state,
        eatingInputTime: action.payload,
      };
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };

    default:
      return state;
  }
}
