import React from 'react'
import Image from 'next/image'
import CustomIcons from '@/components/CustomIcons'
import CustomForm from './CustomForm'



const FifthSection = () => {


  return (
    <div className=" flex justify-between flex-col sm:grid sm:grid-cols-2 sm:place-items-center max-w-[1280px] px-6 pb-12 m-auto">
      <div className="sm:order-last sm:max-w-md ">
        <h1 className="pt-2 px-4 font-semibold sm:leading-snug text-3xl sm:text-5xl text-center pb-12 text-Prussian-500">
          Start connecting instantly and converting more Today
        </h1>
      </div>
      <div className="flex justify-center  pt-10 bg-contain bg-[url('/bg-form.svg')] bg-center bg-no-repeat w-1000 h-96">
        <p className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></p>
        <form className="px-6">
          <p className="font-semibold text-Elred-500 text-xl text-center pb-14">
            Registration Form
          </p>

          <div className="flex justify-center bg-white p-1 rounded-xl">
            <label
              className="bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs"
              htmlFor="name"
            >
              Name:
            </label>
            <input className="rounded-r-lg" type="text" />
          </div>
          <div className="flex justify-center bg-white mt-1 p-1 rounded-xl">
            <label
              className="bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs"
              htmlFor="email"
            >
              Email:
            </label>
            <input className="rounded-r-lg" type="text" />
          </div>
          <div className="flex justify-center bg-white mt-1 p-1 rounded-xl">
            <label
              className="bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input className="rounded-r-lg" type="text" />
          </div>
          <div className="flex justify-center bg-white mt-1 p-1 rounded-xl">
            <label
              className="bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs"
              htmlFor="business"
            >
              Business:
            </label>
            <input className="rounded-r-lg" type="text" />
          </div>
          <div className="flex justify-center bg-white mt-1 p-1 rounded-xl">
            <label
              className="bg-Prussian-500 px-4 py-1 rounded-lg text-white text-xs"
              htmlFor="country"
            >
              Country:
            </label>
            <input className="rounded-r-lg" type="text" />
          </div>
          <div>
            <button className="bg-Elred-500 rounded-xl text-xs text-white py-2 mt-1 w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FifthSection