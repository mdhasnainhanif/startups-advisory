import TraditionalWebsite from '../../components/StaffAugmentation/TraditionalWebsite'
import StaffAugmentationBanner from '../../components/StaffAugmentation/StaffAugmentationBanner'
import React from 'react'
import Cta from '../../components/About/Cta'
import TeamSection from '../../components/StaffAugmentation/TeamSection'
import DevelopmentComparison from '../../components/LogoDesign/DevelopmentComparison'
import MarketingSection from '../../components/LogoDesign/MarketingSection'
import PricingSection from '../../components/LogoDesign/PricingSection'
import TeamSlider from '../../components/LogoDesign/TeamSlider'
import WebsiteIntegration from '../../components/WebsiteDevelopment/WebsiteIntegration'
import LogoProcess from '../../components/StaffAugmentation/LogoProcess'
import GsapSliderHome from '../../components/Home/GsapSliderHome'
import VideoTestimonial from '../../components/Pricing/VideoTestimonial'
import TestimonialSlider from '../../components/Home/TestimonialSlider'
import BlogCards from '../../components/Pricing/BlogCards'
import QuotationForm from '../../components/Home/QuotationForm'

const page = () => {
  return (
    <div>
      <StaffAugmentationBanner/>
      <TraditionalWebsite/>
      <Cta props={"marginBottomZero"}/>
      <TeamSection/>
      <WebsiteIntegration/>
      <DevelopmentComparison />
      <MarketingSection/>
      <PricingSection/>
      <TeamSlider/>
      <LogoProcess/>
      <GsapSliderHome/>
      <div className='videoTestimonialStaff'>
      <VideoTestimonial/>
      </div>
      <TestimonialSlider/>
      <BlogCards/>
      <QuotationForm/>
    </div>
  )
}

export default page
