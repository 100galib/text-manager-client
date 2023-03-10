import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/counter/counterSlice';

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const user = useSelector(selectUser);

    const imghostKey = process.env.REACT_APP_imagebb_key;

    const fileUpload = data => {
        const image = data.image[0]

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imghostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(image => {
            if(image.success){
                const postData = {
                        taskData: data.taskdescription,
                        email: user.email,
                        name: user.displayName,
                        taskName: 'added Task',
                        imageData : image.data.url,
                        task: 'media'
                    }
                    fetch('https://text-manager-server.vercel.app/allTask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    })
                    .then(res => res.json())
                    .then(data => {console.log(data)
                        if(data.acknowledged){
                            toast.success('Task is Submitted');
                        }
                    })
            }
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmit(fileUpload)} className='px-3 lg:w-3/5 mx-auto mt-24'>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <textarea {...register("taskdescription" , { required: true })} id="comment" rows="12" className="w-full px-0 text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 text-md" placeholder="Write your task..."></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        SUBMIT 
                    </button>
                    <div className="flex pl-0 space-x-1 sm:pl-2">
                        <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Set location</span>
                        </button>
                        <input {...register("image" , { required: true })} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple></input>                     
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
};

export default AddTask;