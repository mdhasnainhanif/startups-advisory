"use client";

import React from "react";
import { useModal } from "../../hooks/useModal";

export default function MarketingSection({
  tag = "Why Experience Matters",
  heading = "Your Marketing Efforts",
  highlight = "Won't Deliver",
  subheading = "A Strong ROI If You Do…",
  cards = [
    {
      title: "Custom work will take time",
      description:
        "Even the best tools are useless without knowing how to use them. Strategy matters more than software.",
    },
    {
      title: "AI can’t think for your business",
      description:
        "Generic prompts and templates don’t understand your market — professionals do.",
    },
  ],
  secondaryCard = {
    title: "Custom work needs skilled humans",
    description: [
      "We’ve spent hundreds of hours fine-tuning AI, building systems, and",
      "designing workflows that actually convert.",
      "You can't hire generic — you need specialists who’ve already done the hard part for you.",
    ],
  },
  buttonText = "Let the magician handle the magic",
}) {
  const openModal = useModal((state) => state.openModal);

  return (
    <div
      id="main_features"
      className="key-features section overflow-hidden marketing-efforts sectionMargin section-padding"
    >
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner row items-center justify-center">
            <div
              className="vstack items-center gap-2 xl:gap-3 xl:mb-4 max-w-700px text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="vstack items-center gap-2 xl:gap-3 text-center marketingCardMain"
                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                {/* Tag */}
                <div
                  className="cstack gap-1 py-1 px-3 border rounded-pill"
                  style={{ border: "1px solid #fff" }}
                >
                  <span
                    className="d-inline-block w-4px h-4px rounded-circle"
                    style={{ backgroundColor: "#fff" }}
                  ></span>
                  <span className="fs-8 fw-bold text-uppercase">{tag}</span>
                </div>

                {/* Heading */}
                <p className="h3 lg:h2 xl:h1 m-0 px-2" style={{ color: "#fff" }}>
                  {heading}{" "}
                  <span
                    className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                    style={{ backgroundColor: "#D92D20", color: "#fff" }}
                  >
                    {highlight}
                  </span>{" "}
                  {subheading}
                </p>

                {/* Cards */}
                <div className="marketing-cards-main">
                  {cards.map((card, idx) => (
                    <React.Fragment key={idx}>
                      <div className="marketing-cards">
                        <h4>{card.title}</h4>
                        {Array.isArray(card.description) ? (
                          card.description.map((line, i) => <p key={i}>{line}</p>)
                        ) : (
                          <p>{card.description}</p>
                        )}
                      </div>
                      {idx === 0 && (
                        <span className="marketing-efforts-text">OR</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Secondary Card */}
                <div className="marketing-card-02">
                  <h2>{secondaryCard.title}</h2>
                  {secondaryCard.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                {/* Button */}
                <a className="button-green open-modal-btn" onClick={openModal}>
                  {buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
