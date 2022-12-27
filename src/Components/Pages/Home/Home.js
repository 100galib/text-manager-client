import React from 'react';

const Home = () => {

    const handleKeyDown = event => {

        if(event.key === 'Enter'){
            console.log('key is down')
        }

    }

    return (
        <div>
            <h1 className='text-slate-500 dark:text-slate-400 text-center text-2xl font-bold mt-24'>Start With Your Task</h1>
            <form onKeyDown={handleKeyDown} className='px-3 lg:w-3/5 mx-auto mt-14'>
                <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <textarea name='taskdescription' id="comment" rows="12" className="w-full px-0 text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 text-md" placeholder="Write your task..." required></textarea>
                    </div>
                </div>
            </form>
            <div className='lg:w-3/5 text mx-auto mb-10 mt-0'>
            <p className='text-slate-500 dark:text-slate-400 pl-6'>press enter</p>
            </div>
        </div>
    );
};

export default Home;