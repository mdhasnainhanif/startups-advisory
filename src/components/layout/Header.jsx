"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useModal } from "../../hooks/useModal";

const Header = () => {
  const openModal = useModal((state) => state.openModal);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Toggle mobile menu
  const toggleMobileMenu = (e) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!isMobileMenuOpen) {
      // Store current scroll position before opening menu
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
    }
    
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle services dropdown on mobile
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    const handleScroll = (e) => {
      if (isMobileMenuOpen) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    if (isMobileMenuOpen) {
      // Disable scroll on body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      
      // Add touch and wheel event listeners for additional prevention
      document.addEventListener('touchmove', handleScroll, { passive: false });
      document.addEventListener('wheel', handleScroll, { passive: false });
    } else {
      // Re-enable scroll on body and restore position
      const scrollY = document.body.style.top;
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      
      // Remove event listeners
      document.removeEventListener('touchmove', handleScroll);
      document.removeEventListener('wheel', handleScroll);
    }

    return () => {
      // Cleanup when component unmounts
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.removeEventListener('touchmove', handleScroll);
      document.removeEventListener('wheel', handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Sticky classes + styles on scroll (with enter/exit animations)
  useEffect(() => {
    const headerEl = document.querySelector(".uc-header");
    const navContainer = document.querySelector(".uc-navbar-container");
    if (!headerEl || !navContainer) return;

    const SCROLL_THRESHOLD = 10; // px
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const shouldStick = window.scrollY > SCROLL_THRESHOLD;
        const isSticky = headerEl.classList.contains("is-sticky");

        // Core classes requested
        headerEl.classList.toggle("uc-sticky-below", shouldStick);
        headerEl.classList.toggle("uc-sticky-fixed", shouldStick);

        // Mirror UI behavior on the nav wrapper
        navContainer.classList.toggle("uc-navbar-sticky", shouldStick);
        navContainer.classList.toggle("uc-navbar-transparent", !shouldStick);

        // Animate on state changes
        if (shouldStick && !isSticky) {
          headerEl.classList.add("is-sticky", "was-sticky"); // enter anim
          setTimeout(() => headerEl.classList.remove("was-sticky"), 400);
        } else if (!shouldStick && isSticky) {
          headerEl.classList.remove("is-sticky"); // exit anim
          headerEl.classList.add("was-sticky");
          setTimeout(() => headerEl.classList.remove("was-sticky"), 250);
        }

        ticking = false;
      });
    };

    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active link highlight
  useEffect(() => {
    let currentPage = window.location.pathname.split("/").pop() || "/home";
    currentPage = currentPage.split("?")[0].split("#")[0];

    const navLinks = document.querySelectorAll(".uc-navbar-nav > li > a");

    navLinks.forEach((link) => {
      const href = (link.getAttribute("href") || "")
        .split("?")[0]
        .split("#")[0];

      if (!link.closest(".servicesDropdownLi")) {
        if (
          href &&
          href !== "#" &&
          (href === currentPage ||
            (currentPage === "/home" && href === "/home"))
        ) {
          link.classList.add("active");
        }
      }
    });

    const servicesLi = document.querySelector(".servicesDropdownLi");
    if (servicesLi) {
      const dropdownLinks = servicesLi.querySelectorAll(".servicesDropdown a[href]");
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
        const topA = servicesLi.querySelector(":scope > a");
        topA && topA.classList.add("active");
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
                    <a className="panel text-none" href="/home">
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
                    <li><a href="/home" className="nav-menu menu-hover">Home</a></li>
                    <li><a href="/about-us" className="nav-menu menu-hover">About Us</a></li>

                    {/* Services Dropdown */}
                    <li className="servicesDropdownLi">
                      <a className="gap-1 serives-hover">
                        Services
                        <svg className="transition-transform duration-300 transform down-svg group-hover:rotate-180" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M9.5 4.5 6 8 2.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>

                      <div className="servicesDropdown">
                        <div className="row gx-5 col-match justify-between">
                          <div className="col-7">
                            <div className="panel vstack servicesDropdownContent01">
                              <div className="panel vstack gap-2">
                                <div className="vstack gap-narrow">
                                  <h5 className="h5 xl:h4 m-0">Strategic Solutions, Creative Impact</h5>
                                  <p className="fs-7 text-gray-300">
                                    We are a full-service digital agency dedicated to building bold brands,
                                    integrating intelligent AI systems, and crafting high-performing marketing campaigns.
                                  </p>
                                </div>

                                <div className="row child-cols-6 gx-6">
                                  <div className="vstack gap-2">
                                    <div className="servicesDropdownPages activeIcon01">
                                      <a href="/logo-design">
                                        <span className="icon rounded dark:bg-white">
                                          <img className="w-32px" src="assets/images/dropdown-icon-01.svg" alt="icon" />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">Logo Design</span>
                                          <p className="fs-8 text-muted">Crafting unique brand foundations.</p>
                                        </div>
                                      </a>
                                    </div>

                                    <div className="servicesDropdownPages activeIcon01">
                                      <a href="/logo-design">
                                        <span className="icon rounded dark:bg-white">
                                          <img className="w-32px" src="assets/images/dropdown-icon-01.svg" alt="icon" />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">Website Development</span>
                                          <p className="fs-8 text-muted">Crafting unique brand foundations.</p>
                                        </div>
                                      </a>
                                    </div>

                                    <div className="servicesDropdownPages activeIcon02">
                                      <a href="/marketing-strategy">
                                        <span className="icon rounded dark:bg-white">
                                          <img className="w-32px" src="assets/images/dropdown-icon-02.svg" alt="icon" />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">Marketing Strategy</span>
                                          <p className="fs-8 text-muted">Smarter systems, seamless automation.</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div className="vstack gap-2">
                                    <div className="servicesDropdownPages activeIcon03">
                                      <a href="/staff-augmentation">
                                        <span className="icon rounded dark:bg-white">
                                          <img className="w-32px" src="assets/images/dropdown-icon-03.svg" alt="icon" />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">Staff Augmentation</span>
                                          <p className="fs-8 text-muted">Engage, convert, grow continuously.</p>
                                        </div>
                                      </a>
                                    </div>

                                    <div className="servicesDropdownPages activeIcon04">
                                      <a href="/printing">
                                        <span className="icon rounded dark:bg-white">
                                          <img className="w-32px" src="assets/images/dropdown-icon-05.svg" alt="icon" />
                                        </span>
                                        <div className="panel">
                                          <span className="fs-7 fw-medium mb-narrow">Printing</span>
                                          <p className="fs-8 text-muted">Designs that drive impact.</p>
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
                                  <h2>Trusted By<span>Leaders</span></h2>
                                  <div>
                                    <img className="w-100" src="assets/images/star.svg" alt="rating" />
                                    <div className="dropDownRatting">
                                      <h6>5.0 Rating</h6><span></span><h6>100+ Reviews</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Swiper Slider */}
                              <Swiper
                                modules={[Pagination, Autoplay]}
                                loop
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                spaceBetween={20}
                                slidesPerView={1}
                                breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
                                className="dropDownSlider"
                              >
                                <SwiperSlide>
                                  <div className="dropDownCard">
                                    <p>"Amazing work, highly professional team!"</p>
                                    <div className="aboutStaff">
                                      <img src="assets/images/staffDropDwon01.png" alt="staff" />
                                      <div className="staffDesignation">
                                        <h5>John Mitchell</h5>
                                        <h4>Marketing Director</h4>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="dropDownCard">
                                    <p>"Amazing work, highly professional team!"</p>
                                    <div className="aboutStaff">
                                      <img src="assets/images/staffDropDwon02.png" alt="staff" />
                                      <div className="staffDesignation">
                                        <h5>Sara Lee</h5>
                                        <h4>Project Manager</h4>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="dropDownCard">
                                    <p>"Amazing work, highly professional team!"</p>
                                    <div className="aboutStaff">
                                      <img src="assets/images/staffDropDwon02.png" alt="staff" />
                                      <div className="staffDesignation">
                                        <h5>Sara Lee</h5>
                                        <h4>Project Manager</h4>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              </Swiper>

                              {/* Guarantee */}
                              <div className="row mt-2">
                                <div className="dropDownLogo">
                                  <img src="assets/images/dropDownLogo.png" alt="Guarantee" />
                                  <p>100% Money Back Guarantee</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </li>

                    <li><a href="/blog" className="nav-menu menu-hover">Blog</a></li>
                    <li><a href="/contact-us" className="nav-menu menu-hover">Contact</a></li>
                    <li><a href="/pricing" className="nav-menu menu-hover">Pricing</a></li>
                  </ul>
                </div>

                {/* Right */}
                <div className="uc-navbar-right">
                  <button
                    className="button-Purple buttonPurpleResponsive open-modal-btn hidden md:block"
                    onClick={openModal}
                  >
                    <span>Free Strategy Session</span>
                  </button>
                  <a 
                    className="d-block lg:d-none mobile-menu-toggle" 
                    onClick={toggleMobileMenu}
                    href="#!"
                  >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Opens from left */}
        <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}>
          <div className="mobile-menu-header">
            <div className="uc-logo">
              <a className="panel text-none" href="/home">
                <img
                  className="w-100 logo-image"
                  src="assets/images/startups-advisory-01.svg"
                  alt="logo"
                />
              </a>
            </div>
            <button className="mobile-menu-close" onClick={toggleMobileMenu}>
              +
            </button>
          </div>
          
          <ul className="mobile-nav">
            <li><a href="/home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="/about-us" onClick={toggleMobileMenu}>About Us</a></li>
            
            <li className="mobile-services-item">
              <div className="mobile-services-header" onClick={toggleServices}>
                <span>Services</span>
                <svg 
                  className={`services-arrow ${isServicesOpen ? 'open' : ''}`} 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none"
                >
                  <path d="M9.5 4.5 6 8 2.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <div className={`mobile-services-dropdown ${isServicesOpen ? 'open' : ''}`}>
                <a href="/logo-design" onClick={toggleMobileMenu}>
                  <img src="assets/images/dropdown-icon-01.svg" alt="icon" />
                  <div>
                    <span>Logo Design</span>
                    <p>Crafting unique brand foundations.</p>
                  </div>
                </a>
                
                <a href="/website-development" onClick={toggleMobileMenu}>
                  <img src="assets/images/dropdown-icon-01.svg" alt="icon" />
                  <div>
                    <span>Website Development</span>
                    <p>Crafting unique brand foundations.</p>
                  </div>
                </a>
                
                <a href="/marketing-strategy" onClick={toggleMobileMenu}>
                  <img src="assets/images/dropdown-icon-02.svg" alt="icon" />
                  <div>
                    <span>Marketing Strategy</span>
                    <p>Smarter systems, seamless automation.</p>
                  </div>
                </a>
                
                <a href="/staff-augmentation" onClick={toggleMobileMenu}>
                  <img src="assets/images/dropdown-icon-03.svg" alt="icon" />
                  <div>
                    <span>Staff Augmentation</span>
                    <p>Engage, convert, grow continuously.</p>
                  </div>
                </a>
                
                <a href="/printing" onClick={toggleMobileMenu}>
                  <img src="assets/images/dropdown-icon-05.svg" alt="icon" />
                  <div>
                    <span>Printing</span>
                    <p>Designs that drive impact.</p>
                  </div>
                </a>
              </div>
            </li>
            
            <li><a href="/blog" onClick={toggleMobileMenu}>Blog</a></li>
            <li><a href="/contact-us" onClick={toggleMobileMenu}>Contact</a></li>
            <li><a href="/pricing" onClick={toggleMobileMenu}>Pricing</a></li>
          </ul>
          
          <button
            className="button-green"
            onClick={() => {
              openModal();
              toggleMobileMenu();
            }}
          >
            Free Strategy Session
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
        )}
      </header>
      {/* Header End */}

      {/* Animations & sticky styles */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          .uc-header,
          .uc-header .uc-navbar-container,
          .uc-header .logo-image {
            transition:
              background-color 220ms ease,
              box-shadow 220ms ease,
              backdrop-filter 220ms ease,
              transform 240ms cubic-bezier(.2,.8,.2,1),
              margin-top 240ms cubic-bezier(.2,.8,.2,1),
              border-radius 240ms cubic-bezier(.2,.8,.2,1),
              opacity 240ms ease;
          }
        }

        /* Enter animation (when class is added) */
        .uc-header.is-sticky.was-sticky {
          animation: headerSlideDown 360ms cubic-bezier(.22,.9,.26,1) both;
        }
        @keyframes headerSlideDown {
          from { transform: translateY(-16px); opacity: 0.92; }
          to   { transform: translateY(0);     opacity: 1; }
        }

        /* Exit animation (when un-sticking) */
        .uc-header:not(.is-sticky).was-sticky {
          animation: headerFadeUp 220ms ease-in both;
        }
        @keyframes headerFadeUp {
          from { opacity: 1; }
          to   { opacity: 0.96; }
        }

        /* Sticky look - Remove top space when scrolled */
        .uc-header.is-sticky {
          position: fixed !important;
          width: 100% !important;
          top: 0 !important;
          margin-top: 0 !important;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: saturate(180%) blur(8px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          z-index: 9999;
        }
        .dark .uc-header.is-sticky {
          background-color: rgba(18, 18, 18, 0.95);
        }

        /* Shrink logo slightly when sticky */
        .uc-header.is-sticky .logo-image {
          transform: scale(0.92);
        }

        /* Adjust nav container while sticky */
        .uc-header.is-sticky .uc-navbar-container {
          margin-top: 0 !important;
          border-radius: 0 !important;
        }

        /* Transparent when not sticky (optional) */
        .uc-navbar-container.uc-navbar-transparent {
          background-color: transparent;
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          width: 21px;
          height: 24px;
          cursor: pointer;
          color:#643bff;
        }
        
        @media (max-width: 1024px) {
          .mobile-menu-toggle {
            display: flex;
          }
        }
        
        .mobile-menu-toggle .bar {
          height: 2px;
          width: 100%;
          background-color: currentColor;
          margin: 2px 0;
          transition: all 0.3s ease;
        }
        
        /* Mobile Menu Panel - Opens from left */
        .mobile-menu-panel {
          position: fixed;
          top: 0;
          left: -100%;
          width: 320px;
          height: 100vh;
          background: rgb(255 255 255 / 50%) !important;
          -webkit-backdrop-filter: blur(5px) !important;
          backdrop-filter: blur(13px) !important;
          z-index: 10000;
          transition: left 0.3s ease;
          padding: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
        }
        
        .dark .mobile-menu-panel {
          background: #1a1a1a;
        }
        
        .mobile-menu-panel.open {
          left: 0;
        }
        
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .dark .mobile-menu-header {
          border-bottom-color: #333;
        }
        
        .uc-navbar-sticky{
          background: rgb(255 255 255 / 40%) !important;
          -webkit-backdrop-filter: blur(5px) !important;
          backdrop-filter: blur(13px) !important;
        }
        
        .mobile-menu-close {
          cursor: pointer;
          color: #fff;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          background-color: #0fdac2 !important;
          font-weight: 100;
          height: 1.5rem;
          width: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
        }
        
        .mobile-nav {
          list-style: none;
          padding: 0;
        }
        
        .mobile-nav a {
          display: block;
          padding: 12px 0;
          text-decoration: none;
          color: inherit;
          font-weight: 500;
        }
        
        .dark .mobile-services-item {
          border-bottom-color: #333;
        }
        
        .mobile-services-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          cursor: pointer;
          font-weight:500;
        }
        
        .services-arrow {
          transition: transform 0.3s ease;
        }
        
        #blurEffect {
          background: rgb(255 255 255 / 40%) !important;
          -webkit-backdrop-filter: blur(5px) !important;
          backdrop-filter: blur(13px) !important;
        }
        
        .services-arrow.open {
          transform: rotate(180deg);
        }
        
        .mobile-services-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .mobile-services-dropdown.open {
          max-height: 500px;
        }
        
        .mobile-services-dropdown a {
          display: flex;
          align-items: center;
          padding: 10px 0 10px 15px;
          border-bottom: none;
          font-size: 14px;
        }
        
        .mobile-services-dropdown a img {
          width: 24px;
          margin-right: 10px;
        }
        
        .mobile-services-dropdown a div {
          display: flex;
          flex-direction: column;
        }
        
        .mobile-services-dropdown a span {
          font-weight: 500;
          margin-bottom: 2px;
        }
        
        .mobile-services-dropdown a p {
          font-size: 12px;
          color: #666;
          margin: 0;
        }
        
        .dark .mobile-services-dropdown a p {
          color: #999;
        }
        
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          cursor: pointer;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .uc-navbar-center .uc-navbar-nav {
            gap: 2px !important;
          }
          
          .uc-navbar-nav .nav-menu {
            font-size: 14px;
            padding: 8px 10px;
          }
          
          .servicesDropdown {
            width: 700px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 768px) {
          .uc-navbar-main .container {
            padding: 0 15px;
          }
          
          .buttonPurpleResponsive {
            padding: 8px 12px;
            font-size: 14px;
          }
          
          .servicesDropdown {
            width: 90vw;
            left: 5vw;
            transform: none;
          }
          
          .servicesDropdown .row {
            flex-direction: column;
          }
          
          .servicesDropdown .col-7,
          .servicesDropdown .col-5 {
            width: 100%;
            padding: 0;
          }
          
          .dropDownSlider {
            margin-top: 20px;
          }
        }
        
        @media (max-width: 576px) {
          .uc-navbar {
            min-height: 60px !important;
            padding: 0 10px;
          }
          
          .uc-logo img {
            max-width: 120px;
          }
          
          .button-Purple {
            display: none;
          }
          
          .servicesDropdown {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 95vw;
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .servicesDropdownContent01,
          .servicesDropdownContent02 {
            padding: 15px;
          }
          
          .servicesDropDownSubContent h2 {
            font-size: 18px;
          }
          
          .dropDownCard {
            padding: 15px;
          }
          
          .dropDownLogo {
            justify-content: center;
          }
          
          .mobile-menu-panel {
            width: 280px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;