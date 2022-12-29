import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetailsPage = () => {
    const useData = useLoaderData();
    const newData = useData[0]
    return (
        <div className="max-w-sm mx-6 mt-10 p-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className='flex justify-between my-6'>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{newData.taskName}</h5>
        </div>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">User Name: {newData.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{newData.taskData}</p>
    </div>
    );
};

export default ViewDetailsPage;