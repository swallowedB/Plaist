import React from "react";
import Blur from "./Blur";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div
      id="background"
      className="relative flex justify-center items-center h-screen bg-white overflow-hidden"
    >
      <Blur />
      <section
        id="main-content-box"
        className="relative flex justify-center items-center w-[90vw] h-[90vh] max-w-[767px] max-h-[1080px] bg-transparent"
      >
        {/* Glass inputfield */}
        <div
          id="input-container--glass"
          className="relative flex items-center justify-center h-screen w-[90%] max-w-[501px] max-h-[675px] bg-transparent rounded-2xl border border-white backdrop-blur-xl shadow-lg z-10"
        >
          {children}
        </div>
      </section>
    </div>
  );
}
