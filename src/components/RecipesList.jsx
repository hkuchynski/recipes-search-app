import React from 'react';

import { useSelector } from 'react-redux'; 

const RecipesList = () => {

    const { recipes, isLoading} = useSelector((state) => state.recipes);
    console.log('recipes', recipes);

    return (
        <div>
           
                {recipes && recipes?.data?.recipes && recipes.data.recipes.map((recipe) => {
                    return <div key={recipe.id}>{recipe.title}</div>
                })}
            
        </div>
    )
};

export default RecipesList;