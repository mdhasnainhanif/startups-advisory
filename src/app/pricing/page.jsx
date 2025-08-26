import PricingBanner from "../../components/Pricing/PricingBanner";
import PricingSection from '../../components/LogoDesign/PricingSection'
import VideoTestimonial from "../../components/Pricing/VideoTestimonial";
import BlogCards from "../../components/Pricing/BlogCards";


const page = () => {
    return (
        <div>
            <PricingBanner />
            <PricingSection />
            <div className="pricingTwo">
                <PricingSection />
            </div>
            <PricingSection />
            <VideoTestimonial />
            <BlogCards/>
        </div>
    );
};

export default page;
