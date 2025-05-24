import React from 'react';
import { Link, useLoaderData} from 'react-router';
import MyRecipeCard from './MyRecipeCard';


const MyRecipe = () => {;
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='w-10/12 mx-auto '>
            {
                !data.length < 1? <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
                {
                    data.map(myRec=> <MyRecipeCard myRec={myRec} key={myRec._id}></MyRecipeCard>)
                }
            </div> : <div>
            <h1 className='text-4xl text-center '>you didn't create any recipe plz create or add a recipe</h1>
            <div className='flex items-center justify-center mt-6'>
                <Link className='px-3 py-2 border border-green-600 text-2xl text-white bg-green-600 rounded-3xl font-bold hover:bg-white hover:text-green-600' to='/addRecipe'>Add a recipe here</Link>
            </div>
            </div>
            }
        </div>

    );
    
};

export default MyRecipe;