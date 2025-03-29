import React from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>About Us | Deft Point Consulting</title>
                <meta name="description" content="Learn more about how we work hand in hand with brands. Allow us to deliver scalable consultation services, increased online visibility, and improved customer satisfaction in today's digital age." />
            </Helmet>
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