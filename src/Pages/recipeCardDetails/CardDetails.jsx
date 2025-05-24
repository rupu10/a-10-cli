import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const CardDetails = () => {
    
    const data = useLoaderData();

    console.log(data._id);
    const [likeCount,setLikeCount] = useState(data.likeCount)
    const handleLike = (id)=>{
        const newCount = likeCount + 1;
        fetch(`https://a-10-server-flame.vercel.app/recipes/${id}`,{
            method: 'PATCH',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify({likeCount: newCount})
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.modifiedCount){
                setLikeCount(newCount)
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-center text-4xl font-semibold mb-6'>{data.title}</h1>
            <div>
                <img src={data.image} alt="" />
                <h1 className='text-2xl font-semibold my-4'>Cuisine Type: {data.cuisineType}</h1>
                <h1 className='text-lg'>Ingredients you need: {data.ingredients}</h1>
                <h1 className='text-lg'>How to cook: {data.instructions}</h1>
                <h1 className='text-lg'>Times you needed: {data.preparationTime} minute</h1>
                <h1 className='text-lg'>Food Category: {data.categories}</h1>
            </div>
            <div className='flex justify-end mt-4'>
                <button onClick={()=>handleLike(data._id)} className='btn'>like</button>
            </div>
        </div>
    );
    
};

export default CardDetails;