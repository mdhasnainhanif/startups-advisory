"use client";

import React from "react";
import { useModal } from "../../hooks/useModal";

const Cta = ({
  tag = "Let’s Build Something Extraordinary",
  heading = "Strategy,",
  highlight = "Design",
  afterHighlight = "& Innovation",
  description = "We are a future-forward team of creatives, strategists, and technologists who believe in building brands that inspire, connect, and perform. With a focus on purpose-driven storytelling and intelligent design, we help businesses shape identities that go beyond trends and build lasting impact.",
  buttonText = "Claim Your Free Strategy Session",
  buttonAction, // optional custom action
  marginBottomZero = false,
}) => {
  const openModal = useModal((state) => state.openModal);

  return (
    <div
      id="main_features"
      className={`key-features section overflow-hidden cta-section section-padding sectionMarginBottom ${
        marginBottomZero ? "mb-0" : ""
      }`}
    >
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner row items-center justify-center">
            <div
              className="vstack items-center gap-2 xl:gap-3 xl:mb-4 max-w-700px text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="vstack items-center gap-2 xl:gap-3 text-center"
                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                {/* Small heading */}
                <div className="cstack gap-1 py-1 px-3 border rounded-pill heading-border-white">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                  <span className="fs-8 fw-bold text-uppercase">{tag}</span>
                </div>

                {/* Main Heading */}
                <p className="h3 lg:h2 xl:h1 m-0 px-2" style={{ color: "#fff" }}>
                  {heading}{" "}
                  <span
                    className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                    style={{ backgroundColor: "#fff", color: "#643BFF" }}
                  >
                    {highlight}
                  </span>{" "}
                  {afterHighlight}
                </p>

                {/* Paragraph */}
                <p className="fs-5 xl:fs-4 md:d-block cta-paragraph">
                  {description}
                </p>

                {/* CTA Button */}
                <a
                  className="button-green open-modal-btn"
                  onClick={buttonAction ? buttonAction : openModal}
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
