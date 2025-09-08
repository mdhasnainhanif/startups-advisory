"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const QuotationForm = ({
  heading = "Get a Quote Now",
  subHeading = "Contact Us",
  description = "Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.",
  faqs=[
            {
              question: "Who do you work with—startups or established businesses?",
              answer:
                "Both. We partner with solopreneurs who need a reliable growth partner, as well as enterprises looking to scale with speed, strategy, and impact.",
            },
            {
              question: "How are you different from traditional agencies?",
              answer:
                "We blend human creativity with AI-powered efficiency. That means faster turnaround times, cost-effective solutions, and strategies designed to actually convert.",
            },
            {
              question: "Do I need to be tech-savvy to work with you?",
              answer:
                "Not at all. Whether you’re a founder with no tech background or a corporate team with in-house developers, we adapt to your level and simplify the process.",
            },
            {
              question: "What industries do you specialize in?",
              answer:
                "We’re industry-agnostic. From SaaS startups to retail, consulting firms to creators—we’ve delivered successful projects across 20+ verticals.",
            },
            {
              question: "How quickly can you start on a project?",
              answer:
                "Most engagements kick off within 1–2 weeks after alignment on scope. For urgent projects, we can accelerate timelines with our flexible team structure.",
            },
            {
              question: "Do you only provide strategy, or do you also execute?",
              answer:
                "We do both. From high-level brand strategy to hands-on design, development, and marketing execution—we stay with you until results are delivered.",
            },
            {
              question: "How do you ensure collaboration with my team?",
              answer:
                "We work as your extended team. Regular check-ins, transparent reporting, and dedicated account managers ensure smooth communication and alignment.",
            },
            {
              question: "Are your solutions affordable for solopreneurs?",
              answer:
                "Yes. We design flexible packages so founders can access professional-grade strategy, design, and tech support without enterprise-level costs.",
            },
            {
              question: "Can you handle large-scale, enterprise-level projects?",
              answer:
                "Absolutely. Our team structure allows us to scale talent and resources quickly to meet complex, multi-channel enterprise demands.",
            },
            {
              question: "What’s the best way to get started?",
              answer:
                "Book a free strategy session with us. We’ll understand your goals, assess your needs, and map a roadmap—whether you’re a one-person startup or a global team.",
            },
          ],
}) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState([]);
  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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
  }, [faqs]);

  return (
    <div
      id="hero_header"
      className={`hero-header section panel overflow-hidden section-padding ${
        isContactPage ? "contactBanner" : ""
      }`}
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
                  <span className="fs-8 fw-bold text-uppercase">{subHeading}</span>
                </div>
                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                  {heading.split(" ").map((word, i) =>
                    i === 2 ? (
                      <span
                        key={i}
                        className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                      >
                        {word}
                      </span>
                    ) : (
                      ` ${word} `
                    )
                  )}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="row d-flex flex-row h-100 ipad-gap">
              {/* Form */}
              <div className="col-12 lg:col-6">
                <form className="h-100 vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20">
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                    {description}
                  </p>
                  <div className="row child-cols-12 md:child-cols-6 g-2">
                    <div>
                      <input className="form-control h-48px w-full" type="text" placeholder="Full name" required />
                    </div>
                    <div>
                      <input className="form-control h-48px w-full" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  <input id="phone-number" className="form-control h-48px w-100" type="tel" placeholder="Phone number" required />
                  <input className="form-control h-48px w-full" type="text" placeholder="Subject" />
                  <textarea className="form-control min-h-150px w-full" placeholder="Your message.." required></textarea>
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
                        <ul className="uc-accordion">
                          {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const maxH = isOpen && heights[index] ? `${heights[index]}px` : "0px";
                            return (
                              <li key={index} className={`faq-item in-view ${isOpen ? "uc-open" : ""}`}>
                                <a
                                  role="button"
                                  tabIndex={0}
                                  className="uc-accordion-title fs-5 sm:fs-4 text-left w-full"
                                  onClick={() => toggleFAQ(index)}
                                  aria-expanded={isOpen}
                                  aria-controls={`faq-panel-${index}`}
                                >
                                  {faq.question}
                                </a>
                                <div
                                  id={`faq-panel-${index}`}
                                  ref={(el) => (contentRefs.current[index] = el)}
                                  className="uc-accordion-content mt-2"
                                  aria-hidden={!isOpen}
                                  style={{
                                    maxHeight: maxH,
                                    overflow: "hidden",
                                    transition: "max-height 300ms ease, opacity 300ms ease",
                                    opacity: isOpen ? 1 : 0,
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
