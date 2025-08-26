import TraditionalWebsite from '../../components/StaffAugmentation/TraditionalWebsite'
import StaffAugmentationBanner from '../../components/StaffAugmentation/StaffAugmentationBanner'
import React from 'react'
import Cta from '../../components/About/Cta'
import TeamSection from '../../components/StaffAugmentation/TeamSection'
import DevelopmentComparison from '../../components/LogoDesign/DevelopmentComparison'
import MarketingSection from '../../components/LogoDesign/MarketingSection'
import PricingSection from '../../components/LogoDesign/PricingSection'
import TeamSlider from '../../components/LogoDesign/TeamSlider'

const page = () => {
  return (
    <div>
      <StaffAugmentationBanner/>
      <TraditionalWebsite/>
      <Cta props={"marginBottomZero"}/>
      <TeamSection/>
      <DevelopmentComparison />
      <MarketingSection/>
      <PricingSection/>
      <TeamSlider/>
    </div>
  )
}

export default page
