"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


// Avoid SSR issues
// const Swiper = dynamic(() => import("swiper/react").then(m => m.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import("swiper/react").then(m => m.SwiperSlide), { ssr: false });

import { useModal } from "../../hooks/useModal";

const HomeSolutionsSection = () => {
  const openModal = useModal((state) => state.openModal);

  const cards = [
    {
      title: "Strategic Brand Identity",
      desc: "Your brand is your first impression. We craft identities that build trust, credibility, and market authority from day one.",
      img: "/assets/images/strategic-branding-design.webp",
      alt: "Strategic Branding Design",
    },
    {
      title: "Websites That Convert",
      desc: "We design and develop responsive sites engineered to attract, engage, and turn visitors into paying customers.",
      img: "/assets/images/ai-driven-marketing-campaigns.webp",
      alt: "AI-Driven Marketing Campaigns",
    },
    {
      title: "Scalable Staff Augmentation",
      desc: "We help you embed artificial intelligence directly into your marketing and operations—without tech overwhelm.",
      img: "/assets/images/custom-ai-integration-for-scalable-growth.webp",
      alt: "Custom AI Integration",
    },
    {
      title: "High-Impact Print Solutions",
      desc: "From pitch decks to business cards, we deliver professional print assets that reflect strength and reliability.",
      img: "/assets/images/ai-driven-marketing-campaigns.webp",
      alt: "Data Driven Growth Strategy",
    },
  ];

  return (
    <div id="main_features" className="key-features section panel overflow-hidden services-cards-new section-padding">
      <div className="section-outer panel">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            {/* Heading */}
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center">
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <div className="cstack gap-1 py-1 px-3 border rounded-pill" style={{ border: "1px solid #FFFFFF99" }}>
                  <span className="d-inline-block w-4px h-4px rounded-circle" style={{ backgroundColor: "#0FDAC2" }}></span>
                  <span className="fs-8 fw-bold text-uppercase">What We Offer</span>
                </div>
                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                  Our{" "}
                  <span className="d-inline-flex px-1 text-dark -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5" style={{ backgroundColor: "#0FDAC2" }}>
                    Solutions
                  </span>{" "}
                  For Startups
                </p>
              </div>
            </div>

            {/* Swiper on ALL screens */}
            <Swiper
              modules={[Navigation, Pagination]}
              loop="true"
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="feature-item panel px-3 lg:px-4 py-4 rounded-2 dark:bg-gray-800 services-sub-cards-new h-100">
                    <div className="vstack gap-4 h-100">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image priority className="rounded-1-5" src={card.img} alt={card.alt} width={400} height={300} />
                      </div>
                      <div className="panel vstack gap-2">
                        <h3 className="h4 m-0 text-white">{card.title}</h3>
                        <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA */}
          <div className="d-flex items-center justify-center">
            <a className="button-green mt-6 open-modal-btn" onClick={openModal}>
              Claim Your Free Strategy Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolutionsSection;
