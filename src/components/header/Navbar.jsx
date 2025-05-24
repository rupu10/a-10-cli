import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [showMenu,setShowMenu] = useState(false);
  const menuRef = useRef();

  useEffect(()=>{
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  },[])

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
            <div className="relative" ref={menuRef}>
            <img onClick={()=> setShowMenu(!showMenu)} className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full mr-2 cursor-pointer" src={user.photoURL} alt="" />
            {showMenu && (<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow p-2 z-50">
                <p className="font-semibold">{user.displayName}</p>
                <button
                  onClick={handleSignOut}
                  className="mt-2 px-3 w-full bg-red-700 rounded-3xl text-white text-xl font-semibold border border-red-700 hover:bg-white hover:text-red-700 cursor-pointer"
                >
                  Logout
                </button>
              </div>)}
            </div>
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
