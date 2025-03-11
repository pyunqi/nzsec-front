"use client";

import dynamic from "next/dynamic";
import React, { FC } from "react";

// 动态导入 ThreeScene 组件，禁用服务器端渲染
const ThreeScene = dynamic(() => import("../ThreeScene"), { ssr: false });

const Greeting: FC<{ name: string }> = (props) => <h1>hello, {props.name}</h1>;

const Hero: FC = () => {
  return (
    <section className="relative h-[80vh] my-[160px] border-0">
      {/* Container for balloon and slogan & description */}
      <div className="relative h-full border-0">
        
        {/* The balloon of animation */}
        <div className="w-full h-full flex justify-center items-center border-0 absolute">
          <ThreeScene />
        </div>

        {/* The slogan and description */}
        <div className="w-full h-full border-0 absolute text-center">
          <h1 className="mt-[55%] md:mt-[10%] lg:mt-[10%] text-base md:text-4xl lg:text-5xl font-sans font-bold text-center">
            Newzealand S.E.C Centre
            <span className="block mt-6 mb-10">SCIENCE , EDUCATION , CULTURE.</span>
          </h1>
          
          <div className="text-base md:text-xl lg:text-2xl font-sans italic text-white my-4 leading-relaxed">
            <h2>The New Zealand S.E.C Centre is an independent legal entity registered in New Zealand.</h2>
            <h2>We focus on work in the fields of education, technology, and culture!</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
