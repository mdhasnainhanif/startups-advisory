"use client";
// WebsiteBuildOnlineSuccess.jsx
import React from "react";
import { useModal } from "../../hooks/useModal";

const WebsiteBuildOnlineSuccess = () => {
    const openModal = useModal((state) => state.openModal);
    return (
        <div
            id="main_features"
            className="key-features section overflow-hidden sectionPaddingBottom sectionPaddingTop"
            style={{ background: "#e4fffc" }}
        >
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        <div className="row items-center brand-ipad-pro">
                            {/* Left Image */}
                            <div className="col-md-6">
                                <img
                                    src="assets/images/digital-marketing-services-02.png"
                                    alt="Organic SEO Services"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="points-section col-md-6">
                                <div
                                    className="cstack gap-1 py-1 px-3 border rounded-pill heading-border"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                                    <span className="fs-8 fw-bold text-uppercase">
                                        Build Long-Term Online Success
                                    </span>
                                </div>

                                <p
                                    className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    Grow Naturally with{" "}
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        Proven Organic SEO
                                    </span>
                                </p>

                                <p className="points-pargraph">
                                    Drive traffic that matters. Our SEO strategies are built to
                                    rank your website higher on search engines—organically. From
                                    keyword optimization to technical audits and high-quality
                                    backlinks, we ensure long-term visibility without relying on
                                    paid ads. Let your content work harder and smarter to bring in
                                    the right audience—naturally.
                                </p>

                                <a
                                    className="button-green open-modal-btn mt-2"
                                    onClick={openModal}
                                >
                                    Claim Your Free Strategy Session
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteBuildOnlineSuccess;
