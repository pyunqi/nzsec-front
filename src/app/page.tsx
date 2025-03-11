import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
// import dynamic from 'next/dynamic';
// import '../styles/styles.css'
import React, { useEffect, useState } from 'react';
// // 动态导入 ThreeScene 组件，禁用服务器端渲染
// const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
//   loading: () => <>Loading...</>,
//   suspense: true,
//   ssr: false, // 禁用服务器端渲染
// });

export const metadata: Metadata = {
  title: "NewZealand Teach,Science,Culture",
  description: "This is Home for Students",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
    </>
  );
}
