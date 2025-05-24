import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const AddRecipe = () => {
  const [selected, setSelected] = useState("");
  const handleChange = (value) => {
    setSelected(selected === value ? "" : value);
  };

  const navigate = useNavigate();
  const { user, reFetch } = use(AuthContext);
  // console.log(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let categories;
    if (selected === "dinner") categories = "dinner";
    else if (selected === "break") categories = "breakfast";
    else if (selected === "lunch") categories = "lunch";
    else if (selected === "others") categories = "others";

    const form = e.target;
    const title = form.title.value;
    const cuisineType = form.cuisine.value;
    const image = form.img.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instruction.value;
    const preparationTime = form.time.value;
    const likeCount = 0;
    const user_email = user.email;

    const newRecipe = {
      title,
      cuisineType,
      image,
      ingredients,
      instructions,
      preparationTime,
      categories,
      user_email,
      likeCount
    };
    console.log(newRecipe);

    fetch("https://a-10-server-flame.vercel.app/recipes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Data added successfully!",
            icon: "success",
            draggable: true,
          });
          reFetch();
          navigate(`/myRecipe/${user.email}`)
        }
      });

  };

  return (
    <div className=" w-10/12 mx-auto">
      <h1 className="text-center text-4xl font-semibold mb-6">
        Add a recipe here
      </h1>
      <div className="bg-gray-200 rounded-xl py-4">
        <div className="px-3">
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 md:gap-3">
              <fieldset className="fieldset w-full rounded-box p-4">
                <label className="label">Title</label>
                <input
                  name="title"
                  type="text"
                  className="input w-full"
                  placeholder="Recipe Title"
                />
              </fieldset>
              <fieldset className="fieldset w-full rounded-box p-4">
                <label className="label">Cuisine Type</label>
                <select name="cuisine" className="bg-base-100 p-2 rounded-sm">
                  <option value="Italian">Italian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Others">Others</option>
                </select>
              </fieldset>

              <fieldset className="fieldset w-full rounded-box p-4">
                <label className="label">Image URL</label>
                <input
                  name="img"
                  type="text"
                  className="input w-full"
                  placeholder="Image URL"
                />
              </fieldset>
              <fieldset className="fieldset w-full rounded-box p-4">
                <label className="label">ingredients</label>
                <input
                  name="ingredients"
                  type="text"
                  className="input w-full"
                  placeholder="ingredients"
                />
              </fieldset>
              <fieldset className="fieldset w-full rounded-box p-4">
                <label className="label">instruction</label>
                <input
                  name="instruction"
                  type="text"
                  className="input w-full"
                  placeholder="instruction"
                />
              </fieldset>
              <fieldset className="fieldset w-full rounded-box p-4">
                <label className="label">Preparation time {"(minute)"}</label>
                <input
                  name="time"
                  type="number"
                  className="input w-full"
                  placeholder="Preparation time (minute)"
                />
              </fieldset>
              <fieldset
                className="fieldset w-full rounded-box flex"
                name="categories"
              >
                <legend className="">category</legend>
                <label className="label">
                  <input
                    type="checkbox"
                    name="categories"
                    checked={selected === "dinner"}
                    onChange={() => handleChange("dinner")}
                  />
                  dinner
                </label>
                <label className="label">
                  <input
                    type="checkbox"
                    name="categories"
                    checked={selected === "break"}
                    onChange={() => handleChange("break")}
                  />
                  break Fast
                </label>
                <label className="label">
                  <input
                    type="checkbox"
                    name="categories"
                    checked={selected === "lunch"}
                    onChange={() => handleChange("lunch")}
                  />
                  lunch
                </label>
                <label className="label">
                  <input
                    type="checkbox"
                    name="categories"
                    checked={selected === "others"}
                    onChange={() => handleChange("others")}
                  />
                  Others
                </label>
              </fieldset>
            </div>
            <input type="submit" className="btn w-full mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
