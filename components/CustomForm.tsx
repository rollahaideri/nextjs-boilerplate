"use client"
import React, { useState } from 'react';
import { CustomButton } from '.';

const CustomForm = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

 const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
 };

 return (
    <div className="flex justify-center mx-12 pt-10 bg-contain bg-[url('/bg-form.svg')] bg-center bg-no-repeat w-1000 h-96">
        <p className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></p>
        <form className="p-6">
            <p className='font-semibold text-Elred-500 text-xl text-center pb-14'>Start Your New Project</p>
            
            <div className='flex justify-center bg-white p-1 rounded-xl'>
                <label className='bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs' htmlFor="name">Name:</label>
                <input className='rounded-r-lg' type="text" />
            </div>
            <div className='flex justify-center bg-white mt-1 p-1 rounded-xl'>
                <label className='bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs' htmlFor="email">Email:</label>
                <input className='rounded-r-lg' type="text" />
            </div>   
            <div className='flex justify-center bg-white mt-1 p-1 rounded-xl'>
                <label className='bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs' htmlFor="phone">Phone:</label>
                <input className='rounded-r-lg' type="text" />
            </div>
            <div>
            <button className='bg-Elred-500 rounded-xl text-xs text-white py-2 mt-1 w-full'>Submit</button>
            </div>
            
        </form>
        
    </div>
  );
};

export default CustomForm;