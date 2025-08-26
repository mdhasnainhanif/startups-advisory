// src/components/PrintingWorkImage.jsx
import React from "react";

// Data for all build cards
const buildCardData = [
    {
        img: "assets/images/build-image-01.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-02.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-03.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-04.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-05.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-06.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-07.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-08.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-09.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-10.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-11.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
    {
        img: "assets/images/build-image-12.png",
        title: "Business Cards & Stationery",
        desc: "Letterheads, envelopes, and more",
    },
];

const PrintingWorkImage = () => {
    return (
        <div id="main_features" className="key-features section overflow-hidden section-padding pt-0">
            <div className="section-outer">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="section-inner row items-center justify-center">
                        {/* Section Heading */}
                        <div
                            className="vstack items-center gap-2 xl:gap-3 xl:mb-4 max-w-700px text-center mb-6"
                            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                        >
                            <div
                                className="vstack items-center gap-2 xl:gap-3 text-center"
                                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                            >
                                <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                                    <span className="fs-8 fw-bold text-uppercase">Work That Stands Out</span>
                                </div>
                                <p className="h3 lg:h2 xl:h1 m-0 px-2">
                                    Everything You Need to Build
                                    <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                        A Consistent Brand
                                    </span>
                                    Image
                                </p>
                            </div>
                        </div>

                        {/* Build Cards */}
                        <div className="row gap-2">
                            {buildCardData.map((item, index) => (
                                <div className="build-card-main" key={index}>
                                    <div className="build-card">
                                        <img src={item.img} alt={item.title} />
                                        <div className="build-card-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                            <button>Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintingWorkImage;
