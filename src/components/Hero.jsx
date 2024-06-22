import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  useGSAP(() => {
    gsap.to("#hero-p", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, translateY: -20, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-col flex-center">
        <p id="hero-p" className="hero-title">
          Iphone 15 pro
        </p>

        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a className="btn" href="#highlights">
          Buy Now
        </a>
        <p className="font-normal text-xl">for 199$/month or 999$</p>
      </div>
    </section>
  );
};

export default Hero;
