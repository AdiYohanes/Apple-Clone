import { Html } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(".loader", {
        rotation: 180,
        duration: 2,
        ease: "power2.inOut",
        alternate: true
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <Html>
      <div 
        ref={loaderRef} 
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/75"
      >
        <div className="loader flex w-[60px] h-[16px] justify-between animate-[l3-0_2s_infinite_alternate]">
          <div className="loader-circle w-[16px] h-[16px] bg-[#808080] animate-[l3-1_1s_infinite_alternate]"></div>
          <div className="loader-circle w-[16px] h-[16px] bg-[#FFFFFF] animate-[l3-1_1s_infinite_alternate] [--s:-1]"></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;