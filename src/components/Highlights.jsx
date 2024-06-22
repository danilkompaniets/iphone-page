import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1.5, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full flex-col md:flex-row common-padding bg-zinc"
    >
      <div className="screen-max-width flex ">
        <div className="mb-12 w-full flex md:items-end md:flex-row flex-col  justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5 ">
            <p className="link opacity-0 ">
              watch the film <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link opacity-0">Watch the event</p>
          </div>
        </div>

      </div>
        <VideoCarousel />
    </section>
  );
};

export default Highlights;
