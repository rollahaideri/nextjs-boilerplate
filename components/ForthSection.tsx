import React from "react";
import Image from "next/image";
import CustomIcons from "@/components/CustomIcons";
import CustomForm from "./CustomForm";

const ForthSection = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1280px] px-6 pt-28 pb-12 m-auto">
      <div className=" ">
        <h1 className="pt-2 px-4 font-semibold text-3xl sm:text-5xl text-center text-Prussian-500">
          Designed To Integrate with Your Branding
        </h1>
      </div>
      <div className="place-self-center sm:pt-20 pt-20 sm:min-w-[800px] ">
        <Image
          src="/forthSection.png"
          width={700}
          height={700}
          alt="third"
          className=""
        ></Image>
      </div>
      <p className="pt-10 px-4 sm:text-2xl text-center text-Prussian-500">
        "At Booker<b className="text-Elred-500 font-normal">Planner</b>, we
        understand the importance of maintaining your brand identity. That's why
        our platform is thoughtfully designed to seamlessly integrate with your
        branding elements. Customize your booking and scheduling experience with
        your company's logo, color scheme, and style, ensuring a cohesive and
        professional look. Our goal is to empower your brand while streamlining
        your scheduling and booking processes."
      </p>
    </div>
  );
};

export default ForthSection;
