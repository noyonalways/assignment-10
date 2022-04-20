import React from 'react';
import auth from '../../firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const RequireAuth = ({children}) => {
    const[user, loading] = useAuthState(auth);

    const location = useLocation();

    if(loading){
        return <Spinner/>
    }

    if(!user){
        return <Navigate to='/signin' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;