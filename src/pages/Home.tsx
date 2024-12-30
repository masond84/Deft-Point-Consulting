import React from "react";
import Hero from "../components/home/Hero";
import ReasonsToChoose from "../components/home/ReasonsToChoose";
import OurServices from "../components/home/OurServices";
import OurWork from '../components/home/OurWork';
//import Testimonials from '../components/testimonials/Testimonials';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <ReasonsToChoose />
            <OurServices />
            <OurWork />
            {/*<Testimonials />*/}
        </div>
    )
};

export default Home;