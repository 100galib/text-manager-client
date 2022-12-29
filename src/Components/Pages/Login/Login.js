import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../../features/counter/counterSlice';
import {signInWithEmailAndPassword, auth, signInWithPopup, porvider} from '../../../Firebase/firebase';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const loginHandler = data => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
              }))
              navigate(from, { replace: true });

        })
        .catch(error => console.error(error))
    }

    const singinWithGoogle = () => {
        signInWithPopup(auth, porvider)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
              }))
              navigate(from, { replace: true });
        })
        .catch(error => console.error(error))
    }

    return (
    <React.Fragment>
        <form className='lg:w-2/5 mx-auto border rounded-lg border-gray-300 p-8 mt-20' onSubmit={handleSubmit(loginHandler)}>
        <div className='text-center text-3xl font-bold text-slate-500 dark:text-slate-400'><h1>LogIn</h1></div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input {...register("email" , { required: true })} placeholder="Email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div> 
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input {...register("password" , { required: true })} placeholder="Password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div> 
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        <br />
        <p className='font-bold my-2 text-slate-500 dark:text-slate-400'>New User <Link to={'/register'} className="text-cyan-500">Please Register</Link></p>
        <div className='flex items-center justify-center mt-3 mb-6'>
            <hr className='w-3/5' />
            <h5 className='mx-4 text-slate-500 dark:text-slate-400'>OR</h5>
            <hr className='w-3/5' />
        </div>
        <div className='text-center'>
        <button onClick={singinWithGoogle} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Sign in with Google
         </button>
        </div>
    </form>
    </React.Fragment>

    );
};

export default Login;