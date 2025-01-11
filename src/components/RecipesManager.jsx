import React from 'react';

import RecipesList from './RecipesList';
import Recipe from './Recipe';
import ShoppingList from './ShoppingList';

const shoppingList = [];
const recipes = [];

const RecipesManager = () => {
    return (
        <>
            <div className="results">
                <RecipesList />
            </div>
            <div className="recipe">
            {
                recipes || likesList
                ? <Recipe /> 
                : null
            }
            </div>
            <div className="shopping">
                <h2 className="heading-2">My Shopping List</h2>
                {
                    shoppingList && shoppingList.length > 0
                    ? <ShoppingList />
                    : null
                }
                    <div className="copyright">
                    &copy; by Hanna Kuchynski and Jonas Schmedtmann
                </div>
            </div>
        </>
    )
};

export default RecipesManager;