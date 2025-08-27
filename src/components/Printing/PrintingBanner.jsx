"use client";
import React from "react";
import Form from "../../components/Form/Form";
import { useModal } from "../../hooks/useModal";

const PrintingBanner = () => {
    const openModal = useModal((state) => state.openModal);
    return (
        <div
            id="overview"
            className="overview section overflow-hidden uc-dark lg:m-2 lg:rounded-3"
        >
            {/* Background image overlay */}
            <div className="position-cover opacity-70 bg-cover bannerBackground"></div>

            <div
                className="section-outer pt-9 xl:pt-10 space-for-ipad"
                style={{ position: "relative" }}
            >
                <div className="container xl:max-w-xl mt-6 mb-6">
                    <div className="section-inner pt-0 xl:pt-0">
                        <div className="row child-cols-6 g-6 xl:g-8 banner items-center">
                            <div className="for-ipad-only">
                                <div
                                    className="vstack items-start text-start gap-3 max-w-600px lg:max-w-750px px-2 lg:px-0 for-gap ipad-banner"
                                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                                >
                                    {/* Tagline */}
                                    <div className="cstack gap-1 py-1 px-2 border rounded-pill for-ipad heading-border">
                                        <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400 heading-dot"></span>
                                        <span className="fs-8 fw-bold text-uppercase">
                                            AI + Human-Powered Website Development Services
                                        </span>
                                    </div>

                                    {/* Heading */}
                                    <p
                                        className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                                        style={{ fontSize: "55px" }}
                                    >
                                        High-Quality Digital Printing to Elevate
                                        <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                            Your Brand
                                        </span>
                                    </p>

                                    {/* Sub paragraph */}
                                    <p className="banner-paragraph">
                                        From business cards to banners, our expert team delivers
                                        premium prints faster, smarter, and more cost-efficiently.
                                        Launching or growing your brand? We handle
                                        everything—from design to print—so your brand stands out at
                                        every touchpoint.
                                    </p>

                                    {/* CTA Buttons */}
                                    <div
                                        className="vstack sm:hstack gap-1 lg:gap-2 mt-1 sm:mt-2 ipad-banner-button d-flex"
                                        style={{ flexDirection: "row" }}
                                    >
                                        <button
                                            className="button-green open-modal-btn"
                                            onClick={openModal}
                                        >
                                            Build My AI-Enhanced Website
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintingBanner;
