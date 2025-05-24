import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allRecipes">All Recipe</NavLink>
      </li>
      {user ? <>
          <li>
            <NavLink to="/addRecipe">Add a recipe</NavLink>
          </li>
          <li>
            <NavLink to={`/myRecipe/${user.email}`}>My Recipe</NavLink>
          </li>
        </>:
        <>
        <li>
        <NavLink to="/signin">Log in</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Register</NavLink>
      </li>
        </>}
    </>
  );

  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="text-red-500 text-3xl font-bold">
            Recipe<span className="text-yellow-500">Books</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
            <img className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full mr-2 cursor-pointer" src={user.photoURL} alt="" />
              <button className="btn" onClick={handleSignOut}>
                log out
              </button>
            </>
          ) : (
            <>
              <Link className="btn" to="/signin">
                log in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
