"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PricingSection() {
  // Pricing cards data (repeat avoid)
  const pricingCards = [
    {
      id: 1,
      className: "pricingCardContent",
      icon: "assets/images/pricing_icon_card-01.svg",
      title: "Basic",
      price: 39,
      desc: "Essential features for individuals or small teams, limited support.",
      features: [
        { text: "Custom Themes", icon: "assets/images/pricing_right.svg" },
        { text: "Mobile-Optimized Design", icon: "assets/images/pricing_right.svg" },
        { text: "Secure Hosting", icon: "assets/images/pricing_right.svg" },
        { text: "Basic Analytics", icon: "assets/images/pricing_icon-01.svg" },
        { text: "Priority Support", icon: "assets/images/pricing_icon-02.svg" },
        { text: "API Access", icon: "assets/images/pricing_icon-02.svg" },
        { text: "Advanced Integrations", icon: "assets/images/pricing_icon-02.svg" },
      ],
    },
    {
      id: 2,
      className: "pricingCardContentTwo",
      icon: "assets/images/pricing_icon_card-02.svg",
      title: "Standard",
      price: 59,
      desc: "Perfect for growing teams with more flexibility and tools.",
      features: [
        { text: "Custom Themes", icon: "assets/images/pricing_right.svg" },
        { text: "Mobile-Optimized Design", icon: "assets/images/pricing_right.svg" },
        { text: "Secure Hosting", icon: "assets/images/pricing_right.svg" },
        { text: "Basic Analytics", icon: "assets/images/pricing_icon-01.svg" },
        { text: "Priority Support", icon: "assets/images/pricing_icon-01.svg" },
        { text: "API Access", icon: "assets/images/pricing_icon-02.svg" },
        { text: "Advanced Integrations", icon: "assets/images/pricing_icon-02.svg" },
      ],
    },
    {
      id: 3,
      className: "pricingCardContentThree",
      icon: "assets/images/pricing_icon_card-02.svg",
      title: "Pro",
      price: 99,
      desc: "Advanced features for enterprises needing scalability and support.",
      features: [
        { text: "Custom Themes", icon: "assets/images/pricing_right.svg" },
        { text: "Theme Personalization", icon: "assets/images/pricing_right.svg" },
        { text: "Mobile-Optimized Design", icon: "assets/images/pricing_right.svg" },
        { text: "Secure Hosting", icon: "assets/images/pricing_right.svg" },
        { text: "Basic Analytics", icon: "assets/images/pricing_right.svg" },
        { text: "Priority Support", icon: "assets/images/pricing_right.svg" },
        { text: "API Access", icon: "assets/images/pricing_right.svg" },
        { text: "Advanced Integrations", icon: "assets/images/pricing_icon-01.svg" },
        { text: "Unlimited Projects", icon: "assets/images/pricing_icon-01.svg" },
        { text: "Priority Email & Chat Support", icon: "assets/images/pricing_icon-01.svg" },
        { text: "Advanced Analytics & Reporting", icon: "assets/images/pricing_icon-01.svg" },
      ],
    },
  ];

  return (
    <section className="pricingSection section-padding">
      <div className="container">
        <div className="row justify-center">
          <div className="col-7">
            <div className="pricingHeading text-center">
              <div
                className="cstack gap-1 py-1 px-3 border rounded-pill"
                style={{ border: "1px solid rgba(255, 255, 255, 0.6)" }}
              >
                <span
                  className="d-inline-block w-4px h-4px rounded-circle"
                  style={{ backgroundColor: "#0FDAC2" }}
                ></span>
                <span className="fs-8 fw-bold text-uppercase text-white">
                  Transparent Plans, No Surprises
                </span>
              </div>

              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white text-center">
                Flexible Pricing for{" "}
                <span
                  className="d-inline-flex px-1 text-dark -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                  style={{ backgroundColor: "#0FDAC2" }}
                >
                  Every Growth Stage
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Swiper only on < 1200px screens */}
        <div className="row mt-6 justify-center">
          <div className="col-12">
            <div className="hidden lg:block pricingCardsDekstop">
              {/* Normal layout on large screens */}
              <div className="pricingCardsMain grid grid-cols-3 gap-6">
                {pricingCards.map((card) => (
                  <div key={card.id} className="pricingCardOne">
                    <div className={card.className}>
                      <img src={card.icon} alt={`${card.title} plan`} />
                      <h3>{card.title}</h3>
                      <p>Purchase Our {card.title} Plan</p>
                      <h1>
                        <sup>$</sup>
                        {card.price}
                        <sub>Monthly</sub>
                      </h1>
                      <p>{card.desc}</p>
                    </div>

                    <div className="pricingPakage">
                      <h5>What’s included</h5>
                      {card.features.map((f, i) => (
                        <p key={i}>
                          <span>
                            <img src={f.icon} alt="" />
                          </span>
                          {f.text}
                        </p>
                      ))}
                      <button className="button-green mt-2">Get Started</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Swiper on tablets & mobile */}
            <div className="lg:hidden pricingCardsIpad">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={20}
                breakpoints={{
                  1024: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 1 },
                  0: { slidesPerView: 1 },
                }}
              >
                {pricingCards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div className="pricingCardOne">
                      <div className={card.className}>
                        <img src={card.icon} alt={`${card.title} plan`} />
                        <h3>{card.title}</h3>
                        <p>Purchase Our {card.title} Plan</p>
                        <h1>
                          <sup>$</sup>
                          {card.price}
                          <sub>Monthly</sub>
                        </h1>
                        <p>{card.desc}</p>
                      </div>

                      <div className="pricingPakage">
                        <h5>What’s included</h5>
                        {card.features.map((f, i) => (
                          <p key={i}>
                            <span>
                              <img src={f.icon} alt="" />
                            </span>
                            {f.text}
                          </p>
                        ))}
                        <button className="button-green mt-2">Get Started</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
