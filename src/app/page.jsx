import Image from "next/image";
import styles from "./page.module.css";
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
  return (
   <>
    <HomeBanner/>
    <HomeLogoSection/>
    <HomeSolutionsSection/> 
    <WhyChooseCard/>
    <WhatWeOffer/>
    <GsapSliderHome/>
    <TestimonialSlider/>
    <OurTeam/>
    <QuotationForm/>
   </> 
  );
}
