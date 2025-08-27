"use client";
import Image from "next/image";
import React from "react";
import { useModal } from "../../hooks/useModal";

export default function BrandingSection() {
  const openModal = useModal((state) => state.openModal);
  return (
    <div
      id="main_features"
      className="key-features section overflow-hidden section-padding"
    >
      <div className="section-outer">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div className="row items-center brand-ipad-pro">
              <div className="brand-tab-content">
                <div className="cstack gap-1 py-1 px-3 border rounded-pill w_fit">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                  <span className="fs-8 fw-bold text-uppercase">How We Help</span>
                </div>

                <p
                  className="h3 lg:h2 xl:h1 m-0 text-black font-size-on-ipad"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  Branding Isn’t A Logo.It’s How
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    The World Sees
                  </span>
                  And Trusts You.
                </p>

                <p className="brand-tabs-pargraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                </p>

                <p className="brand-tabs-pargraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                </p>

                <a
                  className="button-green mt-2 open-modal-btn"
                  onClick={openModal}
                >
                  Claim Your Free Strategy Session
                </a>
              </div>

              <div className="brand-tab-image">
                <Image
                  className="w-100"
                  src="/assets/images/how-we-help.png"
                  alt="How we help"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
