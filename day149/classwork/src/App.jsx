import React, { useEffect } from "react";
import gsap from "gsap";

export default function App() {
  useEffect(() => {
    gsap.to(".text-animation", {
      duration: 1, // 1 second
      y: "50vh", // 50% of the height of the viewport
      x: "100vw", // 100% of the width of the viewport
      xPercent: -100, // 100% of the width of the element
      yPercent: -50, // 50% of the height of the element
      rotate: 360,// rotate the element 360 degrees
      yoyo: true,// play the animation in reverse
      repeat: -1, // repeat the animation infinitely
      stagger: 1// stagger the animation by 1 second
    });
  }, []);
  return (
    <div className="bg-blue-500 block h-screen ">
      <div className="size-64 text-animation bg-red-400 rounded-2xl" />
      <div className="size-64 text-animation bg-red-400 rounded-2xl" />
      <div className="size-64 text-animation bg-red-400 rounded-2xl" />
    </div>
  );
}