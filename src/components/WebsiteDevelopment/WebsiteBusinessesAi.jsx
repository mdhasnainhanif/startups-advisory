// WebsiteBusinessesAi.jsx
import React from "react";

const WebsiteBusinessesAi = () => {
    return (
        <div
            id="main_features"
            className="key-features section overflow-hidden sectionPaddingBottom sectionPaddingTop"
        >
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        <div className="row items-center brand-ipad-pro pointsMobile">
                            {/* Left Content */}
                            <div className="points-section col-md-6 pointsBrand">
                                <div
                                    className="cstack gap-1 py-1 px-3 border rounded-pill heading-border"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                                    <span className="fs-8 fw-bold text-uppercase">
                                        Why Businesses Need AI-Powered Websites
                                    </span>
                                </div>

                                <p
                                    className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    Results-Driven Design for{" "}
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        Speed, Impact & Rankings
                                    </span>
                                </p>

                                <p className="points-pargraph">
                                    We don't just build websites — we craft digital experiences
                                    that drive measurable results. Our team blends creativity with
                                    strategy to ensure your website not only looks impressive but
                                    also performs exceptionally. From improved conversion rates to
                                    reduced bounce rates and faster load times, every element is
                                    optimized for success. We focus on user behavior, data
                                    insights, and your business goals to deliver a web presence
                                    that works as hard as you do.
                                </p>

                                <a
                                    className="button-green open-modal-btn mt-2"
                                    data-modal-target="#welcomeModal"
                                    href="#welcomeModal"
                                >
                                    Claim Your Free Strategy Session
                                </a>
                            </div>

                            {/* Right Content */}
                            <div className="col-md-6">
                                <img
                                    src="assets/images/digital-marketing-services-01.png"
                                    alt="AI Powered Website Service"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteBusinessesAi;
