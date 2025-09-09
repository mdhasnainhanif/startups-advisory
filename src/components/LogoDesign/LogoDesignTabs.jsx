"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useModal } from "../../hooks/useModal";

export default function LogoDesignTabs({
  tag = "What We Offer",
  heading = "End-to-end branding",
  highlight = "Tailored Solutions",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  buttonText = "Claim Your Free Strategy Session",
  tabsData = [],
}) {
  const openModal = useModal((state) => state.openModal);
  const [active, setActive] = useState(tabsData[0]?.key || "");

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
          <div className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-3 max-w-700px mx-auto text-center">
            <div className="vstack items-center gap-2 xl:gap-3 text-center">
              <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                <span className="fs-8 fw-bold text-uppercase">{tag}</span>
              </div>

              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad">
                {heading}{" "}
                <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {highlight}
                </span>
              </p>

              {description && (
                <p className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="row justify-center">
            <ul
              className="nav nav-pills gap-3 mb-3 brand-tab-main"
              role="tablist"
              onKeyDown={handleKeyDown}
            >
              {tabsData.map((tab) => {
                const isActive = active === tab.key;
                return (
                  <li className="nav-item brand-tabs" role="presentation" key={tab.key}>
                    <button
                      className={`nav-link brand-tabs-li ${isActive ? "active" : ""}`}
                      type="button"
                      role="tab"
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
            <div className="tab-content brands-tabs">
              {tabsData.map((tab) => {
                const isActive = active === tab.key;
                return (
                  <div
                    key={tab.key}
                    className={`tab-pane fade ${isActive ? "active show" : ""}`}
                    role="tabpanel"
                  >
                    <div className="row items-center">
                      <div className="brand-tab-content">
                        <h2 className="brand-tabs-heading">{tab.heading}</h2>
                        {tab.paragraphs.map((p, i) => (
                          <p className="brand-tabs-pargraph" key={i}>
                            {p}
                          </p>
                        ))}
                        <a className="button-green mt-2 open-modal-btn" onClick={openModal}>
                          {buttonText}
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
