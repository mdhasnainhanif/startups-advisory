import AboutBanner from "../../components/About/AboutBanner";
import AboutCards from "../../components/About/AboutCards";
import Counter from "../../components/About/Counter";
import Cta from "../../components/About/Cta";
import OurTeam from "../../components/Home/OurTeam";
import QuotationForm from "../../components/Home/QuotationForm";
import TestimonialSlider from "../../components/Home/TestimonialSlider";


const page = () => {
  return (
    <div>
      <AboutBanner />
      <Counter />
      <AboutCards />
      <Cta/>
      <TestimonialSlider/>
      <OurTeam/>
      <QuotationForm/>
    </div>
  );
};

export default page;
