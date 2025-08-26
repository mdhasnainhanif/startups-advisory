"use client";
import React from "react";

const PrintingExperience = () => {
    return (
        <div
            id="main_features"
            className="key-features section overflow-hidden traditional-card-section sectionMargin section-padding"
        >
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner row items-center justify-center">
                        {/* Heading Section */}
                        <div
                            className="vstack items-center gap-2 xl:gap-3 xl:mb-4 max-w-700px text-center"
                            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                        >
                            <div
                                className="vstack items-center gap-2 xl:gap-3 text-center"
                                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                            >
                                <div
                                    className="cstack gap-1 py-1 px-3 border rounded-pill"
                                    style={{ border: "1px solid #fff", transform: "translateY(0px)", opacity: 1 }}
                                >
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-white"></span>
                                    <span className="fs-8 fw-bold text-uppercase">why choose us</span>
                                </div>
                                <p
                                    className="h3 lg:h2 xl:h1 m-0 px-2"
                                    style={{ color: "rgb(255, 255, 255)", transform: "translateY(0px)", opacity: 1 }}
                                >
                                    Experience Every Project with
                                    <span
                                        className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                                        style={{ backgroundColor: "#fff", color: "#643BFF" }}
                                    >
                                        Precision, Speed,
                                    </span>{" "}
                                    and Quality
                                </p>
                            </div>
                        </div>

                        {/* First Row of Cards */}
                        <div className="traditional-webiste-cards-main mt-6">
                            <div className="traditional-webiste-cards">
                                <div className="traditional-webiste-cards-content">
                                    <h2>Advanced Technology</h2>
                                    <img src="assets/images/traditional-card.svg" alt="Advanced Technology" />
                                </div>
                                <p className="traditional-webiste-cards-paragraph">
                                    State-of-the-art printing equipment ensures exceptional quality and precision
                                </p>
                                <button className="traditional-webiste-cards-button">Explore</button>
                            </div>

                            <div className="traditional-webiste-cards">
                                <div className="traditional-webiste-cards-content">
                                    <h2>Expert Specialists</h2>
                                    <img src="assets/images/traditional-card.svg" alt="Expert Specialists" />
                                </div>
                                <p className="traditional-webiste-cards-paragraph">
                                    Experienced print professionals review every job to ensure premium results
                                </p>
                                <button className="traditional-webiste-cards-button">Explore</button>
                            </div>

                            <div className="traditional-webiste-cards">
                                <div className="traditional-webiste-cards-content">
                                    <h2>Fast Delivery</h2>
                                    <img src="assets/images/traditional-card.svg" alt="Fast Delivery" />
                                </div>
                                <p className="traditional-webiste-cards-paragraph">
                                    Small-batch and bulk orders delivered on time, guaranteed
                                </p>
                                <button className="traditional-webiste-cards-button">Explore</button>
                            </div>
                        </div>

                        {/* Second Row of Cards */}
                        <div className="traditional-webiste-cards-main mt-4">
                            <div className="traditional-webiste-cards">
                                <div className="traditional-webiste-cards-content">
                                    <h2>Startup-Friendly Pricing</h2>
                                    <img src="assets/images/traditional-card.svg" alt="Startup-Friendly Pricing" />
                                </div>
                                <p className="traditional-webiste-cards-paragraph">
                                    Competitive pricing packages designed to fit your budget
                                </p>
                                <button className="traditional-webiste-cards-button">Explore</button>
                            </div>

                            <div className="traditional-webiste-cards">
                                <div className="traditional-webiste-cards-content">
                                    <h2>Startup-Friendly Pricing</h2>
                                    <img src="assets/images/traditional-card.svg" alt="Startup-Friendly Pricing" />
                                </div>
                                <p className="traditional-webiste-cards-paragraph">
                                    Competitive pricing packages designed to fit your budget
                                </p>
                                <button className="traditional-webiste-cards-button">Explore</button>
                            </div>

                            <div className="traditional-webiste-cards">
                                <div className="traditional-webiste-cards-content">
                                    <h2>Startup-Friendly Pricing</h2>
                                    <img src="assets/images/traditional-card.svg" alt="Startup-Friendly Pricing" />
                                </div>
                                <p className="traditional-webiste-cards-paragraph">
                                    Competitive pricing packages designed to fit your budget
                                </p>
                                <button className="traditional-webiste-cards-button">Explore</button>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="d-flex justify-center mt-4">
                            <a className="button-green open-modal-btn" data-modal-target="#welcomeModal">
                                Claim Your Free Strategy Session
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintingExperience;
