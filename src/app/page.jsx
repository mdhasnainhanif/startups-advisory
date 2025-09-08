import HomeBanner from "../components/Home/HomeBanner";
import HomeLogoSection from "../components/Home/HomeLogoSection";
import HomeSolutionsSection from "../components/Home/HomeSolutionCard";
import WhyChooseCard from "../components/Home/WhyChooseCard";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import OurTeam from "../components/Home/OurTeam";
import QuotationForm from "../components/Home/QuotationForm";
import GsapSliderHome from "../components/Home/GsapSliderHome";

export default function Home() {
  const services = [
    {
      img: "assets/images/services-image-1.jpg",
      title: "Affordable Marketing That Works",
      desc: "Strategies designed for solopreneurs who want results without wasted spend.",
      points: [
        "Simple Brand Audits",
        "Customer Insights",
        "Growth Roadmaps"
      ],
    },
    {
      img: "assets/images/services-image-2.jpg",
      title: "Websites Made Simple",
      desc: "Professional sites that do the hard work for you — without the complexity.",
      points: ["Logo & Branding Kits", "Responsive Websites", "Conversion-Ready Pages"],
    },
    {
      img: "assets/images/services-image-3.png",
      title: "Your Brand, Your Personality",
      desc: "We craft visuals and messaging that feel authentic and attract your audience.",
      points: ["Colors & Fonts", "Paid Ads Management", "Email Marketing"],
    },
    {
      img: "assets/images/services-image-4.jpg",
      title: "Flexible Talent Support",
      desc: "Get help when you need it, without the stress of hiring full-time.",
      points: ["Designers On-Demand", "Quick Project Support", "Affordable Expertise"],
    },
  ];

  const timelineCards = [
    {
      step: "01",
      title: "Clarify Your Vision",
      desc: "We uncover what matters most to you and your business goals.",
      img: "/assets/images/proces-icon-1.svg",
    },
    {
      step: "02",
      title: "Build Your Foundation",
      desc: "From logos to websites, we create the essentials to get you moving fast.",
      img: "/assets/images/proces-icon-2.svg",
    },
    {
      step: "03",
      title: "Launch With Confidence",
      desc: "We put your brand out into the world looking polished and professional.",
      img: "/assets/images/proces-icon-3.svg",
    },
    {
      step: "04",
      title: "Stay Visible",
      desc: "Your brand stays consistent across every platform so customers recognize you.",
      img: "/assets/images/proces-icon-4.svg",
    },
    {
      step: "05",
      title: "Grow Without Burnout",
      desc: "As you scale, we provide support that saves time and keeps you focused.",
      img: "/assets/images/proces-icon-5.svg",
    },
  ];

  return (
    <>
      <HomeBanner />
      <HomeLogoSection />
      <HomeSolutionsSection />
      <WhyChooseCard />

      {/* ✅ Pass custom service data */}
      <WhatWeOffer heading="Core Services For Startups" subHeading="What We Offer" cards={services} />

      {/* ✅ Pass timeline data */}
      <GsapSliderHome heading="BowTie Campaign Lifecycle" subHeading="What We Offer" cards={timelineCards} />

      <TestimonialSlider />
      <OurTeam />
      <QuotationForm />
    </>
  );
}
