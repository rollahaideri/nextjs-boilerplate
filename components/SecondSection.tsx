import React from 'react'
import Image from 'next/image'
import CustomIcons from '@/components/CustomIcons'



const SecondSection = () => {


  return (
    <div className=" flex justify-center p-4 pt-2 pb-14 max-w-[1280px] m-auto">
      <div className="items-center">
        <p className=" pt-20 px-4 text-center font-semibold text-3xl sm:text-5xl text-Prussian-500">
          Empower Your Business with On All-Inclusive App
        </p>
        <p className="pt-10 px-4 sm:text-2xl text-center text-Prussian-500">
          At Booker<b className="text-Elred-500 font-normal">Planner</b>, we're
          committed to simplifying booking, scheduling, and website development.
          We empower businesses and individuals to effortlessly manage
          appointments, enhance their online presence, and save time. Our
          comprehensive services include booking systems, scheduling solutions,
          and tailored website development. Elevate your online presence with
          us.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-20 m-auto text-center pt-20">
          <CustomIcons
            title="INOVATION"
            description="Lorem ipsum dolor sit amet,"
            icon="/Inovation-ic.png"
            alt="Inovation"
          />
          <CustomIcons
            title="QUALITY"
            description="Lorem ipsum dolor sit amet,"
            icon="/quality-ic.png"
            alt="Quality"
          />
          <CustomIcons
            title="EXPEREIENCE"
            description="Lorem ipsum dolor sit amet,"
            icon="/exprience-ic.png"
            alt="Experience"
          />
          <CustomIcons
            title="SUPER TEAM"
            description="Lorem ipsum dolor sit amet,"
            icon="/superteam-ic.png"
            alt="Superteam"
          />
          <CustomIcons
            title="SUPPORT"
            description="Lorem ipsum dolor sit amet,"
            icon="/support-ic.png"
            alt="Support"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondSection