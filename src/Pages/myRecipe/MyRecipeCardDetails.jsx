import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyRecipeCardDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    return (
        <div>
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
                <button onClick={()=>handleDelete(data._id)} className='btn'>delete</button>
            </div>
        </div>
        </div>
    );
};

export default MyRecipeCardDetails;