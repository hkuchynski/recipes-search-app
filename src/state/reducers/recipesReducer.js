import { RecipesActionTypes } from '../action-types';

const initialState = {
    loading: false,
    error: null,
    recipes: []
}

const recipesReducer = (state = initialState, action) => {
    switch(action.type) {
        case RecipesActionTypes.FETCH_RECIPES: 
            return { 
                ...state, 
                loading: true
            } 
        case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state, 
                loading: false,
                recipes: action.payload
            }
        case RecipesActionTypes.FETCH_RECIPES_ERROR:
            return {  
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default recipesReducer;