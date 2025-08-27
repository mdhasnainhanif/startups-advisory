"use client";
import React, { use } from "react";
import { useModal } from "../../hooks/useModal";
export default function WhatWeOffer() {
  const openModal = useModal((state) => state.openModal);
  return (
    <section className="services-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div
          className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center"
          data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
        >
          <div
            className="panel vstack items-center gap-2 xl:gap-3 text-center"
            data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            style={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div
              className="cstack gap-1 py-1 px-3 border rounded-pill"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
              <span className="fs-8 fw-bold text-uppercase">What We Offer</span>
            </div>
            <p
              className="h3 lg:h2 xl:h1 m-0 px-2 text-black"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              Core
              <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                Services
              </span>
              For Startups
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row gapOnResponsive">
          {/* Card 1 */}
          <div className="col-12 sm:col-6 order-0 lg:order-0">
            <div
              className="d-flex mobile-cards-sapcing gsap-left rounded-3 bg-white p-3 h-100"
              style={{ flexDirection: "column" }}
            >
              <div className="panel">
                <img

                  decoding="async"
                  className="w-100 rounded-2"
                  src="assets/images/services-image-1.jpg"
                  alt="Review quickly and confidently"
                />
              </div>
              <div>
                <div className="panel vstack">
                  <h3 className="h4 lg:h3 xl:h2 m-0 mt-3 core-cards-heading">
                    Brand Strategy & Identity
                  </h3>
                  <p className="core-cards-paragraph">
                    Your brand isn't just how you look—it's how you're remembered. We build magnetic brands that speak directly to your ideal customer.
                  </p>
                </div>
                <div
                  className="panel vstack gap-2 mt-3 services-cards home justify-center"
                  style={{ flexDirection: "column" }}
                >
                  <div className="servicesCardMainDiv">
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="button-green mt-2 open-modal-btn"
                   onClick={openModal}
                    style={{ placeSelf: "center" }}
                  >
                    Claim Your Free Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 sm:col-6 order-0 lg:order-0">
            <div
              className="d-flex mobile-cards-sapcing gsap-right rounded-3 bg-white p-3 h-100"
              style={{ flexDirection: "column" }}
            >
              <div className="panel">
                <img

                  decoding="async"
                  className="w-100 rounded-2"
                  src="assets/images/services-image-2.jpg"
                  alt="Review quickly and confidently"
                />
              </div>
              <div>
                <div className="panel vstack">
                  <h3 className="h4 lg:h3 xl:h2 m-0 mt-3 core-cards-heading">
                    AI Integration & Custom Solutions
                  </h3>
                  <p className="core-cards-paragraph">
                    Your brand isn't just how you look—it's how you're remembered. We build magnetic brands that speak directly to your ideal customer.
                  </p>
                </div>
                <div
                  className="panel vstack gap-2 mt-3 services-cards home justify-center"
                  style={{ flexDirection: "column" }}
                >
                  <div className="servicesCardMainDiv">
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="button-green mt-2 open-modal-btn"
                    onClick={openModal}
                    style={{ placeSelf: "center" }}
                  >
                    Claim Your Free Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row ipad-spacing gapOnResponsive">
          {/* Card 3 */}
          <div className="col-12 sm:col-6 order-0 lg:order-0">
            <div
              className="d-flex mobile-cards-sapcing gsap-left rounded-3 bg-white p-3 h-100"
              style={{ flexDirection: "column" }}
            >
              <div className="panel">
                <img

                  decoding="async"
                  className="w-100 rounded-2"
                  src="assets/images/services-image-3.png"
                  alt="Review quickly and confidently"
                />
              </div>
              <div>
                <div className="panel vstack">
                  <h3 className="h4 lg:h3 xl:h2 m-0 mt-3 core-cards-heading">
                    Marketing Strategy & Campaign Execution
                  </h3>
                  <p className="core-cards-paragraph">
                    Your brand isn't just how you look—it's how you're remembered. We build magnetic brands that speak directly to your ideal customer.
                  </p>
                </div>
                <div
                  className="panel vstack gap-2 mt-3 services-cards home justify-center"
                  style={{ flexDirection: "column" }}
                >
                  <div className="servicesCardMainDiv">
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="button-green mt-2 open-modal-btn"
                    onClick={openModal}
                    style={{ placeSelf: "center" }}
                  >
                    Claim Your Free Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 sm:col-6 order-0 lg:order-0">
            <div
              className="d-flex mobile-cards-sapcing gsap-right rounded-3 bg-white p-3 h-100"
              style={{ flexDirection: "column" }}
            >
              <div className="panel">
                <img

                  decoding="async"
                  className="w-100 rounded-2"
                  src="assets/images/services-image-4.jpg"
                  alt="Review quickly and confidently"
                />
              </div>
              <div>
                <div className="panel vstack">
                  <h3 className="h4 lg:h3 xl:h2 m-0 mt-3 core-cards-heading">
                    Digital Design & Creative Direction
                  </h3>
                  <p className="core-cards-paragraph">
                    Your brand isn't just how you look—it's how you're remembered. We build magnetic brands that speak directly to your ideal customer.
                  </p>
                </div>
                <div
                  className="panel vstack gap-2 mt-3 services-cards home justify-center"
                  style={{ flexDirection: "column" }}
                >
                  <div className="servicesCardMainDiv">
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                    <div className="services-cards-points">
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Strategic Brand Audits</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">AI-Powered Market Research</span>
                      </div>
                      <div className="hstack gap-1 lg\:fs-5">
                        <img decoding="async" src="assets/images/card-arrow.svg" alt="arrow icon" />
                        <span className="core-cards-points">Competitive Brand Positioning</span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="button-green mt-2 open-modal-btn"
                    onClick={openModal}
                    style={{ placeSelf: "center" }}
                  >
                    Claim Your Free Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}