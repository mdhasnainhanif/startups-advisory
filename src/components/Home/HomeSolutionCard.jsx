"use client";
import Image from "next/image";
import { useState } from "react";

const HomeSolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    {
      title: "Strategic Branding Design",
      desc: "We build magnetic brands that speak directly to your ideal customer and position you as the clear, only choice in the market.",
      img: "/assets/images/strategic-branding-design.webp",
      alt: "Share tools quickly and confidently in minutes",
    },
    {
      title: "AI-Driven Marketing Campaigns",
      desc: "Stop wasting money on tactics that don't convert. We build full-funnel marketing strategies rooted in buyer psychology and optimized by AI.",
      img: "/assets/images/ai-driven-marketing-campaigns.webp",
      alt: "Connect every part of your entire business",
    },
    {
      title: "Custom AI Integration for Scalable Growth",
      desc: "We help you embed artificial intelligence directly into your marketing and operations—without tech overwhelm.",
      img: "/assets/images/custom-ai-integration-for-scalable-growth.webp",
      alt: "Maintain compliance and control your apps",
    },
  ];
  return (
    <div
      id="main_features"
      className="key-features section panel overflow-hidden services-cards-new section-padding"
    >
      <div className="section-outer panel">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center">
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <div
                  className="cstack gap-1 py-1 px-3 border rounded-pill"
                  style={{ border: "1px solid #FFFFFF99" }}
                >
                  <span
                    className="d-inline-block w-4px h-4px rounded-circle"
                    style={{ backgroundColor: "#0FDAC2" }}
                  ></span>
                  <span className="fs-8 fw-bold text-uppercase">
                    What We Offer
                  </span>
                </div>
                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                  Our{" "}
                  <span
                    className="d-inline-flex px-1 text-dark -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                    style={{ backgroundColor: "#0FDAC2" }}
                  >
                    Solutions
                  </span>{" "}
                  For Startups
                </p>
              </div>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4 hideOnIpad">
                             {cards.map((card, index) => (
                 <div 
                   key={index} 
                   onMouseEnter={() => setActiveIndex(index)}
                   onMouseLeave={() => setActiveIndex(1)}
                 >
                   <div
                     className={`feature-item panel px-3 lg:px-4 py-4 rounded-2 dark:bg-gray-800 services-sub-cards-new ${
                       activeIndex === index ? "active" : ""
                     }`}
                   >
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          priority
                          className="rounded-1-5"
                          src={card.img}
                          alt={card.alt}
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0 text-white">
                                {card.title}
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                {card.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper cardSlider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="feature-item panel px-3 lg:px-4 py-4 rounded-2 dark:bg-gray-800 services-sub-cards-new-slider">
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          priority
                          className="rounded-1-5"
                          src="/assets/images/strategic-branding-design.webp"
                          alt="Share tools quickly and confidently in minutes"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0 text-white">
                                Strategic Branding Design
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                We build magnetic brands that speak directly to
                                your ideal customer and position you as the
                                clear, only choice in the market.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="feature-item panel px-3 lg:px-4 py-4 rounded-2 dark:bg-gray-800 services-sub-cards-new-slider">
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          priority
                          className="rounded-1-5"
                          src="/assets/images/ai-driven-marketing-campaigns.webp"
                          alt="Connect every part of your entire business"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0 text-white">
                                AI-Driven Marketing Campaigns
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                Stop wasting money on tactics that don't
                                convert. We build full-funnel marketing
                                strategies rooted in buyer psychology and
                                optimized by AI.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide ">
                  <div className="feature-item panel px-3 lg:px-4 py-4 rounded-2 dark:bg-gray-800 services-sub-cards-new-slider">
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          priority
                          className="rounded-1-5"
                          src="/assets/images/custom-ai-integration-for-scalable-growth.webp"
                          alt="Maintain compliance and control your apps"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="panel">
                        <div className="panel vstack justify-center gap-4 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <h3 className="h4 m-0 text-white">
                                Custom AI Integration for Scalable Growth
                              </h3>
                              <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                We help you embed artificial intelligence
                                directly into your marketing and
                                operations—without tech overwhelm.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex items-center justify-center">
            <a
              className="button-green mt-6 open-modal-btn"
              data-modal-target="#welcomeModal"
            >
              Claim Your Free Strategy Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolutionsSection;
