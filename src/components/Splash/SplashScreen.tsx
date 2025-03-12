"use client";

import React, { useEffect, useState } from "react";
import "./SplashScreen.module.css";
import clsx from "clsx";
import Image from "next/image";

const SplashScreen = () => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setVisible(true);
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setVisible(false);
          localStorage.setItem("hasSeenSplash", "true");
        }, 1000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={clsx("splashScreen", fadeOut && "fadeOut")}>
      <Image
        src="/images/logo/logo-landscape_new1.svg"
        alt="Logo"
        width={200}
        height={100}
        className="logo"
      />
    </div>
  );
};

export default SplashScreen;
