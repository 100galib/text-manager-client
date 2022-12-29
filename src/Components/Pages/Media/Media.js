import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleMedia from './SingleMedia';

const Media = () => {
    const {data: alltastks = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/allTask?task=media`);
            const data = res.json();
            return data;
        }
    })
    return (
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center'>
            {
                alltastks.map(alltas => <SingleMedia refetch={refetch} key={alltas._id} alltas={alltas}></SingleMedia>)
            }
        </div>
    );
};

export default Media;