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
    </div>
  )
}

export default page
