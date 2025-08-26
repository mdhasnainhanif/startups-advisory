// WebsiteDevelopmentTraditional.jsx
import React from "react";

const WebsiteDevelopmentTraditional = () => {
    return (
        <div
            id="main_features"
            className="key-features section overflow-hidden sectionPaddingTop"
        >
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        <div className="row items-center brand-ipad-pro">
                            {/* Left Section */}
                            <div className="points-section col-md-6">
                                {/* Heading */}
                                <div
                                    className="cstack gap-1 py-1 px-3 border rounded-pill heading-border"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                                    <span className="fs-8 fw-bold text-uppercase">
                                        Why Businesses Need AI-Powered Websites
                                    </span>
                                </div>

                                {/* Title */}
                                <p
                                    className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    Traditional Website Builds
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        Are Slow, Expensive &
                                    </span>
                                    Outdated.
                                </p>

                                {/* Paragraph */}
                                <p className="points-pargraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                                    sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                </p>

                                {/* Points */}
                                <div className="panel vstack gap-2 services-cards">
                                    <div className="services-cards-points">
                                        <div className="hstack gap-1 lg:fs-5">
                                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                            <span className="core-cards-points">
                                                Long timelines & high cost
                                            </span>
                                        </div>
                                        <div className="hstack gap-1 lg:fs-5">
                                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                            <span className="core-cards-points">
                                                Outdated user experience
                                            </span>
                                        </div>
                                    </div>

                                    <div className="services-cards-points">
                                        <div className="hstack gap-1 lg:fs-5">
                                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                            <span className="core-cards-points">
                                                Low performance on mobile & SEO
                                            </span>
                                        </div>
                                        <div className="hstack gap-1 lg:fs-5">
                                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                            <span className="core-cards-points">
                                                Limited scalability for growth
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <a
                                    className="button-green open-modal-btn mt-2"
                                    data-modal-target="#welcomeModal"
                                    href="#welcomeModal"
                                >
                                    Claim Your Free Strategy Session
                                </a>
                            </div>

                            {/* Right Section */}
                            <div className="brand-tab-image col-md-6" style={{ placeSelf: "end" }}>
                                <img
                                    style={{ maxWidth: "unset" }}
                                    src="assets/images/traditional-web-img.png"
                                    alt="Traditional Website Illustration"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteDevelopmentTraditional;
