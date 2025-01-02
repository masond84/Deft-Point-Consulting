import React from 'react';
import Hero from '../components/about/Hero';
import AboutSection from '../components/about/AboutSection';
import ServicesOverview from '../components/about/ServicesOverview';
//import TeamSection from '../components/about/Hero';
//import ClientTestimonials from '../components/about/ClientTestimonials';
import CallToAction from '../components/layout/CallToAction';
import OtherPages from '../components/about/OtherPages';
import FAQSection from '../components/about/FAQSection';

const About: React.FC = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ServicesOverview />
            <FAQSection />
            {/*<TeamSection />*/}
            {/*<ClientTestimonials />*/}
            <OtherPages />
            <CallToAction />
        </div>
    );
};

export default About;