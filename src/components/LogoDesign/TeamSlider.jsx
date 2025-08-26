"use client"; // if you're in Next.js app router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function TeamSlider() {
  return (
    <div
      id="main_features"
      className="key-features section overflow-hidden team-pordolio-section section-padding"
    >
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-4 max-w-700px mx-auto text-center">
              <div className="vstack items-center gap-2 xl:gap-3 text-center">
                <div
                  className="cstack gap-1 py-1 px-3 border rounded-pill"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                  <span className="fs-8 fw-bold text-uppercase">
                    Meet Our Experts
                  </span>
                </div>
                <p
                  className="h3 lg:h2 xl:h1 m-0 px-2 text-black font-size-on-ipad"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  Brand strategists, designers & storytellers
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    behind your success.
                  </span>
                </p>
              </div>
            </div>

            <div className="row">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={20}
                autoplay={{ delay: 3000 }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                  renderBullet: (index, className) =>
                    `<span class="${className}"></span>`,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                    // here we disable pagination and keep navigation
                    pagination: false,
                  },
                }}
                className="swiper teamPortfolioSLider"
              >
                {/* === Slide 1 === */}
                <SwiperSlide className="swiper-slide">
                  <div className="team-expertise-slider">
                    <div className="team-member">
                      <div className="member-image">
                        <Image
                          src="/assets/images/team-member-01.webp"
                          alt="Team Member"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="team-member-slide-content">
                        <div className="member-name">
                          <h2>Amit A.</h2>
                          <h5>Creative Director</h5>
                          <Image
                            src="/assets/images/star.svg"
                            alt="Star"
                            width={80}
                            height={20}
                          />
                        </div>
                        <div className="dNoneOnMobile">
                          <div className="member-experience">
                            <div className="experience-location">
                              <h3>Location</h3>
                              <h5>Canada</h5>
                            </div>
                            <span className="member-experience-right-border"></span>
                            <div className="experience-time">
                              <h3>Experience</h3>
                              <h5>15+ Years</h5>
                            </div>
                          </div>
                          <div className="social-icons">
                            <Image
                              src="/assets/images/social-icon-01.svg"
                              alt="Social 1"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-02.svg"
                              alt="Social 2"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-03.svg"
                              alt="Social 3"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-04.svg"
                              alt="Social 4"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dNoneOnDesktop">
                      <div className="member-experience">
                        <div className="experience-location">
                          <h3>Location</h3>
                          <h5>Canada</h5>
                        </div>
                        <span className="member-experience-right-border"></span>
                        <div className="experience-time">
                          <h3>Experience</h3>
                          <h5>15+ Years</h5>
                        </div>
                      </div>
                      <div className="social-icons">
                        <Image
                          src="/assets/images/social-icon-01.svg"
                          alt="Social 1"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-02.svg"
                          alt="Social 2"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-03.svg"
                          alt="Social 3"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-04.svg"
                          alt="Social 4"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>

                    <div className="about-member">
                      <div className="member-skill">
                        <div className="member-skill-content">
                          <h2>
                            Industry Knowledge:
                            <span>
                              Fashion, Food & Beverage, Hospitality, Automotive,
                              Technology, Transportation & more
                            </span>
                          </h2>
                          <h2>
                            Area of Expertise:
                            <span>
                              {" "}
                              Video Production, Graphic Design & Illustration,
                              Website Design
                            </span>
                          </h2>
                        </div>
                        <div className="member-skill-button">
                          <div className="skills">
                            <h5>Website Design</h5>
                          </div>
                          <div className="skills">
                            <h5>Graphic Design</h5>
                          </div>
                          <div className="skills">
                            <h5>Mobile App Design</h5>
                          </div>
                        </div>
                      </div>

                      <div className="gallery-wrapper">
                        <div className="gallery">
                          <div className="gallery-track">
                            {[
                              "expertise-slider-image-01.webp",
                              "expertise-slider-image-02.webp",
                              "expertise-slider-image-03.webp",
                              "expertise-slider-image-04.webp",
                              "expertise-slider-image-05.webp",
                              "expertise-slider-image-01.webp",
                              "expertise-slider-image-02.webp",
                              "expertise-slider-image-03.webp",
                              "expertise-slider-image-04.webp",
                              "expertise-slider-image-05.webp",
                            ].map((img, i) => (
                              <Image
                                key={i}
                                src={`/assets/images/${img}`}
                                alt={`Expertise ${i}`}
                                width={200}
                                height={150}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-expertise-slider">
                    <div className="team-member">
                      <div className="member-image">
                        <Image
                          src="/assets/images/team-member-01.webp"
                          alt="Team Member"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="team-member-slide-content">
                        <div className="member-name">
                          <h2>Amit A.</h2>
                          <h5>Creative Director</h5>
                          <Image
                            src="/assets/images/star.svg"
                            alt="Star"
                            width={80}
                            height={20}
                          />
                        </div>
                        <div className="dNoneOnMobile">
                          <div className="member-experience">
                            <div className="experience-location">
                              <h3>Location</h3>
                              <h5>Canada</h5>
                            </div>
                            <span className="member-experience-right-border"></span>
                            <div className="experience-time">
                              <h3>Experience</h3>
                              <h5>15+ Years</h5>
                            </div>
                          </div>
                          <div className="social-icons">
                            <Image
                              src="/assets/images/social-icon-01.svg"
                              alt="Social 1"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-02.svg"
                              alt="Social 2"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-03.svg"
                              alt="Social 3"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-04.svg"
                              alt="Social 4"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dNoneOnDesktop">
                      <div className="member-experience">
                        <div className="experience-location">
                          <h3>Location</h3>
                          <h5>Canada</h5>
                        </div>
                        <span className="member-experience-right-border"></span>
                        <div className="experience-time">
                          <h3>Experience</h3>
                          <h5>15+ Years</h5>
                        </div>
                      </div>
                      <div className="social-icons">
                        <Image
                          src="/assets/images/social-icon-01.svg"
                          alt="Social 1"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-02.svg"
                          alt="Social 2"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-03.svg"
                          alt="Social 3"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-04.svg"
                          alt="Social 4"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>

                    <div className="about-member">
                      <div className="member-skill">
                        <div className="member-skill-content">
                          <h2>
                            Industry Knowledge:
                            <span>
                              Fashion, Food & Beverage, Hospitality, Automotive,
                              Technology, Transportation & more
                            </span>
                          </h2>
                          <h2>
                            Area of Expertise:
                            <span>
                              {" "}
                              Video Production, Graphic Design & Illustration,
                              Website Design
                            </span>
                          </h2>
                        </div>
                        <div className="member-skill-button">
                          <div className="skills">
                            <h5>Website Design</h5>
                          </div>
                          <div className="skills">
                            <h5>Graphic Design</h5>
                          </div>
                          <div className="skills">
                            <h5>Mobile App Design</h5>
                          </div>
                        </div>
                      </div>

                      <div className="gallery-wrapper">
                        <div className="gallery">
                          <div className="gallery-track">
                            {[
                              "expertise-slider-image-01.webp",
                              "expertise-slider-image-02.webp",
                              "expertise-slider-image-03.webp",
                              "expertise-slider-image-04.webp",
                              "expertise-slider-image-05.webp",
                              "expertise-slider-image-01.webp",
                              "expertise-slider-image-02.webp",
                              "expertise-slider-image-03.webp",
                              "expertise-slider-image-04.webp",
                              "expertise-slider-image-05.webp",
                            ].map((img, i) => (
                              <Image
                                key={i}
                                src={`/assets/images/${img}`}
                                alt={`Expertise ${i}`}
                                width={200}
                                height={150}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-expertise-slider">
                    <div className="team-member">
                      <div className="member-image">
                        <Image
                          src="/assets/images/team-member-01.webp"
                          alt="Team Member"
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="team-member-slide-content">
                        <div className="member-name">
                          <h2>Amit A.</h2>
                          <h5>Creative Director</h5>
                          <Image
                            src="/assets/images/star.svg"
                            alt="Star"
                            width={80}
                            height={20}
                          />
                        </div>
                        <div className="dNoneOnMobile">
                          <div className="member-experience">
                            <div className="experience-location">
                              <h3>Location</h3>
                              <h5>Canada</h5>
                            </div>
                            <span className="member-experience-right-border"></span>
                            <div className="experience-time">
                              <h3>Experience</h3>
                              <h5>15+ Years</h5>
                            </div>
                          </div>
                          <div className="social-icons">
                            <Image
                              src="/assets/images/social-icon-01.svg"
                              alt="Social 1"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-02.svg"
                              alt="Social 2"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-03.svg"
                              alt="Social 3"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/assets/images/social-icon-04.svg"
                              alt="Social 4"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dNoneOnDesktop">
                      <div className="member-experience">
                        <div className="experience-location">
                          <h3>Location</h3>
                          <h5>Canada</h5>
                        </div>
                        <span className="member-experience-right-border"></span>
                        <div className="experience-time">
                          <h3>Experience</h3>
                          <h5>15+ Years</h5>
                        </div>
                      </div>
                      <div className="social-icons">
                        <Image
                          src="/assets/images/social-icon-01.svg"
                          alt="Social 1"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-02.svg"
                          alt="Social 2"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-03.svg"
                          alt="Social 3"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/assets/images/social-icon-04.svg"
                          alt="Social 4"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>

                    <div className="about-member">
                      <div className="member-skill">
                        <div className="member-skill-content">
                          <h2>
                            Industry Knowledge:
                            <span>
                              Fashion, Food & Beverage, Hospitality, Automotive,
                              Technology, Transportation & more
                            </span>
                          </h2>
                          <h2>
                            Area of Expertise:
                            <span>
                              {" "}
                              Video Production, Graphic Design & Illustration,
                              Website Design
                            </span>
                          </h2>
                        </div>
                        <div className="member-skill-button">
                          <div className="skills">
                            <h5>Website Design</h5>
                          </div>
                          <div className="skills">
                            <h5>Graphic Design</h5>
                          </div>
                          <div className="skills">
                            <h5>Mobile App Design</h5>
                          </div>
                        </div>
                      </div>

                      <div className="gallery-wrapper">
                        <div className="gallery">
                          <div className="gallery-track">
                            {[
                              "expertise-slider-image-01.webp",
                              "expertise-slider-image-02.webp",
                              "expertise-slider-image-03.webp",
                              "expertise-slider-image-04.webp",
                              "expertise-slider-image-05.webp",
                              "expertise-slider-image-01.webp",
                              "expertise-slider-image-02.webp",
                              "expertise-slider-image-03.webp",
                              "expertise-slider-image-04.webp",
                              "expertise-slider-image-05.webp",
                            ].map((img, i) => (
                              <Image
                                key={i}
                                src={`/assets/images/${img}`}
                                alt={`Expertise ${i}`}
                                width={200}
                                height={150}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* 👉 duplicate SwiperSlide as needed */}
              </Swiper>

              <div
                className="swiper-pagination"
                style={{ gap: "0.8rem" }}
              ></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
