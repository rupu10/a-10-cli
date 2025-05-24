import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import RecipeCard from '../../components/recipeCard/RecipeCard';

const AllRecipe = () => {
    const {recipes, setRecipes} = use(AuthContext)
    return (
        <div className='mt-6 w-10/12 mx-auto'>
                <h1 className='text-5xl font-thin text-center mb-8'>Recipes</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
                    {
                        recipes.map((recipe)=> <RecipeCard recipe={recipe} setRecipes={setRecipes} key={recipe._id}></RecipeCard>)
                    }
                </div>
            </div>
    );
};

export default AllRecipe;