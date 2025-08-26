"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto open modal after 10 seconds on reload
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* ===== FOOTER START ===== */}
      <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
        <div className="footer-outer mt-0 dark:bg-gray-800 dark:text-white m-2 rounded-2 lg:rounded-3 footerPadding">
          <div className="uc-footer-content">
            <div className="container xl:max-w-xl">
              <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
                <div className="uc-footer-widgets panel">
                  <div className="row child-cols-6 md:child-cols col-match g-4">
                    <div className="col-12 lg:col-6">
                      <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                        <div>
                          <Link className="panel text-none" href="/index">
                            <img
                              className="w-100 logo-image"
                              src="assets/images/startups-advisory-02.svg"
                              alt="Logo"
                            />
                          </Link>
                          <p className="mt-2">
                            Design amazing digital experiences that create more
                            happy in the world.
                          </p>
                          <div className="mt-2">
                            <a
                              href="https://facebook.com/startupsadvisory"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <img
                                src="assets/images/facebook01.png"
                                alt="Social Icon (Facebook)"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Section */}
                    <div>
                      <ul className="nav-y gap-2 fw-medium">
                        <li className="fs-7 text-uppercase dark:text-gray-300">
                          Product
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <a href="#">Features</a>
                        </li>
                        <li>
                          <a href="#">Key Goods</a>
                        </li>
                        <li>
                          <a href="#">Pro Elements</a>
                        </li>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                        <li>
                          <a href="#">Changelog</a>
                        </li>
                      </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                      <ul className="nav-y gap-2 fw-medium">
                        <li className="fs-7 text-uppercase dark:text-gray-300">
                          Company
                        </li>
                        <li>
                          <Link href="/about-us">About us</Link>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="#">Press</a>
                        </li>
                        <li>
                          <a href="#">News</a>
                        </li>
                        <li>
                          <a href="#">Media kit</a>
                        </li>
                        <li>
                          <Link href="/contact-us">Contact</Link>
                        </li>
                      </ul>
                    </div>

                    {/* Resources */}
                    <div className="d-none lg:d-block footerMobile">
                      <ul className="nav-y gap-2 fw-medium">
                        <li className="fs-7 text-uppercase dark:text-gray-300">
                          Resources
                        </li>
                        <li>
                          <a href="#">How it works</a>
                        </li>
                        <li>
                          <a href="#">Newsletter</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Help center</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white text-center justify-center">
                  <p className="opacity-60 text-center">
                    Startups Advisory © 2025, All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ===== FOOTER END ===== */}

      {/* ===== MODAL START ===== */}
      {isModalOpen && (
        <div>
          <div
            className="modal-bg show_modal"
            onClick={closeModal}
          ></div>
          <div className="custom_modal show_modal" id="welcomeModal">
            <button
              className="uc-modal-close-default d-flex items-center top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90 from-close"
              id="closeModal"
              type="button"
              onClick={closeModal}
            >
              <i className="unicon-close"></i>
            </button>
            <div className="row position-relative items-center">
              {/* Left side form */}
              <div className="col-md-6 p-md-0 modal-form-ipad-responsive">
                <div className="servicesFormPopup">
                  <div className="vstack" style={{ gap: "0.5rem" }}>
                    <h1 className="m-0 text-black text-start popup-form-heading">
                      Get in Touch
                    </h1>
                    <form className="vstack" style={{ gap: "0.5rem" }}>
                      <div className="vstack lg:hstack gap-2 input-fields">
                        <div className="from-inputs">
                          <h5 className="form-input-heading">Full Name</h5>
                          <input
                            className="form-control h-48px w-100 form-input-area"
                            type="text"
                            placeholder="Full name"
                            required
                          />
                        </div>
                        <div className="from-inputs">
                          <h5 className="form-input-heading">Work Email</h5>
                          <input
                            className="form-control h-48px w-100 form-input-area"
                            type="email"
                            placeholder="Work Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="from-inputs">
                        <h5 className="form-input-heading">Your Phone  Number</h5>
                        <input
                          className="form-control h-48px w-100 form-input-area"
                          type="Text"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                      <div className="from-inputs-1">
                        <h5 className="form-input-heading">
                          Can you describe your goal
                        </h5>
                        <textarea
                          className="form-control text-input-area"
                          placeholder="We just need one sentence..."
                        ></textarea>
                      </div>
                      <button
                        className="button-green mt-2"
                        style={{ width: "100%" }}
                        type="submit"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right side image + text */}
              <div className="col-md-6 p-md-0 modal-ipad-responsive">
                <div className="home_modal_bg">
                  <div className="form-content">
                    <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white form-heading">
                      <span>Let’s Talk Serious About</span>
                      <span
                        className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2"
                        style={{
                          borderRadius: "7px",
                          marginLeft: "0.6rem",
                          backgroundColor: "#0FDAC2",
                        }}
                      >
                        Scaling Creative?
                      </span>
                    </p>
                    <p className="text-white form-paragraph">
                      We’ll take a close look at your current design process,
                      spot what’s slowing you down, and show how Hey Design
                      helps fast-moving teams get high-quality creative.
                    </p>
                    <div className="popup-image">
                      <img src="assets/images/form-image.webp" alt="Form" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      )}
      {/* ===== MODAL END ===== */}

      {/* Example button to trigger modal */}
      {/* <button className="open-modal-btn button-green" onClick={openModal}>
        Open Modal
      </button> */}
    </>
  );
};

export default Footer;
