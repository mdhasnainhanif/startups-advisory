// ContactUs.jsx
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div
      id="overview"
      className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3"
    >
      <div
        className="position-cover opacity-70 bg-cover"
        style={{ backgroundPosition: "50% 85%" }}
      >
        <Image
          src="/assets/images/Image_1.jpg"
          alt="About Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="position-cover bg-gradient-to-t via-transparent to-gray-900"></div>

      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      ></div>

      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      ></div>

      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      ></div>

      <div
        className="section-outer panel pt-9 xl:pt-10"
        style={{ paddingBottom: "300px" }}
      >
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
            <div className="row banner mb-6 text-center">
              <div>
                <div
                  className="panel vstack gap-3 px-2 lg:px-0"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="cstack gap-1 py-1 px-2 border rounded-pill heading-border"
                    style={{ placeSelf: "center" }}
                  >
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400 heading-dot"></span>
                    <span className="fs-8 fw-bold text-uppercase">
                      Contact Us
                    </span>
                  </div>

                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-5 m-0 text-black banner-heading">
                    Start something great together.
                  </h1>

                  <p className="fs-5 xl:fs-4 text-black dark:text-black md:d-block text-center">
                    Have a project in mind or a question for our team? We’re
                    always excited to connect. Fill out the form or reach out
                    directly — and let’s turn your ideas into action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
