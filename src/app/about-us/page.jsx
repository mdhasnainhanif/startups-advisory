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

      <Counter
        tag="Our Achievements"
        heading="Tailored Solutions for Every Stage of Growth"
        description="We partner with businesses to transform challenges into opportunities through strategy, design, and technology."
        stats={[
          { prefix: "+", value: "150", label: "Successful Projects" },
          { value: "98", suffix: "%", label: "Client Satisfaction Rate" },
          { prefix: "+", value: "10", label: "Years of Experience" },
          { value: "24/7", animate: false, label: "Support & Collaboration" },
        ]}
      />

      <AboutCards />

      <Cta
      tag="Let’s Build Something Extraordinary"
      heading="Strategy, "
      highlight="Design &"
      afterHighlight="Innovation"
      description="We are a future-forward team of creatives, strategists, and technologists who believe in building brands that inspire, connect, and perform. With a focus on purpose-driven storytelling and intelligent design, we help businesses shape identities that go beyond trends and build lasting impact."
      buttonText="Start Your Free Consultation"
    />

      <TestimonialSlider />
      <OurTeam />

      {/* Custom data for quotation + FAQ */}
      <QuotationForm
        heading="Get a Quote Now"
        subHeading="Get in Touch"
        description="Need help with your next project? Fill out this form and our team will get back to you shortly."
        faqs={[
            {
              question: "Who do you work with—startups or established businesses?",
              answer:
                "Both. We partner with solopreneurs who need a reliable growth partner, as well as enterprises looking to scale with speed, strategy, and impact.",
            },
            {
              question: "How are you different from traditional agencies?",
              answer:
                "We blend human creativity with AI-powered efficiency. That means faster turnaround times, cost-effective solutions, and strategies designed to actually convert.",
            },
            {
              question: "Do I need to be tech-savvy to work with you?",
              answer:
                "Not at all. Whether you’re a founder with no tech background or a corporate team with in-house developers, we adapt to your level and simplify the process.",
            },
            {
              question: "What industries do you specialize in?",
              answer:
                "We’re industry-agnostic. From SaaS startups to retail, consulting firms to creators—we’ve delivered successful projects across 20+ verticals.",
            },
            {
              question: "How quickly can you start on a project?",
              answer:
                "Most engagements kick off within 1–2 weeks after alignment on scope. For urgent projects, we can accelerate timelines with our flexible team structure.",
            },
            {
              question: "Do you only provide strategy, or do you also execute?",
              answer:
                "We do both. From high-level brand strategy to hands-on design, development, and marketing execution—we stay with you until results are delivered.",
            },
            {
              question: "How do you ensure collaboration with my team?",
              answer:
                "We work as your extended team. Regular check-ins, transparent reporting, and dedicated account managers ensure smooth communication and alignment.",
            },
            {
              question: "Are your solutions affordable for solopreneurs?",
              answer:
                "Yes. We design flexible packages so founders can access professional-grade strategy, design, and tech support without enterprise-level costs.",
            },
            {
              question: "Can you handle large-scale, enterprise-level projects?",
              answer:
                "Absolutely. Our team structure allows us to scale talent and resources quickly to meet complex, multi-channel enterprise demands.",
            },
            {
              question: "What’s the best way to get started?",
              answer:
                "Book a free strategy session with us. We’ll understand your goals, assess your needs, and map a roadmap—whether you’re a one-person startup or a global team.",
            },
          ]}
      />
    </div>
  );
};

export default page;
