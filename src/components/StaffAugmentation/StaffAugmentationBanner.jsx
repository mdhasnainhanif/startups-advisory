"use client";

import React from "react";
import Form from "../Form/Form";
import { useModal } from "../../hooks/useModal";


export default function StaffAugmentationBanner() {
    const openModal = useModal((state) => state.openModal);
  return (
    <div
      id="overview"
      className="overview section overflow-hidden uc-dark lg:m-2 mb-0 lg:rounded-3"
    >
      <div
        className="position-cover opacity-70 bg-cover"
        style={{
          backgroundImage: 'url("/assets/images/Image_1.jpg")',
          backgroundPosition: "50% 85%",
        }}
        data-src="/assets/images/Image_1.jpg"
        data-uc-img
      />
      <div
        className="section-outer pt-9 xl:pt-10 space-for-ipad"
        style={{ position: "relative" }}
      >
        <div className="container xl:max-w-xl mb-6 mt-6">
          <div className="section-inner pt-0 xl:pt-0">
            <div className="row child-cols-6 g-6 xl:g-8 banner">
              <div className="for-ipad-only">
                <div
                  className="vstack items-start text-start gap-3 max-w-600px lg:max-w-750px px-2 lg:px-0 for-gap ipad-banner"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="cstack gap-1 py-1 px-2 border rounded-pill for-ipad"
                    style={{ border: "1px solid #83838340" }}
                  >
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                    <span className="fs-8 fw-bold text-uppercase">
                      AI + Human-Powered Website Development Services
                    </span>
                  </div>

                  <p
                    className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                    style={{
                      transform: "translateY(0px)",
                      opacity: 1,
                      fontSize: "55px",
                    }}
                  >
                    Launch &amp; Scale Your Startup with Our
                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      AI+ Human
                    </span>
                    Power Pack
                  </p>

                  <p className="fs-5 xl:fs-4 text-black dark:text-black md:d-block banner-paragraph">
                    One partner. All services. Our AI + Human Resource model
                    helps you launch faster and scale smarter—at a fraction of
                    the cost.
                  </p>

                  <div
                    className="vstack sm:hstack gap-1 lg:gap-2 mt-1 sm:mt-2 ipad-banner-button d-flex"
                    style={{ flexDirection: "row" }}
                  >
                    <a
                      className="button-green open-modal-btn"
                      onClick={openModal}
                    >
                      Claim Your Free Strategy Session
                    </a>
                  </div>
                </div>
              </div>


              {/* <ServicesForm /> */}
              <div className="col-span-6 mt-0">
                 <Form/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
