import React from 'react'
import PrintingBanner from '../../components/printing/PrintingBanner'
import PrintingTransformation from '../../components/printing/PrintingTransformation'
import PrintingExperience from '../../components/printing/PrintingExperience'
import PrintingWorkImage from '../../components/printing/PrintingWorkImage'
import PricingSection from '../../components/LogoDesign/PricingSection'
import PrintingTalent from '../../components/printing/PrintingTalent'
import GsapSliderHome from '../../components/Home/GsapSliderHome'
import VideoTestimonial from '../../components/Pricing/VideoTestimonial'
import Cta from '../../components/About/Cta'
import TestimonialSlider from '../../components/Home/TestimonialSlider'
import BlogCards from '../../components/Pricing/BlogCards'
import QuotationForm from '../../components/Home/QuotationForm'


const page = () => {
    return (
        <div>
            <PrintingBanner />
            <PrintingTransformation />
            <PrintingExperience />
            <PrintingWorkImage />
            <PricingSection />
            <PrintingTalent />
            <GsapSliderHome />
            <VideoTestimonial />
            <Cta />
            <TestimonialSlider />
            <BlogCards />
            <QuotationForm />
        </div>
    )
}

export default page
