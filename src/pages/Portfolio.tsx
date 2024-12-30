import React from 'react';
import Hero from '../components/projects/Hero';
import KeyFeatures from '../components/projects/KeyFeatures';
import CallToAction from '../components/layout/CallToAction';

const Portfolio: React.FC = () => {
    return (
        <div>
            <Hero />
            <KeyFeatures />

            <CallToAction />
        </div>
    );
};

export default Portfolio;