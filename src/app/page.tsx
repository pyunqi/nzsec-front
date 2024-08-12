'use client'
import Image from "next/image";
import dynamic from 'next/dynamic';
import '../styles/styles.css'
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
// 动态导入 ThreeScene 组件，禁用服务器端渲染
const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
  ssr: false, // 禁用服务器端渲染
});
export default function Home() {
  return (
    <>
    <ThreeScene />
    <div className="overlay">
    
      <p>
        <b>新西兰教科文</b>
      </p>
      <p className="right">
        
      </p>
      <h2>
      <Button text={"动效演示"}></Button>
      </h2>
    </div>
  </>
  );
}
