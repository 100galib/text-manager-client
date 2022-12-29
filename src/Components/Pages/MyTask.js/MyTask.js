import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/counter/counterSlice';
import SingleTask from './SingleTask';

const MyTask = () => {
    const user = useSelector(selectUser);
    const {data: alltastks = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch(`https://text-manager-server.vercel.app/allTask?email=${user?.email}`);
            const data = res.json();
            return data;
        }
    })
    return (
        <>
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center'>
            {
                alltastks.map(alltas => <SingleTask refetch={refetch} key={alltas._id} alltas={alltas}></SingleTask>)
            }
        </div>
        </>
    );
};

export default MyTask;