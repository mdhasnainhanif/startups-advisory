"use client";

import React from "react";

export default function PricingSection() {
  return (
    <section className="pricingSection section-padding">
      <div className="container">
        <div className="row justify-center">
          <div className="col-7">
            <div className="pricingHeading">
              <div
                className="cstack gap-1 py-1 px-3 border rounded-pill"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
              >
                <span
                  className="d-inline-block w-4px h-4px rounded-circle"
                  style={{ backgroundColor: "#0FDAC2" }}
                ></span>
                <span className="fs-8 fw-bold text-uppercase text-white">
                  Transparent Plans, No Surprises
                </span>
              </div>

              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-white text-center">
                Flexible Pricing for
                <span
                  className="d-inline-flex px-1 text-dark -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5"
                  style={{ backgroundColor: "#0FDAC2" }}
                >
                  Every Growth Stage
                </span>
              </p>
            </div>
          </div>

          <div className="row mt-6">
            <div className="col-12">
              <div className="pricingCardsMain">
                {/* Card 1 */}
                <div className="pricingCardOne">
                  <div className="pricingCardContent">
                    <img src="assets/images/pricing_icon_card-01.svg" alt="Basic plan icon" />
                    <h3>Basic</h3>
                    <p>Purchase Our Basic Plan</p>
                    <h1>
                      <sup>$</sup>39<sub>Monthly</sub>
                    </h1>
                    <p>
                      Essential features for individuals or small teams, limited support.
                    </p>
                  </div>

                  <div className="pricingPakage">
                    <h5>What’s included</h5>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Custom Themes
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Mobile-Optimized Design
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Secure Hosting
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-01.svg" alt="" /></span>
                      Basic Analytics
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-02.svg" alt="" /></span>
                      Priority Support
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-02.svg" alt="" /></span>
                      API Access
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-02.svg" alt="" /></span>
                      Advanced Integrations
                    </p>

                    <button className="button-green mt-2">Get Started</button>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="pricingCardOne">
                  <div className="pricingCardContentTwo">
                    <img src="assets/images/pricing_icon_card-02.svg" alt="Standard plan icon" />
                    <h3>Basic</h3>
                    <p>Purchase Our Basic Plan</p>
                    <h1>
                      <sup>$</sup>39<sub>Monthly</sub>
                    </h1>
                    <p>
                      Essential features for individuals or small teams, limited support.
                    </p>
                  </div>

                  <div className="pricingPakage">
                    <h5>What’s included</h5>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Custom Themes
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Mobile-Optimized Design
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Secure Hosting
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Secure Hosting
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-01.svg" alt="" /></span>
                      Basic Analytics
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-01.svg" alt="" /></span>
                      Priority Support
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-02.svg" alt="" /></span>
                      Priority Support
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-02.svg" alt="" /></span>
                      API Access
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-02.svg" alt="" /></span>
                      Advanced Integrations
                    </p>

                    <button className="button-green mt-2">Get Started</button>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="pricingCardOne">
                  <div className="pricingCardContentThree">
                    <img src="assets/images/pricing_icon_card-02.svg" alt="Pro plan icon" />
                    <h3>Basic</h3>
                    <p>Purchase Our Basic Plan</p>
                    <h1>
                      <sup>$</sup>39<sub className="text-light">Monthly</sub>
                    </h1>
                    <p>
                      Essential features for individuals or small teams, limited support.
                    </p>
                  </div>

                  <div className="pricingPakage">
                    <h5>What’s included</h5>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Custom Themes
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Theme Personalization
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Mobile-Optimized Design
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Secure Hosting
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Basic Analytics
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      Priority Support
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_right.svg" alt="" /></span>
                      API Access
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-01.svg" alt="" /></span>
                      Advanced Integrations
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-01.svg" alt="" /></span>
                      Unlimited projects
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-01.svg" alt="" /></span>
                      Priority email &amp; chat support
                    </p>
                    <p>
                      <span><img src="assets/images/pricing_icon-01.svg" alt="" /></span>
                      Advanced analytics &amp; reporting
                    </p>

                    <button className="button-green mt-2">Get Started</button>
                  </div>
                </div>
                {/* /Card 3 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
