// WebsiteSmarterLogo.jsx
import React from "react";

const WebsiteSmarterLogo = () => {
    return (
        <div
            id="main_features"
            className="key-features section overflow-hidden digital-marketing-section sectionPaddingTop sectionPaddingBottom"
        >
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        <div className="row items-center brand-ipad-pro">
                            {/* Left Content */}
                            <div className="points-section col-md-6 pointsBrand">
                                <div
                                    className="cstack gap-1 py-1 px-3 border rounded-pill heading-border"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                                    <span className="fs-8 fw-bold text-uppercase">
                                        Smarter Logo Design Starts Here
                                    </span>
                                </div>

                                <p
                                    className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                                    style={{ transform: "translateY(0px)", opacity: 1 }}
                                >
                                    Integrated{" "}
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        Digital Marketing
                                    </span>{" "}
                                    for Web Success
                                </p>

                                <p className="points-pargraph">
                                    Your website is only as powerful as the traffic it receives.
                                    That’s why we don’t just build websites — we drive results
                                    through strategic digital marketing. Our expert team ensures
                                    your online presence grows through data-driven SEO, PPC
                                    campaigns, social media marketing, and content strategies
                                    tailored to your business goals. With performance tracking and
                                    ongoing optimization, we help your website convert clicks into
                                    customers.
                                </p>

                                <a
                                    className="button-green open-modal-btn mt-2"
                                    data-modal-target="#welcomeModal"
                                    href="#welcomeModal"
                                >
                                    Claim Your Free Strategy Session
                                </a>
                            </div>

                            {/* Right Content - Cards */}
                            <div className="col-md-6">
                                <div className="digital-marketing-main">
                                    {/* Row 1 */}
                                    <div className="digital-marketing-cards-01">
                                        {/* Card 1 */}
                                        <div className="digital-marketing-cards-content">
                                            <img src="assets/images/dm-icon.svg" alt="Web Design Icon" />
                                            <h4>Web Design</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="digital-marketing-card-points">
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    WordPress Design
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Magento Design
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Shopify Design
                                                </p>
                                            </div>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="digital-marketing-cards-content">
                                            <img src="assets/images/dm-icon.svg" alt="Email Marketing Icon" />
                                            <h4>Email & SMS Marketing</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="digital-marketing-card-points">
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Marketing Automation
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Email Newsletters
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Klaviyo Experts
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="digital-marketing-cards-02">
                                        {/* Card 3 */}
                                        <div className="digital-marketing-cards-content">
                                            <img src="assets/images/dm-icon.svg" alt="PPC Icon" />
                                            <h4>Pay Per Click Advertising</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="digital-marketing-card-points">
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Google Ads
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Facebook Ads
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Ecommerce
                                                </p>
                                            </div>
                                        </div>

                                        {/* Card 4 */}
                                        <div className="digital-marketing-cards-content">
                                            <img src="assets/images/dm-icon.svg" alt="Social Media Icon" />
                                            <h4>Social Media Marketing</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="digital-marketing-card-points">
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Facebook & IG
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    Twitter Management
                                                </p>
                                                <p>
                                                    <span>
                                                        <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                                                    </span>
                                                    LinkedIn Management
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Right */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteSmarterLogo;
