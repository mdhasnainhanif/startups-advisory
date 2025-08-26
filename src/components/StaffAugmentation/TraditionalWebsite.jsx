"use client";

import React from "react";
import Image from "next/image";

export default function TraditionalWebsite() {
  return (
    <div
      id="main_features"
      className="key-features section overflow-hidden section-padding pb-0"
    >
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="row items-center brand-ipad-pro">
              {/* Left Column */}
              <div className="points-section col-md-6">
                <div
                  className="gap-1 py-1 px-3 border rounded-pill heading-border items-center"
                  style={{
                    transform: "translateY(0px)",
                    opacity: 1,
                    display: "inline-flex",
                  }}
                >
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                  <span className="fs-8 fw-bold text-uppercase">
                    Why Businesses Need AI-Powered Websites
                  </span>
                </div>

                <p
                  className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  Traditional Website Builds Are Slow,
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Expensive
                  </span>
                  &amp; Outdated.
                </p>

                <p className="points-pargraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>

                <div className="panel vstack gap-2 services-cards">
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

                <a
                  className="button-green mt-2 open-modal-btn"
                  data-modal-target="#welcomeModal"
                  href="#welcomeModal"
                >
                  Claim Your Free Strategy Session
                </a>
              </div>

              {/* Right Column */}
              <div className="brand-tab-image col-md-6">
                <Image
                  className="w-100"
                  src="/assets/images/staff.png"
                  alt="Staff Augmentation"
                  width={600}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
