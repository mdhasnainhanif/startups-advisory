import React from 'react'
import WebsiteDevelopmentBanner from '../../components/WebsiteDevelopment/WebsiteDevelopmentBanner'
import WebsiteDevelopmentTraditional from '../../components/WebsiteDevelopment/WebsiteDevelopmentTraditional'
import LogoDesignTabs from '../../components/LogoDesign/LogoDesignTabs'
import DigitalMarketingSection from '../../components/WebsiteDevelopment/DigitalMarketingSection'
import WebsiteSmarterLogo from '../../components/WebsiteDevelopment/WebsiteSmarterLogo'
import WebsiteBusinessesAi from '../../components/WebsiteDevelopment/WebsiteBusinessesAi'
import WebsiteBuildOnlineSuccess from '../../components/WebsiteDevelopment/WebsiteBuildOnlineSuccess'
import WebsiteSolutionsCards from '../../components/WebsiteDevelopment/WebsiteSolutionsCards'
import DevelopmentComparison from '../../components/LogoDesign/DevelopmentComparison'
import MarketingSection from '../../components/LogoDesign/MarketingSection'
import PricingSection from '../../components/LogoDesign/PricingSection'
import WebsiteIntegration from '../../components/WebsiteDevelopment/WebsiteIntegration'
import GsapSliderHome from '../../components/Home/GsapSliderHome'
import TestimonialSlider from '../../components/Home/TestimonialSlider'
import VideoTestimonial from '../../components/Pricing/VideoTestimonial'
import BlogCards from '../../components/Pricing/BlogCards'
import QuotationForm from '../../components/Home/QuotationForm'


const page = () => {
    return (
        <div>
            <WebsiteDevelopmentBanner />
            <WebsiteDevelopmentTraditional />
            <LogoDesignTabs />
            <DigitalMarketingSection />
            <WebsiteSmarterLogo />
            <WebsiteBusinessesAi />
            <WebsiteBuildOnlineSuccess />
            <WebsiteSolutionsCards />
            <DevelopmentComparison />
            <MarketingSection />
            <PricingSection />
            <WebsiteIntegration />
            <GsapSliderHome />
            <TestimonialSlider />
            <VideoTestimonial />
            <BlogCards />
            <QuotationForm />
        </div>
    )
}

export default page
