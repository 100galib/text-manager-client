import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const CompleteTsk = () => {
    const { register, handleSubmit } = useForm();
    const useData = useLoaderData();
    const newData = useData[0]

    const deletetask = (id) => {
        fetch(`http://localhost:5000/allTask/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.deletedCount > 0){
                toast.success('delete successfully');
            }
        })
    }

    const commentHandler = data => {
        console.log(data.comment)
    }
    return (
        <div className="max-w-sm mx-6 mt-10 p-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className='flex justify-between my-6'>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{newData.taskName}</h5>
        <Link to={'/mytask'}><button type="button" className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Not Complete</button></Link>
        </div>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">User Name: {newData.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{newData.taskData}</p>
        <div className='flex justify-between my-6'>
            <button onClick={() => deletetask(newData._id)} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
        </div>
        <form onSubmit={handleSubmit(commentHandler)}>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write Your comments</label>
            <input {...register("comment" , { required: true })} placeholder="write your comment" type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div> 
        </form>
    </div>
    );
};

export default CompleteTsk;