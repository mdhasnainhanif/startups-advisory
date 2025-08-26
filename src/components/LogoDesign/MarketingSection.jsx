"use client";

import React from "react";

export default function MarketingSection() {
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
                <div
                  className="cstack gap-1 py-1 px-3 border rounded-pill"
                  style={{ border: "1px solid #fff" }}
                >
                  <span
                    className="d-inline-block w-4px h-4px rounded-circle"
                    style={{ backgroundColor: "#fff" }}
                  ></span>
                  <span className="fs-8 fw-bold text-uppercase">
                    Why Experience Matters
                  </span>
                </div>

                <p className="h3 lg:h2 xl:h1 m-0 px-2" style={{ color: "#fff" }}>
                  Your Marketing Efforts
                  <span
                    className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                    style={{ backgroundColor: "#D92D20", color: "#fff" }}
                  >
                    Won&apos;t Deliver
                  </span>
                  A Strong ROI If You Do…
                </p>

                <div className="marketing-cards-main">
                  <div className="marketing-cards">
                    <h4>Custom work will take time</h4>
                    <p>
                      Even the best tools are useless without knowing how to use
                      them. Strategy matters more than software.
                    </p>
                  </div>

                  <span className="marketing-efforts-text">OR</span>

                  <div className="marketing-cards">
                    <h4>AI can’t think for your business</h4>
                    <p>
                      Generic prompts and templates don’t understand your market
                      — professionals do..
                    </p>
                  </div>
                </div>

                <div className="marketing-card-02">
                  <h2>Custom work needs skilled humans</h2>
                  <p>We’ve spent hundreds of hours fine-tuning AI, building systems, and</p>
                  <p>designing workflows that actually convert.</p>
                  <p>
                    You can&apos;t hire generic — you need specialists who’ve already
                    done the hard part for you.
                  </p>
                </div>

                <a
                  className="button-green open-modal-btn"
                  data-modal-target="#welcomeModal"
                >
                  Let the magician handle the magic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
