"use client";
// DigitalMarketingSection.jsx
import React from "react";
import { useModal } from "../../hooks/useModal";

const DigitalMarketingSection = () => {
    const openModal = useModal((state) => state.openModal);
    return (
        <div
            id="main_features"
            className="key-features section overflow-hidden sectionPaddingBottom sectionPaddingTop"
        >
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        {/* Heading Section */}
                        <div
                            className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center"
                            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                        >
                            <div
                                className="vstack items-center gap-2 xl:gap-3 text-center"
                                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                                style={{ transform: "translateY(0px)", opacity: 1 }}
                            >
                                <div
                                    className="cstack gap-1 py-1 px-3 border rounded-pill heading-border"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                                    <span className="fs-8 fw-bold text-uppercase">
                                        Maximize Your Online Reach with Digital Marketing
                                    </span>
                                </div>

                                <p
                                    className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    Integrated Digital Marketing for
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        Web Development
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Content Row */}
                        <div className="row items-center brand-ipad-pro">
                            {/* Left Content */}
                            <div className="brand-tab-content">
                                <p className="brand-tabs-pargraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                                    sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                                    Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                                </p>
                                <p className="brand-tabs-pargraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                                    sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                                    Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                                </p>

                                {/* CTA Button */}
                                <a
                                    className="button-green open-modal-btn mt-2"
                                    onClick={openModal}
                                    href="#"
                                >
                                    Claim Your Free Strategy Session
                                </a>
                            </div>

                            {/* Right Image */}
                            <div className="brand-tab-image mt-2">
                                <img
                                    className="w-100"
                                    src="assets/images/integrated-development-image.webp"
                                    alt="Integrated Development"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingSection;
