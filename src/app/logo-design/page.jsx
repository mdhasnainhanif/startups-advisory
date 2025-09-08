import LogoDesignTabs from '../../components/LogoDesign/LogoDesignTabs'
import LogoDesignAiPowered from '../../components/LogoDesign/LogoDesignAiPowered'
import LogoDesignBanner from '../../components/LogoDesign/LogoDesignBanner'
import React from 'react'
import PortofolioSection from '../../components/LogoDesign/PortofolioSection'
import DevelopmentComparison from '../../components/LogoDesign/DevelopmentComparison'
import MarketingSection from '../../components/LogoDesign/MarketingSection'
import PricingSection from '../../components/LogoDesign/PricingSection'
import LogosLogoDesign from '../../components/LogoDesign/LogosLogoDesign'
import BrandingSection from '../../components/LogoDesign/BrandingSection'
import TeamSlider from '../../components/LogoDesign/TeamSlider'
import GsapSliderHome from '../../components/Home/GsapSliderHome'
import TestimonialSlider from '../../components/Home/TestimonialSlider'
import Cta from '../../components/About/Cta'
import VideoTestimonial from '../../components/Pricing/VideoTestimonial'
import BlogCards from '../../components/Pricing/BlogCards'
import QuotationForm from '../../components/Home/QuotationForm'

const page = () => {
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
    <div>
      <LogoDesignBanner/>
      <LogoDesignAiPowered/>
      <LogoDesignTabs/>
      <PortofolioSection/>
      <DevelopmentComparison/>
      <MarketingSection/>
      <PricingSection/>
      <LogosLogoDesign/>
      <BrandingSection/>
      <TeamSlider/>
      <GsapSliderHome heading="BowTie Campaign Lifecycle" subHeading="What We Offer" cards={timelineCards} />
      <TestimonialSlider/>
      <div style={{marginTop: "4rem"}}>
      <Cta/>
      </div>
      <VideoTestimonial/>
      <BlogCards props={"paddingTopZero"}/>
      <QuotationForm/>
    </div>
  )
}

export default page
