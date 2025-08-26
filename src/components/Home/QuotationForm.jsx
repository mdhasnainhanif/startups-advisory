"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Do I need to know about how to code?",
    answer:
      "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use startups advisory.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Feel free to do so. Startups advisory does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
  },
  {
    question: "Can I use it for multiple projects?",
    answer: "Definitely! Please use it however you like; we don’t limit it.",
  },
  {
    question: "Can I use this to create and sell a product?",
    answer: "Do not ever consider doing it.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
  },
];

const QuotationForm = () => {
  const [openIndex, setOpenIndex] = useState(0); // ✅ first open
  const contentRefs = useRef([]); // refs for measuring heights
  const [heights, setHeights] = useState([]); // cached scrollHeights
  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Measure content heights once mounted (and on resize)
  const measureHeights = () => {
    const hs = faqs.map((_, i) => {
      const el = contentRefs.current[i];
      return el ? el.scrollHeight : 0;
    });
    setHeights(hs);
  };

  useEffect(() => {
    measureHeights();
    const onResize = () => measureHeights();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="hero_header"
      className={`hero-header section panel overflow-hidden section-padding ${isContactPage ? "contactBanner" : ""}`}
    >
      {/* Background */}
      <div className="position-absolute top-0 start-0 end-0 min-h-600px bg-secondary dark:bg-opacity-0 z-0"></div>

      <div className="section-outer panel quote-space">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            {/* Heading */}
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                  <span className="fs-8 fw-bold text-uppercase">Contact Us</span>
                </div>
                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                  Get a{" "}
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Quote
                  </span>{" "}
                  Now
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="row d-flex flex-row h-100 ipad-gap">
              {/* Form */}
              <div className="col-12 lg:col-6">
                <form className="h-100 vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20">
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                    Have a question or feedback? Fill out the form below, and
                    we'll get back to you as soon as possible.
                  </p>
                  <div className="row child-cols-12 md:child-cols-6 g-2">
                    <div>
                      <input
                        className="form-control h-48px w-full"
                        type="text"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="form-control h-48px w-full"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <input
                    id="phone-number"
                    className="form-control h-48px w-100"
                    type="tel"
                    placeholder="Phone number"
                    required
                  />
                  <input
                    className="form-control h-48px w-full"
                    type="text"
                    placeholder="Subject"
                  />
                  <textarea
                    className="form-control min-h-150px w-full"
                    placeholder="Your message.."
                    required
                  ></textarea>
                  <button className="button-green mt-2 w-100" type="submit">
                    Send Your Query
                  </button>
                </form>
              </div>

              {/* FAQ Accordion */}
              <div className="col-12 lg:col-6">
                <div>
                  <div className="section-inner panel vstack gap-2 p-3 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20 faqMain">
                    <div className="panel">
                      <div className="panel p-3 sm:p-4 xl:p-6 lg:max-w-750px xl:w-auto m-auto rounded-2 bg-white dark:bg-gray-800">
                        <ul className=" uc-accordion">
                          {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const maxH =
                              isOpen && heights[index] ? `${heights[index]}px` : "0px";

                            return (
                              <li
                                key={index}
                                className={`faq-item in-view ${isOpen ? "uc-open" : ""}`}
                              >
                                <a
                                  role="button"
                                  tabIndex={0}
                                  className="uc-accordion-title fs-5 sm:fs-4 text-left w-full"
                                  onClick={() => toggleFAQ(index)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      toggleFAQ(index);
                                    }
                                  }}
                                  aria-expanded={isOpen}
                                  aria-controls={`faq-panel-${index}`}
                                >
                                  {faq.question}
                                </a>

                                {/* Keep content always mounted for animation */}
                                <div
                                  id={`faq-panel-${index}`}
                                  ref={(el) => (contentRefs.current[index] = el)}
                                  className="uc-accordion-content mt-2"
                                  aria-hidden={!isOpen}
                                  style={{
                                    // Animation styles:
                                    maxHeight: maxH,
                                    overflow: "hidden",
                                    transition: "max-height 300ms ease, opacity 300ms ease",
                                    opacity: isOpen ? 1 : 0,
                                    // Ensure visible even if your base CSS uses display:none
                                    display: "block",
                                  }}
                                >
                                  <p>{faq.answer}</p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End FAQ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;
