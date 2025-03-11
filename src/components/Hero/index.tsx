"use client";

import dynamic from "next/dynamic";
import React, { FC } from "react";

// 动态导入 ThreeScene 组件，禁用服务器端渲染
const ThreeScene = dynamic(() => import("../ThreeScene"), { ssr: false });

const Greeting: FC<{ name: string }> = (props) => <h1>hello, {props.name}</h1>;

const Hero: FC = () => {
  return (
    <section className="relative h-[90vh] border-0">
      {/* Container for balloon and slogan & description */}
      <div className="relative h-full border-0">
        
        {/* The balloon of animation */}
        <div className="w-full h-full flex border-0 absolute">
          <ThreeScene />
        </div>

        {/* The slogan and description */}
        <div className= "text-black w-full h-full border-0 absolute text-center lg:my-[160px] my-[40px] ">
          <h2 className="mt-[55%] md:mt-[10%] lg:mt-[10%] text-base md:text-4xl lg:text-5xl font-sans font-bold text-center">
            Newzealand S.E.C Centre
            <span className="block mt-6 mb-10">SCIENCE , EDUCATION , CULTURE.</span>
          </h2>
          
          <div className="text-black text-base md:text-3xl lg:text-4xl font-sans italic text-white my-4 leading-relaxed">
            <h3 className="text-black">The New Zealand S.E.C Centre is an independent legal entity registered in New Zealand.</h3>
            <h3 className="text-black" >We focus on work in the fields of education, technology, and culture!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
