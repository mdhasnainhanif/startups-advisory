"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function DevelopmentComparison() {
  return (
    <div className="container sm:max-w-lg xl:max-w-xl section-padding ai-traditional pb-0">
      <div className="section-inner panel">
        <div
          className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center"
          data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
        >
          <div
            className="vstack items-center gap-2 xl:gap-3 text-center"
            data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            style={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div
              className="cstack gap-1 py-1 px-3 border rounded-pill heading-border"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
              <span className="fs-8 fw-bold text-uppercase">
                AI vs Traditional Development Comparison
              </span>
            </div>
            <p
              className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              AI vs Traditional
              <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                Development Comparison.
              </span>
            </p>
            {/* <p className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block" style={{ transform: "translateY(0px)", opacity: 1 }}>
              LHarness the power of artificial intelligence...
            </p> */}
          </div>
        </div>

        <div className="row justify-center items-center">
          {/* Desktop / non-swiper block — leave classes as-is */}
          <div className="ai-traditional-all-cards">
            <div className="ai-traditional-cards-01">
              <div className="ai-traditional-cards-01-image">
                <img src="assets/images/features.svg" alt="Features" />
              </div>
              <div className="ai-traditional-cards-01-content">
                <h3>Features</h3>
                <div className="ai-traditional-cards-01-sub-content">
                  <h6>Time To Launch</h6><span className="ai-traditional-cards-01-border"></span>
                  <h6>Code Quality</h6><span className="ai-traditional-cards-01-border"></span>
                  <h6>SEO &amp; Perfomance</h6><span className="ai-traditional-cards-01-border"></span>
                  <h6>Cost Efficiency</h6>
                </div>
              </div>
            </div>

            <div className="ai-traditional-cards-02">
              <div className="ai-traditional-cards-02-image">
                <img src="assets/images/traditional.svg" alt="Traditional Development" />
              </div>
              <div className="ai-traditional-cards-02-content">
                <h3>Traditional Development</h3>
                <div className="ai-traditional-cards-02-sub-content">
                  <h6>8–12 weeks</h6><span className="ai-traditional-cards-02-border"></span>
                  <h6>Manual checks</h6><span className="ai-traditional-cards-02-border"></span>
                  <h6>Afterthought</h6><span className="ai-traditional-cards-02-border"></span>
                  <h6>Standard</h6>
                </div>
              </div>
            </div>

            <div className="ai-traditional-cards-03">
              <div className="ai-traditional-cards-03-image">
                <img src="assets/images/enhanced.svg" alt="AI + Human (Our Service)" />
              </div>
              <div className="ai-traditional-cards-03-content">
                <h3>AI + Human (Our Service)</h3>
                <div className="ai-traditional-cards-03-sub-content">
                  <h6>3–5 Weeks Fast</h6><span className="ai-traditional-cards-03-border"></span>
                  <h6>AI + QA Perfection</h6><span className="ai-traditional-cards-03-border"></span>
                  <h6>30–40% Less</h6><span className="ai-traditional-cards-03-border"></span>
                  <h6>Secure &amp; Compliant</h6><span className="ai-traditional-cards-03-border"></span>
                  <h6>AI-Driven Contextual Ideas</h6>
                </div>
              </div>
            </div>

            <div className="ai-traditional-cards-04">
              <div className="ai-traditional-cards-04-image">
                <img src="assets/images/traditional.svg" alt="AI-Enhanced Development" />
              </div>
              <div className="ai-traditional-cards-04-content">
                <h3>AI-Enhanced Development</h3>
                <div className="ai-traditional-cards-04-sub-content">
                  <h6>3–6 weeks</h6><span className="ai-traditional-cards-04-border"></span>
                  <h6>AI + human QA</h6><span className="ai-traditional-cards-04-border"></span>
                  <h6>AI-driven from day one</h6><span className="ai-traditional-cards-04-border"></span>
                  <h6>30–40% lower</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only Swiper container — keep your classes; control visibility with your CSS */}
          <div className="ai-traditional-all-cards-container">
            {/* Fixed First Card */}
            <div className="ai-traditional-cards-01">
              <div className="ai-traditional-cards-01-image">
                <img src="assets/images/features.svg" alt="Features" />
              </div>
              <div className="ai-traditional-cards-01-content">
                <h3>Features</h3>
                <div className="ai-traditional-cards-01-sub-content">
                  <h6>Time To Launch</h6><span className="ai-traditional-cards-01-border"></span>
                  <h6>Code Quality</h6><span className="ai-traditional-cards-01-border"></span>
                  <h6>SEO &amp; Performance</h6><span className="ai-traditional-cards-01-border"></span>
                  <h6>Cost Efficiency</h6>
                </div>
              </div>
            </div>

            {/* Swiper Slider for Remaining Cards (mobile) */}
            <Swiper
              className="swiper traditionalCardSlider"
              spaceBetween={16}
              slidesPerView={1.1}
              // keep it mobile-focused; you can also hide this whole block on md+ via CSS utilities
              breakpoints={{
                640: { slidesPerView: 1.2, spaceBetween: 16 },
                768: { slidesPerView: 1.4, spaceBetween: 18 },
              }}
            >
              {/* Card 2 */}
              <SwiperSlide>
                <div className="ai-traditional-cards-02">
                  <div className="ai-traditional-cards-02-image">
                    <img src="assets/images/traditional.svg" alt="Traditional Development" />
                  </div>
                  <div className="ai-traditional-cards-02-content">
                    <h3>Traditional Development</h3>
                    <div className="ai-traditional-cards-02-sub-content">
                      <h6>8–12 weeks</h6><span className="ai-traditional-cards-02-border"></span>
                      <h6>Manual checks</h6><span className="ai-traditional-cards-02-border"></span>
                      <h6>Afterthought</h6><span className="ai-traditional-cards-02-border"></span>
                      <h6>Standard</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 3 */}
              <SwiperSlide>
                <div className="ai-traditional-cards-03">
                  <div className="ai-traditional-cards-03-image">
                    <img src="assets/images/enhanced.svg" alt="AI + Human (Our Service)" />
                  </div>
                  <div className="ai-traditional-cards-03-content">
                    <h3>AI + Human (Our Service)</h3>
                    <div className="ai-traditional-cards-03-sub-content">
                      <h6>3–5 Weeks Fast</h6><span className="ai-traditional-cards-03-border"></span>
                      <h6>AI + QA Perfection</h6><span className="ai-traditional-cards-03-border"></span>
                      <h6>30–40% Less</h6><span className="ai-traditional-cards-03-border"></span>
                      <h6>Secure &amp; Compliant</h6><span className="ai-traditional-cards-03-border"></span>
                      <h6>AI-Driven Contextual Ideas</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 4 */}
              <SwiperSlide>
                <div className="ai-traditional-cards-04">
                  <div className="ai-traditional-cards-04-image">
                    <img src="assets/images/traditional.svg" alt="AI-Enhanced Development" />
                  </div>
                  <div className="ai-traditional-cards-04-content">
                    <h3>AI-Enhanced Development</h3>
                    <div className="ai-traditional-cards-04-sub-content">
                      <h6>3–6 weeks</h6><span className="ai-traditional-cards-04-border"></span>
                      <h6>AI + human QA</h6><span className="ai-traditional-cards-04-border"></span>
                      <h6>AI-driven from day one</h6><span className="ai-traditional-cards-04-border"></span>
                      <h6>30–40% lower</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* /mobile swiper */}
        </div>
      </div>
    </div>
  );
}
