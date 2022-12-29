import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUser } from '../../../features/counter/counterSlice';

const PrivateRoutes = ({children}) => {
    const location = useLocation(); 
    const user = useSelector(selectUser);   

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;