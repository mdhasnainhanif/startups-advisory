"use client";

import React from "react";
import Image from "next/image";

const ICON = "/assets/images/compare-card-icon.svg";

const CARDS = [
  { title: "Flexible Talent Scaling on Demand" },
  { title: "Access to Specialized Tech Experts" },
  { title: "Faster Onboarding and Integration Process" },
  { title: "Cost-Effective Team Expansion Model" },
  { title: "Seamless Collaboration With Your Team", responsive: true },
  { title: "Transparent and Flexible Engagement Models" },
  { title: "Dedicated Account Management Support" },
];

// Keep the original 2-3-2 layout
const ROWS = [CARDS.slice(0, 2), CARDS.slice(2, 5), CARDS.slice(5, 7)];

export default function LogoProcess() {
  return (
    <div className="compare-section-main section-padding">
      <div className="container">
        <div className="section-inner panel">
          {/* Heading */}
          <div
            className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center"
            data-anime='targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});'
          >
            <div
              className="vstack items-center gap-2 xl:gap-3 text-center"
              data-anime='onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});'
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <div
                className="cstack gap-1 py-1 px-3 border rounded-pill heading-border"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot" />
                <span className="fs-8 fw-bold text-uppercase">
                  AI VS TRADITIONAL LOGO PROCESS
                </span>
              </div>
              <p
                className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                A Quick Look At How Both
                <span
                  className="d-inline-flex px-1 text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                  style={{ backgroundColor: "#0FDAC2" }}
                >
                  Logo Design Processes Compare.
                </span>
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="row">
            <div className="compare-section">
              {ROWS.map((row, rIdx) => (
                <div className="compare-card-main" key={`row-${rIdx}`}>
                  {row.map((item, i) => (
                    <div
                      key={`${item.title}-${i}`}
                      className={`compare-card${
                        item.responsive ? " compareCardResponsive" : ""
                      }`}
                    >
                      <Image
                        src={ICON}
                        alt="Compare card icon"
                        width={40}
                        height={40}
                        priority={rIdx === 0 && i === 0}
                      />
                      <h5>{item.title}</h5>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* /Cards */}
        </div>
      </div>
    </div>
  );
}
