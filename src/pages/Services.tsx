import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/services/Hero';
import OurServices from '../components/services/OurServices';
import CallToAction from '../components/layout/CallToAction';
import ServiceCategories from '../components/services/ServiceCategories';

const Services: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Our Services | Deft Point Consulting</title>
                <meta name="description" content="We offer tailored solutions to drive growth to your business. We offer Website and Application Development, Consulting Services, Design & Branding, and Marketing and Data Solutions." />
            </Helmet>
            <Hero />
            <OurServices />
            <ServiceCategories />
            <CallToAction />
        </div>
    );
};

export default Services;