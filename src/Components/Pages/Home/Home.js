import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/counter/counterSlice';

const Home = () => {
    const user = useSelector(selectUser);
    const [task, setTask] = useState('');
    const [submit, setSubmit] = useState('');

    const submitHandler = event => {
        setTask(event.target.value);
    }

    const handlesubmit = event => {
         setSubmit(task);

        if(event.key === 'Enter'){
        const postData = {
                taskData: submit,
                email: user.email,
                name: user.displayName
            }
            fetch('http://localhost:5000/allTask', {
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

    
    }

    return (
        <div>
            <h1 className='text-slate-500 dark:text-slate-400 text-center text-2xl font-bold mt-24'>Start With Your Task</h1>
            <form  className='px-3 lg:w-3/5 mx-auto mt-14'>
                <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        {/* <textarea value={task}  name='taskdescription' id="comment" rows="12" className="w-full px-0 text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 text-md" placeholder="Write your task..." required></textarea> */}
                        <input onKeyDown={handlesubmit} onChange={submitHandler} placeholder="give a task" type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
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