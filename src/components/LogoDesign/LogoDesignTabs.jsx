"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabsData = [
  {
    key: "brand-audit",
    number: "01",
    buttonLabel: "Word Mark Logo",
    heading: "Word Mark Logo",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    ],
    img: "/assets/images/word_mark_logo.png",
    imgAlt: "Word Mark Logo",
  },
  {
    key: "positioning-strategy",
    number: "02",
    buttonLabel: "Mascot Logo",
    heading: "Mascot Logo",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    ],
    img: "/assets/images/mascot_logo.png",
    imgAlt: "Mascot Logo",
  },
  {
    key: "visual-identity",
    number: "03",
    buttonLabel: "Abstract Logo",
    heading: "Abstract Logo",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    ],
    img: "/assets/images/abstract_logo.png",
    imgAlt: "Abstract Logo",
  },
  {
    key: "messaging",
    number: "04",
    buttonLabel: "Emblem Logo",
    heading: "Emblem Logo",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    ],
    img: "/assets/images/emblem_logo.png",
    imgAlt: "Emblem Logo",
  },
];

export default function LogoDesignTabs() {
  const [active, setActive] = useState("positioning-strategy"); // default to your original active

  const handleKeyDown = (e) => {
    const currentIndex = tabsData.findIndex((t) => t.key === active);
    if (e.key === "ArrowRight") {
      const next = tabsData[(currentIndex + 1) % tabsData.length];
      setActive(next.key);
    } else if (e.key === "ArrowLeft") {
      const prev = tabsData[(currentIndex - 1 + tabsData.length) % tabsData.length];
      setActive(prev.key);
    }
  };

  return (
    <div className="section-outer section-padding brand-section">
      <div className="container sm:max-w-lg xl:max-w-xl">
        <div className="section-inner panel">
          {/* Header */}
          <div
            className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-3 max-w-700px mx-auto text-center"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <div className="cstack gap-1 py-1 px-3 border rounded-pill" style={{ transform: "translateY(0px)", opacity: 1 }}>
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                <span className="fs-8 fw-bold text-uppercase">What We Offer</span>
              </div>

              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad" style={{ transform: "translateY(0px)", opacity: 1 }}>
                End-to-end branding
                <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  Tailored Solutions
                </span>
              </p>

              <p
                className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="row justify-center">
            <ul
              className="nav nav-pills gap-3 mb-3 brand-tab-main"
              id="pills-tab"
              role="tablist"
              onKeyDown={handleKeyDown}
            >
              {tabsData.map((tab) => {
                const isActive = active === tab.key;
                return (
                  <li className="nav-item brand-tabs" role="presentation" key={tab.key}>
                    <button
                      className={`nav-link brand-tabs-li ${isActive ? "active" : ""}`}
                      id={`${tab.key}-tab`}
                      type="button"
                      role="tab"
                      aria-controls={tab.key}
                      aria-selected={isActive}
                      onClick={() => setActive(tab.key)}
                    >
                      <span className="brand-tab-number">{tab.number}</span>
                      {tab.buttonLabel}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Panels */}
            <div className="tab-content brands-tabs" id="pills-tabContent">
              {tabsData.map((tab) => {
                const isActive = active === tab.key;
                return (
                  <div
                    key={tab.key}
                    className={`tab-pane fade ${isActive ? "active show" : ""}`}
                    id={tab.key}
                    role="tabpanel"
                    aria-labelledby={`${tab.key}-tab`}
                    tabIndex={0}
                  >
                    <div className="row items-center">
                      <div className="brand-tab-content">
                        <h2 className="brand-tabs-heading">{tab.heading}</h2>
                        {tab.paragraphs.map((p, i) => (
                          <p className="brand-tabs-pargraph" key={i}>
                            {p}
                          </p>
                        ))}
                        <a className="button-green mt-2 open-modal-btn" data-modal-target="#welcomeModal">
                          Claim Your Free Strategy Session
                        </a>
                      </div>
                      <div className="brand-tab-image">
                        <Image
                          className="w-100"
                          src={tab.img}
                          alt={tab.imgAlt}
                          width={800}
                          height={600}
                          priority={isActive}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* /Panels */}
          </div>
          {/* /Tabs */}
        </div>
      </div>
    </div>
  );
}
