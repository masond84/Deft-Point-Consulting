import React from 'react';

import Hero from '../components/services/Hero';
import OurServices from '../components/services/OurServices';
import CallToAction from '../components/layout/CallToAction';
import ServiceCategories from '../components/services/ServiceCategories';

const Services: React.FC = () => {
    return (
        <div>
            <Hero />
            <OurServices />
            <ServiceCategories />
            <CallToAction />
        </div>
    );
};

export default Services;