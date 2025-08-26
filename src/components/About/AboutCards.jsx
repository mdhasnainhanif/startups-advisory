import React from "react";

const AboutCards = () => {
  return (
    <div id="main_features cout-section" className="key-features section overflow-hidden section-padding pt-0">
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 xl:gap-3 mb-4 xl:mb-4 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="vstack items-center gap-2 xl:gap-3 text-center"
                data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="cstack gap-1 py-1 px-3 border rounded-pill heading-border">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary heading-dot"></span>
                  <span className="fs-8 fw-bold text-uppercase">Our Values</span>
                </div>
                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                  What
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Drives
                  </span>
                  Us Every Day
                </p>
              </div>
            </div>

            <div className="row justify-center gap-2 dataMainCard">
              <div className="datDevCard-spacing">
                <div className="developementCard datDevCard">
                  <img src="assets/images/cout-card-01.svg" className="datDevCard-icon mb-4" alt="" />
                  <h4 className="cout-heading">Goal-Driven Transparency</h4>
                  <p className="cout-paragraph">
                    We believe in open, honest communication aimed at achieving your goals. You’ll always know what we’re.
                  </p>
                  <button className="cout-button">Explore</button>
                </div>
              </div>

              <div className="datDevCard-spacing">
                <div className="developementCard datDevCard">
                  <img src="assets/images/cout-card-02.svg" className="datDevCard-icon mb-4" alt="" />
                  <h4 className="cout-heading">Creativity with Purpose</h4>
                  <p className="cout-paragraph">
                    We believe in open, honest communication aimed at achieving your goals. You’ll always know what we’re.
                  </p>
                  <button className="cout-button">Explore</button>
                </div>
              </div>

              <div className="datDevCard-spacing">
                <div className="developementCard datDevCard">
                  <img src="assets/images/cout-card-03.svg" className="datDevCard-icon mb-4" alt="" />
                  <h4 className="cout-heading">Collaboration First</h4>
                  <p className="cout-paragraph">
                    We believe in open, honest communication aimed at achieving your goals. You’ll always know what we’re.
                  </p>
                  <button className="cout-button">Explore</button>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
