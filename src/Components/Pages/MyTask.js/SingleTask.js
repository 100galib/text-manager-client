import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SingleTask = ({alltas, refetch}) => {
    const {_id, taskData, name, imageData, taskName } = alltas;


        const deletetask = (id) => {
        fetch(`https://text-manager-server.vercel.app/allTask/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.deletedCount > 0){
                toast.success('delete successfully');
                refetch()
            }
        })
    }
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                {imageData ? <img className="rounded-t-lg" src={imageData} alt="Image_not Found" /> : ''}
            <div className="p-5">
                <div className='flex justify-between my-6'>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{taskName}</h5>
                <Link to={`/completetask/${_id}`}><button type="button" className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Completed</button></Link>
                </div>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">User Name: {name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{taskData}</p>
                <div className='flex justify-between my-6'>
                    <Link to={`/update/${_id}`}><button type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button></Link>
                    <Link to={`/viewDetails/${_id}`}><button type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</button></Link>
                    <button onClick={() => deletetask(_id)} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default SingleTask;