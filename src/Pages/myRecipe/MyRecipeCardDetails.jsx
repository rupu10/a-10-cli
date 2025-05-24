import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

const MyRecipeCardDetails = () => {
    const data = useLoaderData();
    const {setReload} = use(AuthContext)
    const navigate = useNavigate();
    // console.log(data);
    const handleDelete = (id,email) => {
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
                fetch(`http://localhost:7500/recipes/${id}`,{
                    method: 'DELETE'
                } )
                .then(res=>res.json())
                .then(data=> {
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your recipe has been deleted.",
                            icon: "success"
                          });
                          setReload((prev) => !prev);
                          navigate(`/myRecipe/${email}`)
                    }
                })
              
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
                <button onClick={()=>handleDelete(data._id,data.user_email)} className='btn'>delete</button>
            </div>
        </div>
        </div>
    );
};

export default MyRecipeCardDetails;