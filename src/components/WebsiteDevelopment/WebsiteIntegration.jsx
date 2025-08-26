"use client";

import Image from "next/image";

const icons = [
    "icon-01.svg",
    "icon-02.svg",
    "icon-03.svg",
    "icon-04.svg",
    "icon-05.svg",
    "icon-06.svg",
    "icon-07.svg",
    "icon-08.svg",
    "icon-09.svg",
    "icon-10.svg",
    "icon-11.svg",
    "icon-12.svg",
    "icon-13.svg",
    "icon-14.svg",
    "icon-15.svg",
    "icon-16.svg",
    "icon-17.svg",
    "icon-10.svg", // duplicate from original
];

export default function WebsiteIntegration() {
    return (
        <div className="container sm:max-w-lg xl:max-w-xl section-padding">
            <div className="section-inner panel">
                {/* Heading Section */}
                <div
                    className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center"
                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                    <div
                        className="vstack items-center gap-2 xl:gap-3 text-center"
                        data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="cstack gap-1 py-1 px-3 border rounded-pill heading-border">
                            <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                            <span className="fs-8 fw-bold text-uppercase">
                                Integrations &amp; Tools
                            </span>
                        </div>
                        <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad">
                            Works Seamlessly with your
                            <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                Favorite Tools.
                            </span>
                        </p>
                    </div>
                </div>

                {/* Icons Grid */}
                <div className="row on-dekstop">
                    <div className="d-flex justify-center flex_wrap">
                        <div className="d-flex justify-center flex_wrap gap-2 integration-icons">
                            {icons.map((icon, idx) => (
                                <Image
                                    key={idx}
                                    src={`/assets/images/icons/${icon}`}
                                    alt={`Tool Icon ${idx + 1}`}
                                    width={64}
                                    height={64}
                                    className="integration-icon"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="d-flex justify-center mt-4">
                    <a
                        className="button-green mt-4 open-modal-btn mx-auto"
                        data-modal-target="#welcomeModal"
                    >
                        Claim Your Free Strategy Session
                    </a>
                </div>
            </div>
        </div>
    );
}
