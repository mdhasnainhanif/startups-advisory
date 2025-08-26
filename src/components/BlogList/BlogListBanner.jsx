"use client";

import React from "react";
import Image from "next/image";

const CATEGORIES = [
  "Marketing & SEO",
  "UI/UX Design",
  "SaaS Insights",
  "Business Growth",
  "Tech & Innovation",
];

export default function BlogListBanner() {
  return (
    <section className="blogListBanner">
      <div className="container">
        <div className="row justify-center">
          <div className="col-6 col-md-12 col-sm-12">
            <div className="blogListContent">
              <div className="blogListBorder">
                <span></span>
                <h6>Insights &amp; Strategies for Growth</h6>
              </div>

              <h2 className="blogListHeading">
                Discover Our <span>Latest Blog</span>
              </h2>

              <p className="blogListParagraoh">
                Stay ahead in the digital world with our curated articles, tips,
                and guides. From SEO mastery to UI/UX best practices, our blogs
                are designed to help you learn, innovate, and succeed.
              </p>

              <div className="blogListPage">
                <div className="blogListInput">
                  <input
                    className="blogInputHere"
                    type="text"
                    placeholder=" Search articles, tips, and insights…"
                    autoComplete="off"
                  />
                  <button type="button">
                    Search
                    <span>
                      <Image
                        src="/assets/images/search-icon.svg"
                        alt="Search"
                        width={16}
                        height={16}
                      />
                    </span>
                  </button>
                </div>

                <p className="blogListInputParagraph">
                  Find the content you need in seconds — start typing and
                  explore our blog library
                </p>

                <div className="blogList">
                  {CATEGORIES.map((label) => (
                    <div key={label}>
                      <p>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* /.blogListPage */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
