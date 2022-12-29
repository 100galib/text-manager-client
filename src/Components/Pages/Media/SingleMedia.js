import React from 'react';

const SingleMedia = ({alltas}) => {
    const {taskData, name, taskName } = alltas;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <div className='flex justify-between my-6'>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{taskName}</h5>
                </div>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">User Name: {name}</h5>
                <p className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-gray-200">Task Details-</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{taskData}</p>
            </div>
        </div>
    );
};

export default SingleMedia;