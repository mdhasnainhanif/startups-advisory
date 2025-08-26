"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
  useEffect(() => {
    // Handle active page highlighting
    let currentPage = window.location.pathname.split("/").pop() || "/index";
    currentPage = currentPage.split("?")[0].split("#")[0];

    const navLinks = document.querySelectorAll(".uc-navbar-nav > li > a");

    navLinks.forEach((link) => {
      const href = (link.getAttribute("href") || "")
        .split("?")[0]
        .split("#")[0];

      // Normal links (not services)
      if (!link.closest(".servicesDropdownLi")) {
        if (
          href &&
          href !== "#" &&
          (href === currentPage ||
            (currentPage === "/index" && href === "/index"))
        ) {
          link.classList.add("active");
        }
      }
    });

    // Handle services dropdown
    const servicesLi = document.querySelector(".servicesDropdownLi");
    if (servicesLi) {
      const dropdownLinks = servicesLi.querySelectorAll(
        ".servicesDropdown a[href]"
      );
      let matchFound = false;

      dropdownLinks.forEach((dropLink) => {
        const dropHref = (dropLink.getAttribute("href") || "")
          .split("?")[0]
          .split("#")[0];
        if (dropHref && dropHref === currentPage) {
          dropLink.classList.add("active");
          matchFound = true;
        }
      });

      if (matchFound) {
        servicesLi.querySelector(":scope > a").classList.add("active");
      }
    }
  }, []);

  return (
    <>
      {/* Header Start */}
      <header className="uc-header header-six uc-navbar-sticky-wrap z-999">
        <nav className="uc-navbar-container lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary z-1">
          <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
            <div className="container max-w-lg lg:max-w-950px xl:max-w-xl">
              <div className="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white">
                {/* Left */}
                <div className="uc-navbar-left">
                  <div className="uc-logo">
                    <a className="panel text-none" href="/index">
                      <img
                        className="w-100 logo-image"
                        src="assets/images/startups-advisory-01.svg"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>

                {/* Center Navigation */}
                <div className="uc-navbar-center">
                  <ul className="uc-navbar-nav gap-3 xl:gap-3 d-none lg:d-flex fs-5 fw-medium">
                    <li>
                      <a href="/index" className="nav-menu menu-hover">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about-us" className="nav-menu menu-hover">
                        About Us
                      </a>
                    </li>

                    {/* Services Dropdown */}
                    <li className="servicesDropdownLi">
                      <a href="#" className="gap-1 serives-hover">
                        Services
                        <svg
                          className="transition-transform duration-300 transform down-svg group-hover:rotate-180"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M9.5 4.5 6 8 2.5 4.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <div className="servicesDropdown">
                        <div className="row gx-5 col-match justify-between">
                          <div className="col-7">
                            <div className="panel vstack servicesDropdownContent01">
                              <div className="panel vstack gap-2">
                                <div className="vstack gap-narrow">
                                  <h5 className="h5 xl:h4 m-0">
                                    Strategic Solutions, Creative Impact
                                  </h5>
                                  <p className="fs-7 text-gray-300">
                                    We are a full-service digital agency
                                    dedicated to building bold brands,
                                    integrating intelligent AI systems, and
                                    crafting high-performing marketing
                                    campaigns.
                                  </p>
                                </div>
                                <div className="row child-cols-6 gx-6">
                                  <div className="vstack gap-2">
                                    <div className="servicesDropdownPages activeIcon01">
                                      <a href="/logo-design">
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="assets/images/dropdown-icon-01.svg"
                                            alt="icon"
                                          />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">
                                            Logo Design
                                          </span>
                                          <p className="fs-8 text-muted">
                                            Crafting unique brand foundations.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="servicesDropdownPages activeIcon02">
                                      <a href="/marketing-strategy">
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="assets/images/dropdown-icon-02.svg"
                                            alt="icon"
                                          />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">
                                            Marketing Strategy
                                          </span>
                                          <p className="fs-8 text-muted">
                                            Smarter systems, seamless automation.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div className="vstack gap-2">
                                    <div className="servicesDropdownPages activeIcon03">
                                      <a href="/staff-augmentation">
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="assets/images/dropdown-icon-03.svg"
                                            alt="icon"
                                          />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">
                                            Staff Augmentation
                                          </span>
                                          <p className="fs-8 text-muted">
                                            Engage, convert, grow continuously.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="servicesDropdownPages activeIcon04">
                                      <a href="/printing">
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="assets/images/dropdown-icon-05.svg"
                                            alt="icon"
                                          />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">
                                            Printing
                                          </span>
                                          <p className="fs-8 text-muted">
                                            Designs that drive impact.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Slider Section */}
                          <div className="col-5 pl0">
                            <div className="servicesDropdownContent02">
                              <div className="servicesDropdownContent02Main">
                                <div className="servicesDropDownSubContent">
                                  <h2>
                                    Trusted By<span>Leaders</span>
                                  </h2>
                                  <div>
                                    <img
                                      className="w-100"
                                      src="assets/images/star.svg"
                                      alt="rating"
                                    />
                                    <div className="dropDownRatting">
                                      <h6>5.0 Rating</h6>
                                      <span></span>
                                      <h6>100+ Reviews</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Swiper Slider */}
                              <Swiper
                                modules={[Pagination, Autoplay]}
                                loop={true}
                                autoplay={{
                                  delay: 4000,
                                  disableOnInteraction: false,
                                }}
                                pagination={{
                                  clickable: true,
                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                breakpoints={{
                                  768: { slidesPerView: 2 },
                                  1024: { slidesPerView: 2 },
                                }}
                                className="dropDownSlider"
                              >
                                <SwiperSlide>
                                  <div className="dropDownCard">
                                    <p>
                                      "Amazing work, highly professional team!"
                                    </p>
                                    <div className="aboutStaff">
                                      <img
                                        src="assets/images/staffDropDwon01.png"
                                        alt="staff"
                                      />
                                      <div className="staffDesignation">
                                        <h5>John Mitchell</h5>
                                        <h4>Marketing Director</h4>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="dropDownCard">
                                    <p>
                                      "Amazing work, highly professional team!"
                                    </p>
                                    <div className="aboutStaff">
                                      <img
                                        src="assets/images/staffDropDwon02.png"
                                        alt="staff"
                                      />
                                      <div className="staffDesignation">
                                        <h5>Sara Lee</h5>
                                        <h4>Project Manager</h4>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="dropDownCard">
                                    <p>
                                      "Amazing work, highly professional team!"
                                    </p>
                                    <div className="aboutStaff">
                                      <img
                                        src="assets/images/staffDropDwon02.png"
                                        alt="staff"
                                      />
                                      <div className="staffDesignation">
                                        <h5>Sara Lee</h5>
                                        <h4>Project Manager</h4>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              </Swiper>

                              {/* Guarantee Section */}
                              <div className="row mt-2">
                                <div className="dropDownLogo">
                                  <img
                                    src="assets/images/dropDownLogo.png"
                                    alt="Guarantee"
                                  />
                                  <p>100% Money Back Guarantee</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a href="/blog" className="nav-menu menu-hover">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/contact-us" className="nav-menu menu-hover">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="nav-menu menu-hover">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Right */}
                <div className="uc-navbar-right">
                  <button
                    className="button-Purple buttonPurpleResponsive open-modal-btn"
                    data-modal-target="#welcomeModal"
                  >
                    <span>Free Strategy Session</span>
                  </button>
                  <a
                    className="d-block lg:d-none"
                    href="#uc-menu-panel"
                    data-uc-navbar-toggle-icon
                    data-uc-toggle
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Header End */}
    </>
  );
};

export default Header;
