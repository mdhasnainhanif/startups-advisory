"use client";

import React, { useState } from "react";

const WebsiteSolutionsCards = () => {
    const [activeTab, setActiveTab] = useState("all");

    const cardData = [
        {
            id: 1,
            title: "Smart Cleanova",
            description: "We build magnetic brands that speak directly to your ideal customer.",
            image: "assets/images/services-card-01.webp",
            alt: "Share tools quickly and confidently in minutes",
            categories: ["all", "landing-page", "cms", "e-commerce-development", "business-portal"],
        },
        {
            id: 2,
            title: "AI Powered",
            description: "Stop wasting money on tactics that don't convert. We build full-funnel.",
            image: "assets/images/services-card-02.webp",
            alt: "Connect every part of your entire business",
            categories: ["all", "landing-page", "cms", "e-commerce-development"],
        },
        {
            id: 3,
            title: "Golf Arena",
            description: "We help you embed artificial intelligence directly.",
            image: "assets/images/services-card-03.webp",
            alt: "Maintain compliance and control your apps",
            categories: ["all", "cms", "business-portal"],
        },
        {
            id: 4,
            title: "Sciencer Action",
            description: "We build magnetic brands that speak directly to your ideal customer.",
            image: "assets/images/services-card-04.webp",
            alt: "Share tools quickly and confidently in minutes",
            categories: ["all", "landing-page", "e-commerce-development"],
        },
        {
            id: 5,
            title: "Calmora Consulting",
            description: "Stop wasting money on tactics that don't convert. We build full-funnel.",
            image: "assets/images/services-card-05.webp",
            alt: "Connect every part of your entire business",
            categories: ["all", "cms", "business-portal"],
        },
        {
            id: 6,
            title: "Epic Trading",
            description: "We help you embed artificial intelligence directly.",
            image: "assets/images/services-card-06.webp",
            alt: "Maintain compliance and control your apps",
            categories: ["all", "e-commerce-development", "business-portal"],
        },
    ];

    // Filter cards based on active tab
    const filteredCards = cardData.filter(
        (card) => activeTab === "all" || card.categories.includes(activeTab)
    );

    return (
        <div
            id="main_features"
            className="key-features section panel overflow-hidden services-cards-new sectionPaddingTop sectionPaddingBottom"
        >
            <div className="section-outer panel">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner panel">
                        {/* Section Header */}
                        <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center">
                            <div className="cstack gap-1 py-1 px-3 border rounded-pill"
                                style={{ border: "1px solid rgba(255, 255, 255, 0.6)" }}
                            >
                                <span
                                    className="d-inline-block w-4px h-4px rounded-circle"
                                    style={{ backgroundColor: "#0FDAC2" }}
                                ></span>
                                <span className="fs-8 fw-bold text-uppercase">What We Offer</span>
                            </div>
                            <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white">
                                Our{" "}
                                <span
                                    className="d-inline-flex px-1 text-dark -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                                    style={{ backgroundColor: "#0FDAC2" }}
                                >
                                    Solutions
                                </span>{" "}
                                For Startups
                            </p>
                        </div>

                        {/* Tabs */}
                        <ul className="nav nav-pills gap-3 mb-3 services-tab-main justify-center">
                            {[
                                { key: "all", label: "All" },
                                { key: "landing-page", label: "Landing Page" },
                                { key: "cms", label: "CMS" },
                                { key: "e-commerce-development", label: "E-Commerce Development" },
                                { key: "business-portal", label: "Business Portal" },
                            ].map((tab) => (
                                <li className="nav-item brand-tabs" key={tab.key}>
                                    <button
                                        className={`nav-link services-tabs-li ${activeTab === tab.key ? "active" : ""}`}
                                        onClick={() => setActiveTab(tab.key)}
                                        type="button"
                                    >
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Cards */}
                        <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4 hideOnIpad mt-2">
                            {filteredCards.map((card) => (
                                <div key={card.id}>
                                    <div className="feature-item panel px-3 lg:px-4 py-3 rounded-2 dark:bg-gray-800 services-sub-cards-all">
                                        <div className="vstack gap-4 h-100">
                                            <div className="panel w-100 rounded lg:rounded-2 overflow-hidden services-sub-cards-all-image">
                                                <img className="rounded-1-5" src={card.image} alt={card.alt} />
                                            </div>
                                            <div className="panel vstack services-sub-cards-all-content">
                                                <h3 className="h4 m-0 text-white">{card.title}</h3>
                                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Call to Action */}
                    <div className="d-flex items-center justify-center">
                        <a className="button-green mt-6 open-modal-btn" data-modal-target="#welcomeModal">
                            Claim Your Free Strategy Session
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteSolutionsCards;
