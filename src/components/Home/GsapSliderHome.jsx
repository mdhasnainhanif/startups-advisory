"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapSliderHome = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const screenWidth = window.innerWidth;
      let endX;

      if (screenWidth === 768) {
        // ✅ iPad portrait
        endX = "-125%";
      } else if (screenWidth === 1024) {
        // ✅ iPad / iPad Pro landscape
        endX = "-86%";
      } else if (screenWidth < 1024 && screenWidth > 568) {
        // ✅ Other tablets (between 569px – 1023px)
        endX = "-80%";
      } else {
        // ✅ Desktop (>1024px)
        endX = "-70%";
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
                    <span
                      className="d-inline-block w-4px h-4px rounded-circle bg-primary"
                      style={{ backgroundColor: "white" }}
                    ></span>
                    <span className="fs-8 fw-bold text-uppercase">
                      What We Offer
                    </span>
                  </div>
                  <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                    BowTie{" "}
                    <span
                      className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                      style={{ backgroundColor: "#0fdac2", color: "#fff" }}
                    >
                      Campaign
                    </span>{" "}
                    Lifecycle
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="botie-div">
                <div className="fixed-line"></div>
                <div className="row newBotie">
                  {/* Card 1 */}
                  <div className="col column-botie">
                    <div className="timeline-box panel vstack gap-8 text-center">
                      <div className="image-wrap panel overflow-hidden w-200px">
                        <Image
                          className="image w-100 origin-bottom"
                          src="/assets/images/proces-icon-1.svg"
                          alt="Pre-Launch Positioning & Teasers"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="content panel vstack items-center px-3 xl:px-6 process-card">
                        <div className="proces-slider-number">
                          <h3 className="title proces-card-heading mb-0">01</h3>
                        </div>
                        <p className="title h4 sm:h4 text-white">
                          Pre-Launch Positioning & Teasers
                        </p>
                        <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                          We build anticipation and position your brand for
                          maximum impact before launch.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col column-botie">
                    <div className="timeline-box panel vstack gap-8 text-center">
                      <div className="image-wrap panel overflow-hidden w-200px">
                        <Image
                          className="image w-100 origin-bottom"
                          src="/assets/images/proces-icon-2.svg"
                          alt="High-Impact Launch Activation"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="content panel vstack items-center px-3 xl:px-6 process-card">
                        <div className="proces-slider-number">
                          <h3 className="title proces-card-heading mb-0">02</h3>
                        </div>
                        <p className="title h4 sm:h4 text-white">
                          High-Impact Launch Activation
                        </p>
                        <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                          Execute a coordinated multi-channel launch that drives
                          immediate engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col column-botie">
                    <div className="timeline-box panel vstack gap-8 text-center">
                      <div className="image-wrap panel overflow-hidden w-200px">
                        <Image
                          className="image w-100 origin-bottom"
                          src="/assets/images/proces-icon-3.svg"
                          alt="Post-Launch Re-Engagement & UGC"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="content panel vstack items-center px-3 xl:px-6 process-card">
                        <div className="proces-slider-number">
                          <h3 className="title proces-card-heading mb-0">03</h3>
                        </div>
                        <p className="title h4 sm:h4 text-white">
                          Post-Launch Re-Engagement & UGC
                        </p>
                        <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                          Leverage user-generated content and targeted
                          re-engagement to maintain momentum.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="col column-botie">
                    <div className="timeline-box panel vstack gap-8 text-center">
                      <div className="image-wrap panel overflow-hidden w-200px">
                        <Image
                          className="image w-100 origin-bottom"
                          src="/assets/images/proces-icon-4.svg"
                          alt="Multi-Channel Touchpoint Orchestration"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="content panel vstack items-center px-3 xl:px-6 process-card">
                        <div className="proces-slider-number">
                          <h3 className="title proces-card-heading mb-0">04</h3>
                        </div>
                        <p className="title h4 sm:h4 text-white">
                          Multi-Channel Touchpoint Orchestration
                        </p>
                        <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                          Coordinate messaging across all platforms for a
                          cohesive brand experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="col column-botie">
                    <div className="timeline-box panel vstack gap-8 text-center">
                      <div className="image-wrap panel overflow-hidden w-200px">
                        <Image
                          className="image w-100 origin-bottom"
                          src="/assets/images/proces-icon-5.svg"
                          alt="Multi-Channel Touchpoint Orchestration"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="content panel vstack items-center px-3 xl:px-6 process-card">
                        <div className="proces-slider-number">
                          <h3 className="title proces-card-heading mb-0">05</h3>
                        </div>
                        <p className="title h4 sm:h4 text-white">
                          Multi-Channel Touchpoint Orchestration
                        </p>
                        <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                          Coordinate messaging across all platforms for a
                          cohesive brand experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
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
