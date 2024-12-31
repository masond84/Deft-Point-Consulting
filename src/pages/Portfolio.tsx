import React from 'react';
import Hero from '../components/projects/Hero';
import KeyFeatures from '../components/projects/KeyFeatures';
import Showcase from '../components/projects/Showcase';
import CallToAction from '../components/layout/CallToAction';


const Portfolio: React.FC = () => {
    return (
        <div>
            <Hero />
            <KeyFeatures />
            <Showcase />
            <CallToAction />
        </div>
    );
};

export default Portfolio;