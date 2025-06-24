import FaqSection from '../components/FaqSection';
import Features from '../components/Features';
import FreeTrialBanner from '../components/FreeTrialBanner';
import Hero from '../components/Hero';
import Integrations from '../components/Integrations';
import PricelessKnowledgeSection from '../components/PricelessKnowledgeSection';
import SocialProof from '../components/SocialProof';
import TabbedFeatures from '../components/TabbedFeatures';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyMactech from '../components/WhyMactech';

const Home = () => (
  <>
    <Hero />
    <TabbedFeatures />
    <SocialProof />
    <Features />
    <TestimonialSlider />
    <Integrations />
    <WhyMactech />
    <PricelessKnowledgeSection />
    <FaqSection />
    <FreeTrialBanner />
  </>
);

export default Home;
