"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
// 动态导入 ThreeScene 组件，禁用服务器端渲染
const ThreeScene = dynamic(() => import("../ThreeScene"), {
  // loading: () => <>Loading...</>,
  suspense: true,
  ssr: false, // 禁用服务器端渲染
});

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-full overflow-hidden rounded-md"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <ThreeScene />
                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                    <div className="w-full px-4">
                      <div className="mx-auto max-w-[800px] text-center">
                        <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                          Newzealand S.E.C
                        </h1>
                        <p className="mb-12 text-2xl !leading-relaxed text-body-color sm:text-lg md:text-xl">
                          Sologons?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
