import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import ReasonsToChoose from "../components/home/ReasonsToChoose";
import OurServices from "../components/home/OurServices";
import OurWork from '../components/home/OurWork';
//import Testimonials from '../components/testimonials/Testimonials';

const Home: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Deft Point Consulting</title>
                <meta name="description" content="Deft Point Consulting is a consulting firm that specializes in providing tailored software solutions to drive growth for small businesses and startups." />
            </Helmet>
            <Hero />
            <ReasonsToChoose />
            <OurServices />
            <OurWork />
            {/*<Testimonials />*/}
        </div>
    )
};

export default Home;