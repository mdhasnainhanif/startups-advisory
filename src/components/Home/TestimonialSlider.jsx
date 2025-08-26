"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// ✅ Your testimonials data
const testimonials = [
  {
    text: "We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on helping our employees.",
    name: "Mark Zellers",
    role: "CEO, Co-Founder.",
    avatar: "/assets/images/clients.webp",
  },
  {
    text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "/assets/images/clients.webp",
  },
  {
    text: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation — and this builder is just outstanding!",
    name: "John Miller",
    role: "CTO",
    avatar: "/assets/images/clients.webp",
  },
  {
    text: "Our launch campaign was effortless. The team could finally focus on scaling instead of repetitive admin tasks.",
    name: "Emily Carter",
    role: "Marketing Lead",
    avatar: "/assets/images/clients.webp",
  },
  {
    text: "We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on helping our employees.",
    name: "Mark Zellers",
    role: "CEO, Co-Founder.",
    avatar: "/assets/images/clients.webp",
  },
  {
    text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "/assets/images/clients.webp",
  },
  {
    text: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation — and this builder is just outstanding!",
    name: "John Miller",
    role: "CTO",
    avatar: "/assets/images/clients.webp",
  },
  {
    text: "Our launch campaign was effortless. The team could finally focus on scaling instead of repetitive admin tasks.",
    name: "Emily Carter",
    role: "Marketing Lead",
    avatar: "/assets/images/clients.webp",
  },
];

const TestimonialSlider = () => {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Init first swiper
    swiper1Ref.current = new Swiper(".clientsSwiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      speed: 2000,
      autoplay: { 
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });

    // Init second swiper (reverse)
    swiper2Ref.current = new Swiper(".clientsSwiper1", {
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      speed: 2000,
      autoplay: {
        delay: 3000,
        reverseDirection: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });

    return () => {
      swiper1Ref.current?.destroy(true, true);
      swiper2Ref.current?.destroy(true, true);
    };
  }, []);

  return (
    <div id="clients_feedback" className="clients-feedback section panel">
      <div className="section-outer panel bg-secondary text-black rounded-2 lg:rounded-3 section-padding">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100">
            {/* Heading */}
            <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
              <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                <span className="fs-8 fw-bold text-uppercase">Clients feedback</span>
              </div>
              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                Client{" "}
                <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  Success
                </span>{" "}
                Stories
              </p>
            </div>

            {/* Swipers */}
            <div className="panel w-100 mask-x">
              {/* First Swiper */}
              <div className="swiper clientsSwiper">
                <div className="swiper-wrapper items-center ease-linear">
                  {testimonials.map((t, i) => (
                    <div key={`s1-${i}`} className="swiper-slide">
                      <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100 clients-slider">
                        <div className="panel vstack items-start gap-2 lg:gap-4">
                          <div className="rating d-flex gap-0">
                            <Image src="/assets/images/star.svg" alt="star" width={100} height={100} />
                          </div>
                          <p className="fs-5 lg:fs-4">“{t.text}”</p>
                        </div>
                        <div className="panel mt-2 lg:mt-0">
                          <div className="panel vstack items-start gap-narrow d-flex clients">
                            <div>
                              <Image
                                className="clients-image"
                                src={t.avatar}
                                alt={t.name}
                                width={50}
                                height={50}
                              />
                            </div>
                            <div>
                              <h6 className="h5 m-0 text-black">{t.name}</h6>
                              <span className="fs-7 lg:h6 opacity-70">{t.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Swiper (reverse autoplay) */}
              <div className="swiper mt-2 lg:mt-3 clientsSwiper1">
                <div className="swiper-wrapper items-center ease-linear">
                  {testimonials.map((t, i) => (
                    <div key={`s2-${i}`} className="swiper-slide">
                      <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100 clients-slider">
                        <div className="panel vstack items-start gap-2 lg:gap-4">
                          <div className="rating d-flex gap-0">
                            <Image src="/assets/images/star.svg" alt="star" width={100} height={100} />
                          </div>
                          <p className="fs-5 lg:fs-4">“{t.text}”</p>
                        </div>
                        <div className="panel mt-2 lg:mt-0">
                          <div className="panel vstack items-start gap-narrow d-flex clients">
                            <div>
                              <Image
                                className="clients-image"
                                src={t.avatar}
                                alt={t.name}
                                width={50}
                                height={50}
                              />
                            </div>
                            <div>
                              <h6 className="h5 m-0 text-black">{t.name}</h6>
                              <span className="fs-7 lg:h6 opacity-70">{t.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End Second Swiper */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
