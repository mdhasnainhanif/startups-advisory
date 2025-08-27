"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "../../hooks/useModal";

const teamMembers = [
  {
    name: "Mark Zellers",
    role: "Founder & CEO",
    avatar: "/assets/images/team-01.jpg",
  },
  {
    name: "John Zellers",
    role: "Co-Founder",
    avatar: "/assets/images/team-02.jpg",
  },
  {
    name: "Kim Yun Son",
    role: "Engineering Manager",
    avatar: "/assets/images/team-03.jpg",
  },
  {
    name: "André Garcia",
    role: "Product Manager",
    avatar: "/assets/images/team-04.jpg",
  },
  {
    name: "Peter Lary",
    role: "UX Researcher",
    avatar: "/assets/images/team-05.jpg",
  },
  {
    name: "Henry Matt",
    role: "Customer Success",
    avatar: "/assets/images/team-06.jpg",
  },
  {
    name: "Natalia",
    role: "Lead of fun",
    avatar: "/assets/images/team-07.jpg",
  },
  {
    name: "Larry",
    role: "Director of Joy",
    avatar: "/assets/images/team-08.jpg",
  },
];

const OurTeam = () => {
  const openModal = useModal((state) => state.openModal);
  return (
    <div id="about-team" className="about-team section panel overflow-hidden section-padding">
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8">
              {/* Heading */}
              <div className="heading vstack gap-2 panel max-w-700px mx-auto text-center">
                <div className="cstack gap-1 py-1 px-3 border rounded-pill" style={{ width: "fit-content", margin: "0 auto" }}>
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                  <span className="fs-8 fw-bold text-uppercase">We're hiring</span>
                </div>
                <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                  Meet{" "}
                  <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    Our
                  </span>{" "}
                  Team
                </p>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that
                  empowers you to do your best work.
                </p>
              </div>

              {/* Team Grid */}
              <div className="content panel">
                <div className="row child-cols-6 sm:child-cols-4 lg:child-cols-3 col-match gx-2 gy-6">
                  {teamMembers.map((member, i) => (
                    <div className="teams" key={i}>
                      <div className="panel vstack items-center gap-2 text-center">
                        <Image
                          className="w-72px lg:w-96px h-72px lg:h-96px rounded-circle border border-secondary-600"
                          src={member.avatar}
                          alt={member.name}
                          width={96}
                          height={96}
                        />
                        <div className="panel vstack items-center gap-0">
                          <h6 className="h6 lg:h5 m-0">{member.name}</h6>
                          <span className="fs-7 lg:fs-6 opacity-70">{member.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className="button-Purple open-modal-btn"
                onClick={openModal}
              >
                Claim Your Free Strategy Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
