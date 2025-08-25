"use client";

import Image from "next/image";
import React from "react";

const logos = [
  "logo29.webp", "logo28.webp", "logo27.webp", "logo26.webp", "logo25.webp", "logo24.webp", "logo23.webp", "logo22.webp",
  "logo21.webp", "logo20.webp", "logo19.webp", "logo18.webp", "logo17.webp", "logo16.webp", "logo15.webp", "logo14.webp",
  "logo13.webp", "logo12.webp", "logo11.webp", "logo10.webp", "logo09.webp", "logo08.webp", "logo07.webp",
  "logo06.webp", "logo05.webp", "logo04.webp", "logo03.webp", "logo02.webp", "logo01.webp",
];

const HomeLogoSection = () => {
  return (
    <section className="logo-section section-padding">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={`/assets/images/logos/${logo}`}
              alt={`brand logo ${index + 1}`}
              width={200}
              height={120}
              className="new-logo mx-3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLogoSection;
