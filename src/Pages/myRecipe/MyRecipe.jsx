import React from 'react';
import { useLoaderData} from 'react-router';
import MyRecipeCard from './MyRecipeCard';


const MyRecipe = () => {;
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='w-10/12 mx-auto '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
            {
                data.map(myRec=> <MyRecipeCard myRec={myRec} key={myRec._id}></MyRecipeCard>)
            }
        </div>
        </div>

    );
    
};

export default MyRecipe;