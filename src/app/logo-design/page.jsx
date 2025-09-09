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
      title: "Discovery & Positioning",
      desc: "We audit your market and align your brand identity with clear growth objectives.",
      img: "/assets/images/proces-icon-1.svg",
    },
    {
      step: "02",
      title: "Concept Development",
      desc: "Multiple logo directions crafted with precision to reflect your business DNA.",
      img: "/assets/images/proces-icon-2.svg",
    },
    {
      step: "03",
      title: "Refinement & Testing",
      desc: "We validate design concepts for clarity, versatility, and audience recognition.",
      img: "/assets/images/proces-icon-3.svg",
    },
    {
      step: "04",
      title: "Multi-Channel Readiness",
      desc: "Logos are optimized for digital, print, and every channel your business touches.",
      img: "/assets/images/proces-icon-4.svg",
    },
    {
      step: "05",
      title: "Final Delivery & Assets",
      desc: "Receive a complete, scalable system with guidelines to ensure long-term brand consistency.",
      img: "/assets/images/proces-icon-5.svg",
    },
  ];
  const logoTabsData = [
  {
    key: "positioning-strategy",
    number: "01",
    buttonLabel: "Mascot Logo",
    heading: "Mascot Logo",
    paragraphs: [
      "We create mascots that embody your brand personality and build emotional connections with customers. Perfect for companies seeking high memorability.",
    ],
    img: "/assets/images/mascot_logo.png",
    imgAlt: "Mascot Logo",
  },
  {
    key: "brand-audit",
    number: "02",
    buttonLabel: "Word Mark Logo",
    heading: "Word Mark Logo",
    paragraphs: [
      "Clean, powerful wordmarks that emphasize your name with authority. Ideal for B2B brands looking to cement trust and recognition.",
    ],
    img: "/assets/images/word_mark_logo.png",
    imgAlt: "Word Mark Logo",
  },
  {
    key: "visual-identity",
    number: "03",
    buttonLabel: "Abstract Logo",
    heading: "Abstract Logo",
    paragraphs: [
      "Distinctive marks that capture your essence without being literal. Designed for global scalability and timeless impact.",
    ],
    img: "/assets/images/abstract_logo.png",
    imgAlt: "Abstract Logo",
  },
  {
    key: "messaging",
    number: "04",
    buttonLabel: "Emblem Logo",
    heading: "Emblem Logo",
    paragraphs: [
      "Heritage-inspired designs that communicate authority, credibility, and prestige. Suited for industries where tradition and trust matter most.",
    ],
    img: "/assets/images/emblem_logo.png",
    imgAlt: "Emblem Logo",
  },
];
  
  return (
    <div>
      <LogoDesignBanner/>
      <LogoDesignAiPowered/>
        <LogoDesignTabs
      tag="What We Offer"
      heading="End-to-end branding"
      highlight="Tailored Solutions"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      buttonText="Claim Your Free Strategy Session"
      tabsData={logoTabsData}
    />
      <PortofolioSection/>
      <DevelopmentComparison/>
      <MarketingSection
  tag="AI Powered Growth"
  heading="Generic Logos Won’t Deliver"
  highlight="ROI."
  subheading="Here’s Why."
  cards={[
    {
      title: "Custom work will take time",
      description: "Custom work requires time — but without strategy, even polished visuals fail to win market share or deliver measurable impact.",
    },
    {
      title: "AI can’t think for your business",
      description: [
        "AI templates alone can’t build authority. Only professional design rooted in market context creates a brand buyers trust.",
      ],
    },
  ]}
  secondaryCard={{
    title: "Custom work needs skilled humans",
    description: [
      "Logos must combine creativity with strategy. Our team blends AI efficiency with human expertise to deliver brand assets that pay back.",
    ],
  }}
  buttonText="Let the magician handle the magic"
/>

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
