import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const About = () => {
    const menu = useLoaderData();    
    return (
        <div className='grid grid-cols-4'>
            {
                menu.categories.map((item) => (
                    <Link key={item.idCategory} className='text-center gap-5 cardBg text-white mx-3 my-3 p-5 rounded-xl shadow-lg cursor-pointer' to="/home">
                        <img className='w-52 h-42 rounded-full mx-auto' src={item.strCategoryThumb} alt="" />
                        <h1><span className='font-semibold'>Category Name: </span>{item.strCategory}</h1>
                        {/* <p>{item.strCategoryDescription}</p> */}
                    </Link>
                ))
            }
        </div>
    );
};

export default About;