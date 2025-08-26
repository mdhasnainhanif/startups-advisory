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
      <GsapSliderHome/>
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
