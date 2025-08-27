"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // // Auto open modal after 10 seconds on reload
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsModalOpen(true);
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

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
    
      {/* ===== MODAL END ===== */}

      {/* Example button to trigger modal */}
      {/* <button className="open-modal-btn button-green" onClick={openModal}>
        Open Modal
      </button> */}
    </>
  );
};

export default Footer;
