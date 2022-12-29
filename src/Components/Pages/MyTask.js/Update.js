import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const { register, handleSubmit } = useForm();
    const useData = useLoaderData();

    const handleSubmitprovider = (data) => {
        const taskData = data.text
        fetch(`http://localhost:5000/allTask/${useData[0]._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({taskData})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('updated Successfully');
            }
        })
    }
    return (
        <div>
            <h1 className='text-slate-500 dark:text-slate-400 text-center text-2xl font-bold mt-24'>If you want to update your task write here</h1>
            <form onSubmit={handleSubmit(handleSubmitprovider)}  className='px-3 lg:w-3/5 mx-auto mt-14'>
                <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        {/* <textarea value={task}  name='taskdescription' id="comment" rows="12" className="w-full px-0 text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 text-md" placeholder="Write your task..." required></textarea> */}
                        <input {...register("text" , { required: true })} placeholder="Update Your Task" type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10">Update</button>
            </form>
        </div>
    );
};

export default Update;