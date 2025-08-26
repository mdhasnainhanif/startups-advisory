// src/components/Blog.jsx
import React from "react";

const blogData = [
    {
        img: "assets/images/blog-01.webp",
        category: "Blog Category",
        date: "01/01/2025",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        link: "blog.php",
    },
    {
        img: "assets/images/blog-02.webp",
        category: "Blog Category",
        date: "01/01/2025",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        link: "blog.php",
    },
    {
        img: "assets/images/blog-03.webp",
        category: "Blog Category",
        date: "01/01/2025",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        link: "blog.php",
    },
];

const BlogCard = ({ img, category, date, title, desc, link }) => (
    <div className="blog-cards">
        <div className="blog-image">
            <img className="w-100" src={img} alt={title} />
        </div>
        <div className="blog-content">
            <div className="blog-category">
                <h4 className="blog-category-heading" style={{ borderRight: "2px solid #939393" }}>
                    {category}
                </h4>
                <h4 className="blog-category-heading">{date}</h4>
            </div>
            <div className="blog-sub-content">
                <h2 className="blog-content-heading">{title}</h2>
                <p className="blog-content-paragraph">{desc}</p>
            </div>
        </div>
        <div>
            <a className="button-green mt-2" href={link}>
                Read More
            </a>
        </div>
    </div>
);

const BlogCards = (props) => {
    console.log(props);
    return (
        <div className={`container section-padding ${props.props === "paddingTopZero" ? "pt-0" : ""}`}>
            {/* Header */}
            <div className="row">
                <div className="vstack items-center gap-2 lg:gap-4 max-w-750px mx-auto text-center">
                    <div
                        className="panel vstack items-center gap-2 xl:gap-3 text-center"
                        data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                            <span className="d-inline-block w-4px h-4px rounded-circle bg-primary"></span>
                            <span className="fs-8 fw-bold text-uppercase">Our Blogs</span>
                        </div>
                        <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                            Actionable ideas and thought{" "}
                            <span className="d-inline-flex px-1 bg-primary text-white -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                                leadership on
                            </span>{" "}
                            branding.
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Cards */}
            <div className="row mt-4 gap-2 justify-center">
                <div className="blogCardMain">
                    {blogData.map((item, index) => (
                        <BlogCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCards;
