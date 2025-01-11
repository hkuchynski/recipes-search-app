import { API_URL, RES_PER_PAGE, KEY } from '../../config';
import { 
    fetchRecipesAction, 
    fetchRecipesSuccessAction, 
    fetchRecipesFailureAction 
} from '../actions';


export const fetchRecipes = (query) => {
    return async dispatch => {
        dispatch(fetchRecipesAction(query)); 
    
        try {
            const response = await fetch(`${API_URL}?search=${query}&key=${KEY}`); 
            const recipes = await response.json(); 

            dispatch(fetchRecipesSuccessAction(recipes)); 
        } catch (error) { 
            dispatch(fetchRecipesFailureAction(error));
        }
    };
};