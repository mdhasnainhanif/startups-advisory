"use client";

import React, { useEffect, useRef } from "react";

const Counter = ({
  tag = "How We Help",
  heading = "Tailored Solutions for Every Stage of Growth",
  description = "We partner with businesses to transform challenges into opportunities through strategy, design, and technology.",
  stats = [],
}) => {
  const sectionRef = useRef(null);
  const ranRef = useRef(false);

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const numberEls = Array.from(root.querySelectorAll(".statistic-number"));

    const targets = numberEls.map((el) => {
      const target =
        parseInt((el.textContent || "0").replace(/\D/g, ""), 10) || 0;
      el.textContent = "0";
      return target;
    });

    const animate = () => {
      const duration = 1600;
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
          ranRef.current = true;
          animate();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div className="key-features section overflow-hidden section-padding">
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            {/* Heading */}
            <div className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center">
              <div className="cstack gap-1 py-1 px-3 border rounded-pill heading-border">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                <span className="fs-8 fw-bold text-uppercase">{tag}</span>
              </div>
              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">{heading}</p>
              {description && (
                <p className="fs-5 xl:fs-4 text-black d-none md:d-block">
                  {description}
                </p>
              )}
            </div>

            {/* Stats */}
            <div id="statistic-1" className="statistic-section" ref={sectionRef}>
              <div className="row items-center justify-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="counter-section fs-1 fw-bold counterCard text-center"
                  >
                    <h3 className="statistic-number-heading">
                      {stat.prefix && <span className="plus">{stat.prefix}</span>}
                      {stat.animate !== false ? (
                        <span className="statistic-number">{stat.value}</span>
                      ) : (
                        <span>{stat.value}</span>
                      )}
                      {stat.suffix && <span className="plus">{stat.suffix}</span>}
                    </h3>
                    <h6 className="statistic-number-paragraph">{stat.label}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
