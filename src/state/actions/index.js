import { RecipesActionTypes } from '../action-types';

export const fetchRecipesAction = (query) => ({
    type: RecipesActionTypes.FETCH_RECIPES,
    payload: query
});

export const fetchRecipesSuccessAction = (recipes) => ({
    type: RecipesActionTypes.FETCH_RECIPES_SUCCESS,
    payload: recipes
});

export const fetchRecipesFailureAction = (error) => ({
    type: RecipesActionTypes.FETCH_RECIPES_ERROR,
    payload: error
});