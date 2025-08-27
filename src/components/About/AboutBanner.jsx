"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "../../hooks/useModal";

const AboutBanner = () => {
  const openModal = useModal((state) => state.openModal);
  return (
    <div
      id="overview"
      className="overview section overflow-hidden uc-dark lg:m-2 lg:rounded-3"
    >
      {/* Background */}
      <div
        className="position-cover opacity-70 bg-cover"
        style={{ backgroundPosition: "50% 85%" }}
      >
        <Image
          src="/assets/images/Image_1.jpg"
          alt="About Background"
          fill
          className="object-cover"
        />
      </div>

      <div
        className="section-outer pt-9 xl:pt-10 space-for-ipad"
        style={{ position: "relative" }}
      >
        <div className="container xl:max-w-xl">
          <div className="section-inner pt-0 xl:pt-0">
            <div className="row child-cols-6 g-6 xl:g-8 about-banner">
              {/* Left Column */}
              <div className="for-ipad-only">
                <div className="vstack items-start text-start gap-3 max-w-600px lg:max-w-750px px-2 lg:px-0 for-gap ipad-banner">
                  {/* Heading Badge */}
                  <div className="cstack gap-1 py-1 px-2 border rounded-pill for-ipad heading-border">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400 heading-dot"></span>
                    <span className="fs-8 fw-bold text-uppercase">About Us</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-5 m-0 text-black banner-heading">
                    Strategy, Design &amp; Innovation
                  </h1>

                  {/* Description */}
                  <p className="fs-5 xl:fs-4 text-black dark:text-black md:d-block banner-paragraph">
                    We are a future-forward team of creatives, strategists, and
                    technologists who believe in building brands that inspire,
                    connect, and perform. With a focus on purpose-driven
                    storytelling and intelligent design, we help businesses
                    shape identities that go beyond trends and build lasting
                    impact.
                  </p>

                  {/* CTA */}
                  <div className="sm:hstack gap-1 lg:gap-2 mt-1 sm:mt-2 ipad-banner-button">
                    <a
                      className="button-green open-modal-btn"
                      onClick={openModal}
                      href="#"
                    >
                      Claim Your Free Strategy Session
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column (Image) */}
              <div>
                <Image
                  src="/assets/images/about-img.png"
                  alt="About"
                  width={600}
                  height={600}
                  className="banner-image-for-ipad"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
