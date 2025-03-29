import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/projects/Hero';
import KeyFeatures from '../components/projects/KeyFeatures';
import Showcase from '../components/projects/Showcase';
import CallToAction from '../components/layout/CallToAction';


const Portfolio: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Our Works | Deft Point Consulting</title>
                <meta name="description" content="Explore our portfolio of custom-built websites, web applications, and consulting projects for small businesses and startups." />
            </Helmet>
            <Hero />
            <KeyFeatures />
            <Showcase />
            <CallToAction />
        </div>
    );
};

export default Portfolio;