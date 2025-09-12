"use client";
import React, { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeOffer({
  heading = "Core Services For Startups",
  subHeading = "What We Offer",
  cards = [],
}) {
  const openModal = useModal((state) => state.openModal);

  useEffect(() => {
    // Only apply animations on desktop/tablet
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.utils.toArray(".gsap-left").forEach((elem) => {
          gsap.fromTo(
            elem,
            { x: -120},
            {
              x: 0,
              duration: 1,
              ease: "none",
              scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
              },
            }
          );
        });

        gsap.utils.toArray(".gsap-right").forEach((elem) => {
          gsap.fromTo(
            elem,
            { x: 120 },
            {
              x: 0,
              duration: 1,
              ease: "none",
              scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
              },
            }
          );
        });
      },
    });
  }, []);

  return (
    <section className="services-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center">
          <div className="cstack gap-1 py-1 px-3 border rounded-pill">
            <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
            <span className="fs-8 fw-bold text-uppercase">{subHeading}</span>
          </div>
          <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
            {heading.split(" ").map((word, i) =>
              i === 1 ? (
                <span
                  key={i}
                  className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                >
                  {word}
                </span>
              ) : (
                ` ${word} `
              )
            )}
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="row gapOnResponsive">
          {cards.map((card, i) => (
            <div key={i} className="col-12 sm:col-6 mt-2">
              <div
                className={`d-flex mobile-cards-sapcing ${
                  i % 2 === 0 ? "gsap-left" : "gsap-right"
                } rounded-3 bg-white p-3 h-100`}
                style={{ flexDirection: "column" }}
              >
                <div className="panel">
                  <img
                    decoding="async"
                    className="w-100 rounded-2"
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <div>
                  <div className="panel vstack">
                    <h3 className="h4 lg:h3 xl:h2 m-0 mt-3 core-cards-heading">
                      {card.title}
                    </h3>
                    <p className="core-cards-paragraph">{card.desc}</p>
                  </div>
                  <div className="panel vstack gap-2 mt-3 services-cards home justify-center">
                    <div className="servicesCardMainDiv">
                      {card.points?.map((point, idx) => (
                        <div key={idx} className="hstack gap-1 lg:fs-5">
                          <img
                            decoding="async"
                            src="assets/images/card-arrow.svg"
                            alt="arrow icon"
                          />
                          <span className="core-cards-points">{point}</span>
                        </div>
                      ))}
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
          ))}
        </div>
      </div>
    </section>
  );
}
