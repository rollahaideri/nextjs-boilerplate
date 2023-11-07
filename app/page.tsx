import React from "react";
import Image from "next/image";
import { CustomButton } from "@/components";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import ForthSection from "@/components/ForthSection";
import FifthSection from "@/components/FifthSection";
import CustomForm from "@/components/CustomForm";

const Home = () => {
  return (
    <main>
      <div className="flex sm:grid sm:grid-cols-2 flex-col px-4 py-10   max-w-[1280px] h-full m-auto">
        <div className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3">
          <h1 className=" text-center sm:text-left sm:text-4xl sm:m-0 sm:leading-[4rem] text-Prussian-500 sm:pt-20 pt-10  font-semibold text-3xl sm:max-w-md ">
            Booker<b className="text-Elred-500 font-semibold">Planner: </b>
            <b className="pt-10 font-normal sm:text-4xl">
              Your Time, Our Design.{" "}
            </b>
            <b className="font-normal sm:text-4xl">Simplify, Schedule, Soar.</b>
          </h1>
        </div>
        <div className=" sm:pt-4 pt-4 sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-5">
          <Image
            src="/hero.png"
            width={600}
            height={600}
            alt="Hero"
            className="object-scale-down"
          ></Image>
        </div>
        <div className="pt-8 text-center sm:col-start-1 sm:row-start-3 sm:row-end-5 sm:justify-self-start">
          <CustomButton title="Get Started" />
        </div>
      </div>

      <SecondSection />
      <ThirdSection />

      <CustomForm />
      <ForthSection />
      <FifthSection />
    </main>
  );
};

export default Home;
