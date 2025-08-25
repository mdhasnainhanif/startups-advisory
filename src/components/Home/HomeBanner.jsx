"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HomeBanner = () => {
  const typedRef = useRef(null); // span element ke liye
  const typedInstance = useRef(null); // typed instance cleanup ke liye

  useEffect(() => {
    if (!typedRef.current) return;

    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Brand Awareness",
        "Digital Marketing",
        "AI Integrations",
        "Creative Strategy",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      id="overview"
      className="overview section panel overflow-hidden uc-dark banner-margin lg:rounded-3"
    >
      <div className="position-cover"></div>
      <div
        className="position-cover opacity-70 bg-cover homeBannerNew"
        style={{ backgroundPosition: "50% 85%" }}
        data-uc-img
      ></div>
      <div className="position-cover bg-gradient-to-t via-transparent to-gray-900"></div>

      {/* Decorative circles */}
      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      ></div>
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      ></div>
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      ></div>

      {/* Main Banner Content */}
      <div className="section-outer panel pt-9 xl:pt-10 lg:pb-8">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
            <div className="row child-cols-12 justify-center items-centerbanner">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center homeBanner"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {/* Floating Cursor Images */}
                  <div
                    className="position-absolute z-2"
                    style={{ top: "40%", right: "10%" }}
                  >
                    <img
                       
                      decoding="async"
                      className="w-48px lg:w-80px me-4"
                      src="/assets/images/user-cursor-1.svg"
                      alt="user-cursor"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="position-absolute z-2"
                    style={{ bottom: "30%", left: "10%" }}
                  >
                    <img
                       
                      decoding="async"
                      className="w-48px lg:w-80px"
                      src="/assets/images/user-cursor-3.svg"
                      alt="user-cursor"
                      loading="lazy"
                    />
                  </div>

                  {/* Welcome Badge */}
                  <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400"></span>
                    <span className="fs-8 fw-bold text-uppercase">
                      Welcome to Startups Advisory
                    </span>
                  </div>

                  {/* Heading with Typed.js */}
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-5 m-0 text-black banner-heading">
                    Transform Your Brand <br />
                    <span
                      ref={typedRef} // ✅ yahan ref attach karna zaroori hai
                      style={{ backgroundColor: "#643BFF" }}
                      className="d-inline-flex px-1 text-white bgBlue -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5 banner-space"
                    ></span>
                    <br />
                    Marketing That Converts
                  </h1>

                  {/* Sub Text */}
                  <p className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block">
                    Unlock measurable growth through precision branding,
                    targeted campaigns, and tailored AI integrations.
                  </p>

                  {/* Button */}
                  <div className="vstack sm:hstack gap-1 lg:gap-2 mt-1 sm:mt-2 ipad-banner-button justify-center items-center">
                    <a
                      data-modal-target="#welcomeModal"
                      className="button-green mt-2 open-modal-btn"
                    >
                      Claim Your Free Strategy Session
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="panel"
                  data-anime="targets: >*:not(.dashboard-image); scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
