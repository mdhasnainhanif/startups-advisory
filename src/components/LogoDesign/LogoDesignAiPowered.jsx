"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "../../hooks/useModal";

const LogoDesignAiPowered = () => {
  const openModal = useModal((state) => state.openModal);
  return (
    <div
      id="main_features"
      className="key-features section overflow-hidden section-padding"
    >
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="row items-center brand-ipad-pro">
              {/* Left Content */}
              <div className="points-section col-md-6">
                {/* Small Heading */}
                <div
                  className="cstack gap-1 py-1 px-3 border rounded-pill heading-border mb-2 logoSectionBorder"
                  style={{
                    transform: "translateY(0px)",
                    opacity: 1,
                    width: "fit-content",
                  }}
                >
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                  <span className="fs-8 fw-bold text-uppercase">
                    Need AI-Powered Websites
                  </span>
                </div>

                {/* Main Heading */}
                <p
                  className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad logoSectionHeading"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  Traditional Website
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Builds Are Slow,
                  </span>
                  Expensive &amp; Outdated.
                </p>

                {/* Paragraph */}
                <p className="points-pargraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>

                {/* Services Points */}
                <div className="panel vstack gap-2 services-cards mt-2">
                  <div className="services-cards-points">
                    <div className="hstack gap-1 lg:fs-5">
                      <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                      <span className="core-cards-points">
                        Long timelines &amp; high cost
                      </span>
                    </div>
                    <div className="hstack gap-1 lg:fs-5">
                      <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                      <span className="core-cards-points">
                        Outdated user experience
                      </span>
                    </div>
                  </div>

                  <div className="services-cards-points">
                    <div className="hstack gap-1 lg:fs-5">
                      <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                      <span className="core-cards-points">
                        Low performance on mobile &amp; SEO
                      </span>
                    </div>
                    <div className="hstack gap-1 lg:fs-5">
                      <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                      <span className="core-cards-points">
                        Limited scalability for growth
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  className="button-green mt-2 open-modal-btn"
                  onClick={openModal}
                   
                >
                  Claim Your Free Strategy Session
                </a>
              </div>

              {/* Right Image */}
              <div className="pointsImage col-md-6" style={{ paddingLeft: "4rem" }}>
                <Image
                  className="w-100"
                  src="/assets/images/points-image-02.png"
                  alt="AI Powered Websites"
                  style={{ maxWidth: "31rem" }}
                  width={496}
                  height={496}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignAiPowered;
