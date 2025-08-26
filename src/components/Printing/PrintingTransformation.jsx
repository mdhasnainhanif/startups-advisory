// PrintingTransformation.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PrintingTransformation() {
    const slides = [
        { img: "assets/images/business-cards.webp", label: "Business Cards" },
        { img: "assets/images/letterheads.webp", label: "Letterheads" },
        { img: "assets/images/envelopes.webp", label: "Envelopes" },
        { img: "assets/images/notepads.webp", label: "Notepads" },
        { img: "assets/images/letterheads.webp", label: "Letterheads" },
    ];

    return (
        <div
            id="main_features"
            className="key-features section panel overflow-hidden section-padding pb-0"
        >
            <div className="section-outer panel">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        {/* Section Heading */}
                        <div
                            className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center"
                            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                        >
                            <div
                                className="panel vstack items-center gap-2 xl:gap-3 text-center"
                                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                            >
                                <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                                    <span className="fs-8 fw-bold text-uppercase">
                                        CLIENT STORIES IN MOTION
                                    </span>
                                </div>
                                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                                    Our{" "}
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        Real People
                                    </span>{" "}
                                    Real Transformations.
                                </p>
                            </div>
                        </div>

                        {/* Swiper Slider */}
                        <div className="row justify-center">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                autoplay={false}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 4 },
                                }}
                                className="printingSlider"
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="printing-slider">
                                            <img src={slide.img} alt={slide.label} />
                                            <p>{slide.label}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
