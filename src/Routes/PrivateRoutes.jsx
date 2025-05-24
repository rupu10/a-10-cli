import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,reload} = use(AuthContext);

    if(reload){
        return <span className="loading loading-dots loading-xl"></span>
    }
    if(!user){
        return <Navigate state={location?.pathname} to='/signIn'></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoutes;