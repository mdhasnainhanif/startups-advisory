"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ModalVideo from "react-modal-video";

// CSS imports
import "swiper/css";
import "swiper/css/pagination";
import "react-modal-video/css/modal-video.css";

const testimonials = [
    {
        img: "/assets/images/video-testimonials-image-01.webp",
        name: "Jalen Kyle",
        position: "Founder of Mediahouse",
        videoId: "kuceVNBTJio",
    },
    {
        img: "/assets/images/video-testimonials-image-02.webp",
        name: "Jalen Kyle",
        position: "Founder of Mediahouse",
        videoId: "kuceVNBTJio",
    },
    {
        img: "/assets/images/video-testimonials-image-03.webp",
        name: "Jalen Kyle",
        position: "Founder of Mediahouse",
        videoId: "kuceVNBTJio",
    },
    {
        img: "/assets/images/video-testimonials-image-01.webp",
        name: "Jalen Kyle",
        position: "Founder of Mediahouse",
        videoId: "kuceVNBTJio",
    },
];

const VideoTestimonial = () => {
    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");

    return (
        <div
            id="main_features"
            className="key-features section panel overflow-hidden video-testimonail section-padding"
        >
            <div className="section-outer panel">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        {/* Heading */}
                        <div className="panel vstack items-center gap-2 xl:gap-3 mb-6 max-w-700px mx-auto text-center">
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

                        {/* Swiper Slider */}
                        <div className="row justify-center">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 3000 }}

                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="testimonialSlider"
                            >
                                {testimonials.map((t, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-card">
                                            <div className="testimonial-image">
                                                <img src={t.img} alt={t.name} />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="video-preview">
                                                    <button
                                                        onClick={() => {
                                                            setVideoId(t.videoId);
                                                            setOpen(true);
                                                        }}
                                                        className="video-popup"
                                                    >
                                                        <img
                                                            src="/assets/images/video-icon.svg"
                                                            alt="Play video"
                                                        />
                                                    </button>
                                                </div>
                                                <div className="testimonial-video-content">
                                                    <h3>{t.name}</h3>
                                                    <p className="position">{t.position}</p>
                                                    <div className="stars">
                                                        <img
                                                            src="/assets/images/star.svg"
                                                            alt="Star rating"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Modal Video */}
                        <ModalVideo
                            channel="youtube"
                            autoplay
                            isOpen={isOpen}
                            videoId={videoId}
                            onClose={() => setOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoTestimonial;
