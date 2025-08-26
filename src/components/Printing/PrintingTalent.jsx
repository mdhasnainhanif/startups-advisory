"use client";
import React from "react";

const PrintingTalent = () => {
    return (
        <div
            id="main_features"
            className="key-features section overflow-hidden mTopZeroMobile section-padding"
        >
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        <div className="row items-center brand-ipad-pro">
                            {/* Left Content */}
                            <div className="points-section col-md-6">
                                <div className="cstack gap-1 py-1 px-3 border rounded-pill heading-border">
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                                    <span className="fs-8 fw-bold text-uppercase">
                                        Pre-Qualified Talent, Ready to Deliver
                                    </span>
                                </div>

                                <p className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad">
                                    Pre-Qualified Talent,
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        Ready to Deliver
                                    </span>
                                </p>

                                <p className="points-pargraph">
                                    We don’t just fill roles—we connect you with vetted professionals
                                    who align with your business goals and culture. Each teammate is
                                    thoroughly screened for skills, communication, and adaptability, so
                                    you can hit the ground running without delays. Whether it’s design,
                                    development, or marketing—you get people who contribute from day
                                    one.
                                </p>

                                {/* Services Points */}
                                <div className="panel vstack gap-2 services-cards">
                                    <div className="services-cards-points">
                                        <div className="hstack gap-1 lg:fs-5">
                                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                            <span className="core-cards-points">Role-specific expertise</span>
                                        </div>
                                        <div className="hstack gap-1 lg:fs-5">
                                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                            <span className="core-cards-points">No time wasted on training</span>
                                        </div>
                                    </div>

                                    <div className="services-cards-points">
                                        <div className="hstack gap-1 lg:fs-5">
                                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                            <span className="core-cards-points">Cultural fit guaranteed</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <a
                                    className="button-green mt-2 open-modal-btn"
                                    data-modal-target="#welcomeModal"
                                >
                                    Claim Your Free Strategy Session
                                </a>
                            </div>

                            {/* Right Image */}
                            <div className="brand-tab-image col-md-6">
                                <img
                                    className="w-100"
                                    src="assets/images/printing-section.png"
                                    alt="Printing Section"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintingTalent;
