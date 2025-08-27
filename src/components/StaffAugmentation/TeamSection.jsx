"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "../../hooks/useModal";

const DEFAULT_SOCIALS = [
  "/assets/images/team-social-icon-01.svg",
  "/assets/images/team-social-icon-02.svg",
  "/assets/images/team-social-icon-03.svg",
  "/assets/images/team-social-icon-04.svg",
];

const TEAM = [
  { name: "Mark Zellers", role: "Founder & CEO", img: "/assets/images/team-01.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
  { name: "John Zellers", role: "Co-Founder", img: "/assets/images/team-02.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
  { name: "Kim Yun Son", role: "Engineering Manager", img: "/assets/images/team-03.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
  { name: "André Garcia", role: "Product Manager", img: "/assets/images/team-04.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
  { name: "Peter Lary", role: "UX Researcher", img: "/assets/images/team-05.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
  { name: "Henry Matt", role: "Customer Success", img: "/assets/images/team-06.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
  { name: "Natalia", role: "Lead of fun", img: "/assets/images/team-07.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
  { name: "Larry", role: "Director of Joy", img: "/assets/images/team-08.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", socials: DEFAULT_SOCIALS },
];

export default function TeamSection() {
  const openModal = useModal((state) => state.openModal);
  return (
    <div id="about-team" className="about-team section panel overflow-hidden section-padding">
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime='onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});'
            >
              {/* Heading */}
              <div
                className="heading vstack gap-2 panel max-w-700px mx-auto text-center"
                data-anime='onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});'
              >
                <div className="cstack gap-1 py-1 px-3 border rounded-pill" style={{ width: "fit-content", margin: "0 auto" }}>
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                  <span className="fs-8 fw-bold text-uppercase">We&apos;re hiring</span>
                </div>

                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                  Meet{" "}
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Our Team
                  </span>
                </p>

                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers
                  you to do your best work.
                </p>
              </div>

              {/* Grid */}
              <div className="content panel">
                <div
                  className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-6"
                  data-anime='onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});'
                >
                  {TEAM.map((m) => (
                    <div className="teams" key={m.name}>
                      <div className="panel vstack items-center gap-2 text-center">
                        <Image
                          className="rounded-circle border border-secondary-600 staff-image"
                          src={m.img}
                          alt={m.name}
                          width={160}
                          height={160}
                        />
                        <div className="panel vstack items-center gap-0 staff-content">
                          <h6 className="h6 lg:h5 m-0">{m.name}</h6>
                          <span className="fs-7 lg:fs-6 opacity-70" style={{ color: "#643BFF" }}>
                            {m.role}
                          </span>
                          <p>{m.desc}</p>
                          <div className="team-social-icons mt-2">
                            {m.socials?.map((icon, i) => (
                              <Image key={i} src={icon} alt="social" width={20} height={20} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a className="button-green mt-4 open-modal-btn" onClick={openModal}>
                Claim Your Free Strategy Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
