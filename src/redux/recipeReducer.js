import {
  GET_RECIPE_BY_ID_REQUEST,
  GET_RECIPE_BY_ID_RESPONSE,
  GET_RECIPE_BY_ID_RESPONSE_ERROR,
  GET_ALL_RECIPES_REQUEST,
  GET_ALL_RECIPES_RESPONSE,
} from './recipeAction';
import { EATING_INPUT_TIME } from './eatingInputTimeAction';
import { SET_ACTIVE_STEP, SET_PREVIOUS_STEP } from './activeStepAction';
import { ADD_ALERT_TIMER, CLEAR_ALERT_TIMERS } from './alertTimersAction';

const initialRecipeState = {
  fetching: false,
  recipe: '',
  ingredients: [],
  steps: [],
  eatingInputTime: '',
  activeStep: 0,
  previousStep: null,
  alertTimers: [],
  allRecipes: [],
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
    case GET_RECIPE_BY_ID_RESPONSE_ERROR:
      return {
        ...state,
        fetching: false,
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
    case SET_PREVIOUS_STEP:
      return {
        ...state,
        previousStep: action.payload,
      };

    case ADD_ALERT_TIMER:
      return {
        ...state,
        alertTimers: [
          ...state.alertTimers,
          {
            alertTime: action.alertTime,
            stepName: action.stepName,
            alertMessage: action.alertMessage,
          },
        ],
      };
    case CLEAR_ALERT_TIMERS:
      return {
        ...state,
        alertTimers: [],
        previousStep: null,
        activeStep: 0,
      };
    case GET_ALL_RECIPES_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_ALL_RECIPES_RESPONSE:
      return {
        ...state,
        fetching: false,
        allRecipes: action.payload,
      };
    default:
      return state;
  }
}
