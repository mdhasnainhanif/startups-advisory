"use client";
import Image from "next/image";

export default function WhyChooseCard() {
  return (
    <div id="features" className="features section panel section-padding">
      <div className="section-outer panel">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            {/* Section Heading */}
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary"></span>
                <span className="fs-8 fw-bold text-uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                Why
                <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  Startups Advisory
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                Unleash your creativity with our builder's powerful features and
                intuitive interface, experience the difference.
              </p>
            </div>

            {/* Main Content */}
            <div className="row child-cols-12 lg:child-cols-5 col-match g-2">
              {/* Left Card */}
              <div className="lg:col-7">
                <div
                  className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h2 className="h3 lg:h4 xl:h3 m-0">
                      Here's What Sets Us Apart:
                    </h2>

                    <div className="panel vstack gap-2 mt-3 bewBulletPoints">
                      {[
                        "Battle-Tested Experience Meets Modern Innovation: 25+ years of brand-building expertise fused with bleeding-edge AI implementations.",
                        "Real Business Results: Our clients average a 40% boost in marketing efficiency and slash CAC by 25%.",
                        "Precision-Built Strategies: Each solution is tailored to your growth bottlenecks—using deep-dive audits and AI-enhanced insights.",
                        "Full-Funnel Execution: From brand positioning to post-campaign analysis—we handle the entire lifecycle.",
                      ].map((text, i) => (
                        <div key={i} className="hstack gap-1 lg:fs-5">
                          <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold for-color"></i>
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      className="button-green mt-2 open-modal-btn"
                      data-modal-target="#welcomeModal"
                    >
                      BOOK A FREE STRATEGY SESSION NOW
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-primary-700 rounded-2 lg:rounded-3 uc-dark"
                  style={{ backgroundColor: "#96BAFF" }}
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover bg-secondary"
                    style={{ backgroundPosition: "50% 85%" }}
                  ></div>

                  <div className="panel p-3 pb-0">
                    <Image
                      priority
                      className="rounded-bottom-1-5 lg:rounded-bottom-3"
                      src="/assets/images/home-06-dashboard-components.webp"
                      alt="dashboard-components"
                      width={400}
                      height={300}
                    />
                  </div>

                  <div
                    className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6 pt-0"
                    data-anime="onview: -100; targets:*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-2">
                      <h4 className="h4 m-0 text-black">
                        Certainty & Credibility:
                      </h4>
                      <div className="panel vstack gap-2">
                        {[
                          "25 Years of Proven Performance",
                          "Award-Winning Design & Strategy",
                          "AI-Certified Marketing Leadership",
                          "Consistent ROI Delivery",
                        ].map((text, i) => (
                          <div key={i} className="hstack gap-1 lg:fs-5">
                            <i className="cstack w-16px h-16px text-white rounded-circle unicon-checkmark fw-bold"></i>
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="panel text-white case-background-image">
              <div
                className="d-flex items-center caseStudyCard"
                style={{ gap: "1rem" }}
              >
                <div
                  className="panel vstack items-start case-content p-0"
                  data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                >
                  <h2 className="h3 lg:h3 xl:h2 m-0 text-white">
                    Client Case Study:
                  </h2>
                  <p>
                    Startupsadvisory transformed our entire growth strategy.
                    Within 90 days, we saw a 60% increase in qualified leads.
                    This is marketing that actually performs.
                  </p>
                  <Image
                    priority
                    className="starIcons"
                    src="/assets/images/star.svg"
                    alt="star"
                    width={24}
                    height={24}
                  />

                  <div className="teamMember">
                    <div>
                      <Image
                        priority
                        src="/assets/images/team-02.jpg"
                        alt="team"
                        width={60}
                        height={60}
                        className="rounded-circle"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Stephen Higgins</h4>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>

                <div className="case-image p-0">
                  <img
                    
                    src="/assets/images/img.jpg"
                    alt="team"
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
