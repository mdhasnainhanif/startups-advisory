"use client";

import React, { useEffect, useRef } from "react";

const Counter = () => {
  const sectionRef = useRef(null);
  const ranRef = useRef(false);

  // helper: ease out
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const numberEls = Array.from(
      root.querySelectorAll(".statistic-number")
    );

    // store target values & reset display to 0 (no structure/class changes)
    const targets = numberEls.map((el) => {
      const target = parseInt((el.textContent || "0").replace(/\D/g, ""), 10) || 0;
      el.textContent = "0";
      return target;
    });

    const animate = () => {
      const duration = 1600; // ms
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = easeOutCubic(t);

        numberEls.forEach((el, i) => {
          const val = Math.round(targets[i] * eased);
          el.textContent = String(val);
        });

        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !ranRef.current) {
          ranRef.current = true; // run once
          animate();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div id="main_features" className="key-features section overflow-hidden section-padding">
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
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
                  <span className="fs-8 fw-bold text-uppercase">How We Help</span>
                </div>
                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad">
                  Tailored Solutions for
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Every Stage of Growth
                  </span>
                </p>
                <p className="fs-5 xl:fs-4 text-black dark:text-black d-none md:d-block">
                  We partner with businesses to transform challenges into opportunities through strategy, design, and technology.
                </p>
              </div>
            </div>

            <div id="statistic-1" className="statistic-section" ref={sectionRef}>
              <div className="white-color">
                <div className="row items-center justify-center">
                  <div className="counter-section fs-1 fw-bold counterCard first">
                    <div className="statistic-block text-center">
                      <h3 className="statistic-number-heading">
                        <span className="plus">+</span>
                        <span className="statistic-number">150</span>
                      </h3>
                      <h6 className="statistic-number-paragraph">Successful Projects</h6>
                    </div>
                  </div>
                  <div className="counter-section fs-1 fw-bold counterCard">
                    <div className="statistic-block text-center">
                      <h3 className="statistic-number-heading">
                        <span className="statistic-number">98</span>
                        <span className="plus">%</span>
                      </h3>
                      <h6 className="statistic-number-paragraph">Client Satisfaction Rate</h6>
                    </div>
                  </div>
                  <div className="counter-section fs-1 fw-bold counterCard">
                    <div className="statistic-block text-center">
                      <h3 className="statistic-number-heading">
                        <span className="plus">+</span>
                        <span className="statistic-number">10</span>
                      </h3>
                      <h6 className="statistic-number-paragraph">Experience in Years</h6>
                    </div>
                  </div>
                  <div className="counter-section statistic-block text-center counterCard">
                    <h3 className="none-statistic-number">
                      24<span className="slash">/</span>7
                    </h3>
                    <h6 className="statistic-number-paragraph">Support & Collaboration</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* end statistic */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
