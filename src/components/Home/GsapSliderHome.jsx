"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapSliderHome = ({ heading, subHeading, cards }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const screenWidth = window.innerWidth;
      let endX;

      if (screenWidth === 768) {
        endX = "-125%"; // iPad portrait
      } else if (screenWidth === 1024) {
        endX = "-86%"; // iPad landscape
      } else if (screenWidth < 1024 && screenWidth > 568) {
        endX = "-80%"; // Other tablets
      } else {
        endX = "-70%"; // Desktop
      }

      gsap.fromTo(
        "#about-timeline .botie-div .row",
        { x: "100%" },
        {
          x: endX,
          ease: "none",
          scrollTrigger: {
            trigger: "#about-timeline",
            scrub: 1.5,
            pin: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="about-timeline"
      className="about-timeline section panel overflow-hidden process-section section-padding"
    >
      <div className="section-outer panel">
        <div className="container max-w-lg firstcontainer">
          <div className="section-inner panel">
            <div className="panel vstack boTieCompian justify-center items-center">
              {/* Heading */}
              <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 xl:mb-4 max-w-700px mx-auto text-center">
                <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                  <div
                    className="cstack gap-1 py-1 px-3 border rounded-pill"
                    style={{ border: "1px solid #fff" }}
                  >
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                    <span className="fs-8 fw-bold text-uppercase">
                      {subHeading}
                    </span>
                  </div>
                  <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                    {heading.split(" ").map((word, i) =>
                      i === 2 ? (
                        <span
                          key={i}
                          className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                          style={{ backgroundColor: "#0fdac2", color: "#fff" }}
                        >
                          {word}
                        </span>
                      ) : (
                        ` ${word} `
                      )
                    )}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="botie-div">
                <div className="fixed-line"></div>
                <div className="row newBotie">
                  {cards.map((card, index) => (
                    <div key={index} className="col column-botie">
                      <div className="timeline-box panel vstack gap-8 text-center">
                        <div className="image-wrap panel overflow-hidden w-200px">
                          <Image
                            className="image w-100 origin-bottom"
                            src={card.img}
                            alt={card.title}
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className="content panel vstack items-center px-3 xl:px-6 process-card">
                          <div className="proces-slider-number">
                            <h3 className="title proces-card-heading mb-0">
                              {card.step}
                            </h3>
                          </div>
                          <p className="title h4 sm:h4 text-white">
                            {card.title}
                          </p>
                          <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End Timeline */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapSliderHome;
