import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Header start */}
      <header
        className="uc-header header-six uc-navbar-sticky-wrap z-999"
        data-uc-sticky="start: 100px; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      >
        <nav
          className="uc-navbar-container lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary z-1"
          data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 0; delay: 0;"
        >
          <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
            <div className="container max-w-lg lg:max-w-950px xl:max-w-xl">
              <div
                className="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white"
                data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
              >
                {/* Left */}
                <div className="uc-navbar-left">
                  <div className="uc-logo">
                    <Link className="panel text-none" href="/">
                      <img
                        className="w-100 logo-image"
                        src="/assets/images/startups-advisory-01.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>

                {/* Center Nav */}
                <div className="uc-navbar-center">
                  <ul
                    className="uc-navbar-nav gap-3 xl:gap-3 d-none lg:d-flex fs-5 fw-medium"
                    data-uc-scrollspy-nav="closest: li; offset: 40; scroll: true"
                  >
                    <li>
                      <Link href="/" className="nav-menu menu-hover">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className="nav-menu menu-hover">
                        About Us
                      </Link>
                    </li>

                    {/* Services Dropdown */}
                    <li className="servicesDropdownLi">
                      <a
                        href="#"
                        className="gap-1 serives-hover"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                        style={{ opacity: 1 }}
                      >
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
                          ></path>
                        </svg>
                      </a>

                      {/* Dropdown Content */}
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
                                    We are a full-service digital agency dedicated
                                    to building bold brands, integrating intelligent
                                    AI systems, and crafting high-performing marketing
                                    campaigns.
                                  </p>
                                </div>

                                <div className="row child-cols-6 gx-6">
                                  <div className="vstack gap-2">
                                    <div className="servicesDropdownPages activeIcon01">
                                      <Link
                                        className="gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                        href="/logo-design"
                                      >
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="/assets/images/dropdown-icon-01.svg"
                                            alt="icon"
                                          />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow text-inherit">
                                            Logo Design
                                          </span>
                                          <p className="fs-8 text-muted">
                                            Crafting unique brand foundations.
                                          </p>
                                        </div>
                                      </Link>
                                    </div>

                                    <div className="servicesDropdownPages activeIcon02">
                                      <Link
                                        className="gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                        href="/marketing-strategy"
                                      >
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="/assets/images/dropdown-icon-02.svg"
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
                                      </Link>
                                    </div>

                                    <div className="servicesDropdownPages activeIcon03">
                                      <Link
                                        className="gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                        href="/staff-augmentation"
                                      >
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="/assets/images/dropdown-icon-03.svg"
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
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="vstack gap-2">
                                    <div className="servicesDropdownPages activeIcon04">
                                      <Link
                                        className="gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                        href="/website-development"
                                      >
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="/assets/images/dropdown-icon-04.svg"
                                            alt="icon"
                                          />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow text-inherit">
                                            Web Development
                                          </span>
                                          <p className="fs-8 text-muted">
                                            Crafting unique brand foundations.
                                          </p>
                                        </div>
                                      </Link>
                                    </div>

                                    <div className="servicesDropdownPages activeIcon04">
                                      <Link
                                        className="gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary"
                                        href="/printing"
                                      >
                                        <span className="icon rounded dark:bg-white">
                                          <img
                                            className="w-32px"
                                            src="/assets/images/dropdown-icon-05.svg"
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
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Dropdown Section */}
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
                                      src="/assets/images/star.svg"
                                      alt="stars"
                                    />
                                    <div className="dropDownRatting">
                                      <h6>5.0 Rating</h6>
                                      <span></span>
                                      <h6>100+ Reviews</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Swiper Slider placeholder */}
                              <div className="row">
                                <div className="swiper dropDownSlider">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="dropDownCard">
                                        <p>
                                          "The website they crafted for us is both stylish
                                          in design and flawless in performance."
                                        </p>
                                        <div className="aboutStaff">
                                          <img src="/assets/images/staffDropDwon01.png" alt="staff" />
                                          <div className="staffDesignation">
                                            <h5>John Mitchell</h5>
                                            <h4>Marketing Director</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-pagination" style={{ gap: "0.8rem" }}></div>
                                </div>
                              </div>

                              <div className="row mt-2">
                                <div className="dropDownLogo">
                                  <img src="/assets/images/dropDownLogo.png" alt="guarantee" />
                                  <p>100% Money Back Guarantee</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <Link href="/blog" className="nav-menu menu-hover">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="nav-menu menu-hover">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="nav-menu menu-hover">
                        Pricing
                      </Link>
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

      {/* Offcanvas Mobile Menu */}
      <div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
        <div
          className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white mobile-menu-blur-effect"
          id="blurEffect"
        >
          <header className="uc-offcanvas-header hstack justify-between items-center pb-2">
            <div className="uc-logo">
              <Link className="panel text-none" href="/">
                <img
                  className="w-100 logo-image"
                  src="/assets/images/startups-advisory-01.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <button
              className="uc-offcanvas-close rtl:end-auto rtl:start-0 d-flex icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all for-button-color"
              style={{ paddingLeft: 0, paddingRight: 0, marginTop: 11, marginRight: 8 }}
              type="button"
            >
              <i className="unicon-close"></i>
            </button>
          </header>

          <div className="panel">
            <ul className="nav-y gap-narrow fw-medium fs-6 gap-2" data-uc-nav>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/logo-design">Logo Design</Link>
              </li>
              <li>
                <Link href="/website-development">Web Design</Link>
              </li>
              <li>
                <Link href="/staff-augmentation">Staff Augmentation</Link>
              </li>
              <li>
                <Link href="/printing">Printing</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link
                  className="button-green px-4 open-modal-btn"
                  href="#"
                  data-modal-target="#welcomeModal"
                >
                  <span>Free Strategy Session</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
