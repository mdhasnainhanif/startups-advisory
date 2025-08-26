"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Fancybox } from "../../../node_modules/@fancyapps/ui/dist/fancybox/";
import "../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";

export default function PortofolioSection() {
  useEffect(() => {
    // Bind Fancybox to all anchors with data-fancybox="gallery"
    Fancybox.bind("[data-fancybox='gallery']", {
      groupAll: true,       // group all items
      hideScrollbar: false, // avoid layout shift
    });

    // Cleanup on unmount
    return () => {
      try {
        Fancybox.destroy();
      } catch (_) {}
    };
  }, []);

  return (
    <div
      id="main_features"
      className="key-features section overflow-hidden portfolio-section section-padding"
    >
      <div className="section-outer portfolio-section-ipad-pro">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            {/* Header */}
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
                  className="cstack gap-1 py-1 px-3 border rounded-pill"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                  <span className="fs-8 fw-bold text-uppercase">Work That Stands Out</span>
                </div>

                <p
                  className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  A showcase of identity transformations{" "}
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Across industries.
                  </span>
                </p>
              </div>
            </div>

            {/* Portfolio Grid with Fancybox */}
            <div className="portofiol-fancy-box-main">
              {/* Column 1 */}
              <div className="portofiol-fancy-box-01">
                <div className="fancy-box-image">
                  <a href="/assets/images/start-01.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-01.jpg"
                      alt="Portfolio item 01"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-02.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-02.jpg"
                      alt="Portfolio item 02"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-03.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-03.jpg"
                      alt="Portfolio item 03"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-04.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-04.jpg"
                      alt="Portfolio item 04"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
              </div>

              {/* Column 2 */}
              <div className="portofiol-fancy-box-02">
                <div className="fancy-box-image">
                  <a href="/assets/images/start-04.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-04.jpg"
                      alt="Portfolio item 04"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-05.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-05.jpg"
                      alt="Portfolio item 05"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-06.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-06.jpg"
                      alt="Portfolio item 06"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
              </div>

              {/* Column 3 */}
              <div className="portofiol-fancy-box-03">
                <div className="fancy-box-image">
                  <a href="/assets/images/start-08.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-08.jpg"
                      alt="Portfolio item 08"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-09.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-09.jpg"
                      alt="Portfolio item 09"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-10.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-10.jpg"
                      alt="Portfolio item 10"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
              </div>

              {/* Column 4 */}
              <div className="portofiol-fancy-box-04">
                <div className="fancy-box-image">
                  <a href="/assets/images/start-11.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-11.jpg"
                      alt="Portfolio item 11"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-12.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-12.jpg"
                      alt="Portfolio item 12"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-13.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-13.jpg"
                      alt="Portfolio item 13"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-14.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-14.jpg"
                      alt="Portfolio item 14"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
                <div className="fancy-box-image">
                  <a href="/assets/images/start-15.jpg" data-fancybox="gallery">
                    <Image
                      src="/assets/images/start-15.jpg"
                      alt="Portfolio item 15"
                      width={800}
                      height={600}
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* /Grid */}
          </div>
        </div>
      </div>
    </div>
  );
}
