// src/components/PricingBanner.jsx
import React from "react";

const PricingBanner = () => {
    return (
        <div
            id="overview"
            className="overview section overflow-hidden uc-dark lg:m-2 lg:rounded-3"
        >
            {/* Background */}
            <div
                className="position-cover opacity-70 bg-cover bannerBackground"
            ></div>

            {/* Content */}
            <div
                className="section-outer pt-9 xl:pt-10 space-for-ipad"
                style={{ position: "relative" }}
            >
                <div className="container xl:max-w-xl mt-6 mb-6">
                    <div className="section-inner pt-0 xl:pt-0">
                        <div className="row banner justify-center">
                            <div className="for-ipad-only col-6 col-sm-12">
                                <div
                                    className="vstack items-center text-center gap-3 px-2 lg:px-0 for-gap ipad-banner"
                                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                                >
                                    {/* Small Heading */}
                                    <div className="cstack gap-1 py-1 px-2 border rounded-pill for-ipad heading-border">
                                        <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400 heading-dot"></span>
                                        <span className="fs-8 fw-bold text-uppercase">
                                            Simple, Transparent, and Flexible Services
                                        </span>
                                    </div>

                                    {/* Main Heading */}
                                    <p
                                        className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                                        style={{
                                            transform: "translateY(0px)",
                                            opacity: 1,
                                            fontSize: "55px",
                                        }}
                                    >
                                        Choose the Plan That{" "}
                                        <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                            EFits Your Goals
                                        </span>
                                    </p>

                                    {/* Paragraph */}
                                    <p className="banner-paragraph">
                                        No hidden fees, no surprises — just straightforward pricing
                                        designed to grow with you. Whether you’re a startup testing
                                        the waters or a growing business ready to scale, we’ve got a
                                        plan tailored to your needs.
                                    </p>

                                    {/* Button */}
                                    <div
                                        className="vstack sm:hstack gap-1 lg:gap-2 ipad-banner-button d-flex justify-center"
                                        style={{ flexDirection: "row" }}
                                    >
                                        <a className="button-green" href="#">
                                            Build My AI-Enhanced Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingBanner;
