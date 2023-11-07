import React from "react";
import Image from "next/image";
import CustomIcons from "@/components/CustomIcons";
import CustomForm from "./CustomForm";

const ThirdSection = () => {
  return (
    <div className="flex justify-between max-w-[1280px] px-6 pb-10 m-auto ">
      <div className="sm:grid sm:grid-cols-2 sm:place-items-center">
        <div className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2">
          <h1 className="pt-2 px-4 font-semibold text-3xl sm:text-5xl text-center text-Prussian-500">
            Effortless Scheduling with Booker
            <b className="font-normal text-Elred-500">Planner</b>
          </h1>
        </div>
        <div className="sm:col-start-2 sm:row-start-2 sm:row-end-5 sm:justify-self-center">
          <p className="pt-10 px-4 sm:text-2xl text-center text-Prussian-500">
            Our user-friendly platform offers intuitive scheduling features that
            allow you to effortlessly create, manage, and track appointments
            with precision. We provide you with the flexibility to customize
            your scheduling parameters, ensuring that our solutions align
            perfectly with your unique needs and preferences.
          </p>
        </div>
        <div className="sm:pt-20 pt-10 sm:col-start-1 sm:row-start-2 sm:row-end-5">
          <Image
            src="/thirdSection.png"
            width={600}
            height={600}
            alt="third"
            className="object-scale-down"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
