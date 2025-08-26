import ContactBanner from "../../components/ContactUs/ContactBanner";
import QuotationForm from "../../components/Home/QuotationForm";
import ContactDetail from "../../components/ContactUs/ContactDetail";
import HomeLogoSection from "../../components/Home/HomeLogoSection";


const page = () => {
    return (
        <div>
            <ContactBanner />
            <QuotationForm />
            <ContactDetail />
            <HomeLogoSection />

        </div>
    );
};

export default page;
