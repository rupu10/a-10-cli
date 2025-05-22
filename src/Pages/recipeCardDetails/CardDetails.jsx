import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const {id} = useParams();
    console.log(id);
    const data = useLoaderData();
    console.log(data);
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
                <button className='btn'>like</button>
            </div>
        </div>
    );
    
};

export default CardDetails;