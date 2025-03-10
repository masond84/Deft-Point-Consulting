import React, { useState, useEffect, useRef } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { useSwipeable } from 'react-swipeable';

import PointClickIcon from '../../assets/icons/PointClickIcon.svg';
import WebIcon from '../../assets/icons/WebIcon.svg';
import GraphIcon from '../../assets/icons/GraphIcon.svg';

import ServiceCardImage1 from '../../assets/images/ServiceCardImage1.jpg';
import ServiceCardImage2 from '../../assets/images/ServiceCardImage2.jpg';

// Define the type for individual features
type Feature = {
    title: string;
    description: string;
};
  
// Define the props type for the ServiceCardOne component
interface ServiceCardOneProps {
    header: string; // The header is a string
    features: Feature[]; // The features is an array of Feature objects
}

interface ServiceCardTwoProps {
    header: string;
    description: string;
    steps: {
      title: string;
      content: string;
    }[];
}

interface ServiceCardThreeProps {
    header: string;
    description: string;
    images: {
      src: string;
      alt: string;
    }[];
    buttonText: string;
    onButtonClick: () => void;
  }

// Individual card components
const ServiceCardOne: React.FC<ServiceCardOneProps> = ({ header, features }) => (
    <Card className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6 flex flex-col items-center text-center md:text-left md:items-stretch">
        <CardHeader className='flex flex-col items-center md:items-start font-sora'>
            <h3 className="text-xl font-bold text-white">{header}</h3>
        </CardHeader>

        {/* Dynamic Features Section */}
        <CardBody className="font-clash flex flex-col items-center text-center md:items-start md:text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* First Column */}
            {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                <div
                    key={`left-${index}`}
                    className="flex flex-col justify-between min-h-[100px] space-y-6 sm:space-y-4" // Set a minimum height
                >
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-400 mt-4">{feature.description}</p>
                    <hr className="border-t border-[#1F1F1F] w-full mt-auto" />
                </div>
            ))}

            {/* Divider Between Columns */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-[#1F1F1F] hidden md:block"></div>

            {/* Second Column */}
            {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
                <div
                    key={`right-${index}`}
                    className="flex flex-col justify-between min-h-[80px] space-y-6 sm:space-y-4" // Set a minimum height
                >
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-400 mt-4">{feature.description}</p>
                </div>
            ))}
        </div>
        </CardBody>
    </Card>
);
  
const ServiceCardTwo: React.FC<ServiceCardTwoProps> = ({ header, description, steps }) => (
    <Card className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6 flex flex-col items-center text-center md:text-left md:items-stretch">
        <CardHeader className='flex flex-col items-center md:items-start font-sora'>
            <h3 className="text-xl font-bold text-white mb-4">{header}</h3>
            <p className="text-sm font-light text-gray-400 mb-6">
                {description}
            </p>
        </CardHeader>
        
        <CardBody className="font-clash flex flex-col items-center text-center md:items-start md:text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* Dynamically render steps */}
                {steps.slice(0, Math.ceil(steps.length / 2)).map((step, index) => (
                <div key={`left-${index}`} className="flex flex-col justify-between min-h-[100px] space-y-6 sm:space-y-4">
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-gray-400 mt-4">{step.content}</p>
                    <hr className="border-t border-[#1F1F1F] w-full mt-auto" />
                </div>
                ))}
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#1F1F1F] hidden md:block"></div>
                {steps.slice(Math.ceil(steps.length / 2)).map((step, index) => (
                <div key={`right-${index}`} className="flex flex-col justify-between min-h-[80px] space-y-6 sm:space-y-4">
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-gray-400 mt-4">{step.content}</p>
                </div>
                ))}
            </div>
        </CardBody>
    </Card>
);

const ServiceCardThree = () => (
    <Card className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6 overflow-visible">
        {/* Header and description */}
        <CardHeader className="flex flex-col items-center md:items-start text-center md:text-left font-sora">
            <h3 className="text-xl font-bold text-white mb-4">Web Design Portfolio</h3>
            <p className="text-sm font-light text-gray-400 mb-4">
                Check out some of our most recent Web Design projects in the table below.
            </p>
        </CardHeader>

        {/* Images container */}
        <CardBody className='overflow-visible'>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-center md:items-stretch">
                <img
                    src={ServiceCardImage1} // Replace with actual path
                    alt="Project 1"
                    className="rounded-lg border border-[#1F1F1F] object-cover w-full"
                />
                <img
                    src={ServiceCardImage2} // Replace with actual path
                    alt="Project 2"
                    className="rounded-lg border border-[#1F1F1F] object-cover w-full"
                />

                {/* Button overlay */}
                <div className="absolute -bottom-12 sm:-bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-10 flex justify-center items-center">
                    <Button
                        className="bg-[#1A1A1A] text-white font-medium font-clash px-6 py-2 rounded-full hover:bg-[#444444]/80"
                    >
                        View All Projects <span className="ml-2">→</span>
                    </Button>
                </div>
            </div>
        </CardBody>
    </Card>
);

const ServiceCardFour = () => (
    <Card className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6">
        {/* Header and description */}
        <CardHeader className="flex flex-col items-start font-sora">
            <h3 className="text-xl font-bold text-white mb-4">Our Web Design Completed Projects</h3>
            <p className="text-sm font-light text-gray-400 mb-6">
                At DigitX, we are dedicated to creating transformative mobile apps that empower your business and enrich your users' experiences.
            </p>
        </CardHeader>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase tracking-wider bg-[#1F1F1F] text-gray-400 font-sora border-b border-[#1F1F1F]">
                    <tr>
                        <th scope="col" className="px-6 py-3  text-white font-semibold border-r border-[#1F1F1F]">
                            Project Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-white font-semibold border-r border-[#1F1F1F]">
                            Industry
                        </th>
                        <th scope="col" className="px-6 py-3 text-white font-semibold border-r border-[#1F1F1F]">
                            Website URL
                        </th>
                    </tr>
                </thead>

                {/* Spacer */}
                <tbody className="h-4 bg-transparent">
                    <tr>
                        <td colSpan={3}></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr className="bg-[#121212] border border-[#1F1F1F]">
                        <td className="px-6 py-4 font-medium border-r border-[#1F1F1F] font-clash text-gray-400">GlobalTech Solutions</td>
                        <td className="px-6 py-4 border-r border-[#1F1F1F] font-clash text-gray-400">E-commerce</td>
                        <td className="px-6 py-4">
                            <a href="http://www.globaltechsolutions.com" className="font-clash text-gray-400 hover:underline">
                                www.globaltechsolutions.com
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-[#121212] border border-[#1F1F1F]">
                        <td className="px-6 py-4  border-r border-[#1F1F1F] font-clash text-gray-400">GreenEarth Eco Store</td>
                        <td className="px-6 py-4 border-r border-[#1F1F1F] font-clash text-gray-400">Design Agency</td>
                        <td className="px-6 py-4">
                            <a href="http://www.greenearthcostore.com" className="font-clash text-gray-400 hover:underline">
                                www.greenearthcostore.com
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-[#121212] border border-[#1F1F1F]">
                        <td className="px-6 py-4 border-r border-[#1F1F1F] font-clash text-gray-400">TechGuru Inc.</td>
                        <td className="px-6 py-4 border-r border-[#1F1F1F] font-clash text-gray-400">Technology</td>
                        <td className="px-6 py-4 font-clash">
                            <a href="http://www.techguruinc.com" className="text-grey-400 hover:underline">
                                www.techguruinc.com
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card>
);

const ServiceCategories: React.FC = () => {
    const location = useLocation();
    const categoriesRef = useRef<HTMLDivElement>(null); // Ref for scrolling to #categories
    const [tabValue, setTabValue] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Handle state from RouterLink
    useEffect(() => {
        if (location.state && location.state.tabValue !== undefined) {
            setTabValue(location.state.tabValue);

            // Smooth scroll to the categories section
            if (categoriesRef.current) {
                categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.state]);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    // Adjust layout based on screen size
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
          if (isMobile && tabValue < tabContent.length - 1) {
            setTabValue((prev) => prev + 1);
          }
        },
        onSwipedRight: () => {
          if (isMobile && tabValue > 0) {
            setTabValue((prev) => prev - 1);
          }
        },
        preventScrollOnSwipe: true, // Prevent scrolling during swipe
        trackTouch: true,          // Enable touch tracking
        trackMouse: false,         // Disable mouse tracking
    });


    // Content for each tab
    const tabContent = [
        {
            title: "Web Application Development",
            description:"We create responsive, user-focused web applications tailored to your business goals, ensuring seamless performance and exceptional design.",
            cards: [
                <ServiceCardOne
                    key="card1"
                    header="Key Features"
                    features={[
                        { title: "Customized Design", description: "We craft bespoke designs tailored to match your brand personality and industry." },
                        { title: "Responsive Design", description: "Ensuring your website adapts seamlessly to different devices and screen sizes." },
                        { title: "User-Centric Approach", description: "Prioritizing ease of navigation and intuitive user experience." },
                        { title: "Visual Elements", description: "Incorporating engaging visuals, graphics, and animations to enhance the overall appeal." },
                    ]}
                />, 
                <ServiceCardTwo
                    key="card2"
                    header="Development Process"
                    description="Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here's an overview of our design process."
                    steps={[
                    { title: "Discovery & Planning", content: "We start by understanding your business, target audience, and project goals." },
                    { title: "Wireframing & Prototyping", content: "Creating wireframes and prototypes to visualize the website layout and user flow." },
                    { title: "Design & Development", content: "Once the wireframes are approved, our designers and developers bring the design to life." },
                    { title: "Testing & Review", content: "We conduct thorough testing to ensure the website functions flawlessly across devices." },
                    ]}
                />,
            ]
        },
        {
            title: "Consulting",
            description: "Expert consulting services to guide your digital strategy, streamline development processes, and ensure scalable, secure solutions.",
            cards: [
                <ServiceCardOne
                    key="card1"
                    header="Key Features"
                    features={[
                        { title: "Business Strategy", description: "Analyze goals to define a digital strategy roadmap." },
                        { title: "UX/UI Audits", description: "Enhance user experience and interface design." },
                        { title: "Technical Guidance", description: "Identify tech stacks and best practices for success." },
                        { title: "Scalability Analysis", description: "Ensure solutions align with future growth." },
                    ]}
                />,
                <ServiceCardTwo
                    key="card2"
                    header="Consulting Workflow"
                    description="We provide actionable insights and technical guidance to streamline business processes and implement scalable solutions."
                    steps={[
                    { title: "Research & Analysis", content: "Our first step includes understanding your market and identify gaps for strategic improvement." },
                    { title: "Strategic Planning", content: "We will develop actionable plans for growth and scalability tailored to your specific needs." },
                    { title: "Execution Support", content: "Our process helps you implement plans that will support you with achieving your goals." },
                    { title: "Review & Iterate", content: "We apply an iterative appraoch to all processes improving strategies based on performance data." },
                    ]}
                />,
            ]
        },
        {
            title: "Design & Branding",
            description: "Build your presence with custom UI/UX designs, cohesive branding, and visually stunning assets that captivate your audience.",
            cards: [
                <ServiceCardOne
                    key="card1"
                    header="Key Features"
                    features={[
                    { title: "Custom UI/UX Design", description: "We create modern and unique user interface designs to bring your business application to life." },
                    { title: "Branding Packages", description: "Let us deliver logos, landing pages, and graphics that create a cohesive visual identity." },
                    { title: "Prototype Development", description: "We will implement usable prototypes for testing and feedback prior to development." },
                    { title: "Template Designs", description: "Create appealing and implementable templates tailored for your website, app or business." },
                    ]}
                />,
                <ServiceCardTwo
                    key="card2"
                    header="Design Process"
                    description="We provide actionable insights and technical guidance to streamline business processes and implement scalable solutions."
                    steps={[
                    { title: "Brand Discovery", content: "We understand your vision, and the market to identify gaps for strategic improvement." },
                    { title: "Concept Development", content: "Let's collaborate to transform your vision into tangible results that align with your brand." },
                    { title: "Implementation Iterations", content: "We work iterativly with clients to ensure that each step of our work meets is to your liking." },
                    { title: "Brand Guidelines", content: "We will work with you to deliver comprehensive guides and documentation for consistency." },
                    ]}
                />,
            ]
        },
        {
            title: "Marketing & Data Solutions",
            description: "Boost your online presence with data-driven marketing, including SEO, PPC, and analytics tailored to maximize engagement and conversions.",
            cards: [
                <ServiceCardOne
                    key="card1"
                    header="Marketing Features"
                    features={[
                    { title: "SEO Optimization", description: "We drive traffic to your site with keyword research, on-page optimization, and more." },
                    { title: "Analytics", description: "Let us help you track performance and user behavior insights with key metrics." },
                    { title: "Lead Generation", description: "We offer strategies to engage and expand your audience effectively." },
                    { title: "PPC Campaigns", description: "Our services help optimize ad spend to maximize conversions and ROI." },
                    ]}
                />,
                <ServiceCardTwo
                    key="card2"
                    header="Marketing Pipeline"
                    description="We provide actionable insights and technical guidance to streamline business processes and implement scalable solutions."
                    steps={[
                    { title: "Market Research", content: "We will work tirelessly to analyze trends and competitors to create driven solutions." },
                    { title: "API Integrations", content: "We connect third-party tools for efficient data sharing and enhanced marketing workflows." },
                    { title: "CRM Integrations", content: "Let us setup CRM systems to centralize customer data and optimize lead tracking and nurturing." },
                    { title: "Marketing Campaigns", content: "We will levarage insights for increased engagement and conversions with targeted marketing campaigns." },
                    ]}
                />,
            ]
        },
    ];

    return (
        <section 
            ref={categoriesRef} // Attach ref here
            id='categories'
            className="py-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white"
        >
            {/* Header Section */}
            <div className="text-center mb-12 max-w-3xl mx-auto px-8 sm:px-12 md:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sora leading-tight">
                    Categories of <span className="text-[#ffffff]">Services</span>
                </h2>
                <p className="text-sm sm:text-base md:text-mdtext-gray-400 leading-relaxed font-clash">
                    At Deft Point, we are committed to providing exceptional digital solutions tailored to suit your unique business needs.
                </p>
            </div>

            {/* Tabs Section */}
            <Box className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
                {/* Tabs Container */}
                <Box 
                    className={`md:pr-6 mb-4 md:mb-0 flex flex-nowrap md:overflow-visible overflow-hidden${
                        isMobile ? 'overflow-x-auto' : ''    
                    }`}    
                >
                    <Tabs
                        {...swipeHandlers} // Attach swipe handlers here
                        orientation={isMobile ? 'horizontal' : 'vertical'}
                        value={tabValue}
                        onChange={handleChange}
                        variant={isMobile ? 'scrollable' : 'standard'}
                        scrollButtons="auto"
                        textColor="inherit"
                        indicatorColor="primary"
                        aria-label="service categories"
                        className="w-full flex flex-wrap md:flex-col space-y-0 md:space-y-4"
                    >
                        {/* Tab 1 */}
                        <Tab
                            disableRipple
                            label={
                                <div className={`flex items-center p-4 justify-start w-72 whitespace-nowrap rounded-lg border border-[#1A1A1A] ${
                                    tabValue === 0 ? 'bg-[#1A1A1A] text-white' : 'bg-transparent text-gray-400'
                                } hover:bg-[#1A1A1A] hover:text-white transition`}>
                                    <img src={WebIcon} alt="Web Development Icon" className="w-6 h-6 mr-2" />
                                    Web App Development
                                </div>
                            }
                        />
                        {/* Tab 2 */}
                        <Tab
                            disableRipple
                            label={
                                <div className={`flex items-center p-4 justify-start w-72 whitespace-nowrap rounded-lg border border-[#1A1A1A] ${
                                    tabValue === 1 ? 'bg-[#1A1A1A] text-white' : 'bg-transparent text-gray-400'
                                } hover:bg-[#1A1A1A] hover:text-white transition`}>
                                    <img src={WebIcon} alt="Web Development Icon" className="w-6 h-6 mr-2" />
                                    Digital Consulting
                                </div>
                            }
                        />
                        {/* Tab 3 */}
                        <Tab
                            disableRipple
                            label={
                                <div className={`flex items-center p-4 justify-start w-72 whitespace-nowrap rounded-lg border border-[#1A1A1A] ${
                                    tabValue === 2 ? 'bg-[#1A1A1A] text-white' : 'bg-transparent text-gray-400'
                                } hover:bg-[#1A1A1A] hover:text-white transition`}>
                                    <img src={PointClickIcon} alt="Mobile App Development Icon" className="w-6 h-6 mr-2" />
                                    Design Branding
                                </div>
                            }
                        />
                        {/* Tab 4 */}
                        <Tab
                            disableRipple
                            label={
                                <div className={`flex items-center p-4 justify-start w-72 whitespace-nowrap rounded-lg border border-[#1A1A1A] ${
                                    tabValue === 3 ? 'bg-[#1A1A1A] text-white' : 'bg-transparent text-gray-400'
                                } hover:bg-[#1A1A1A] hover:text-white transition`}>
                                    <img src={GraphIcon} alt="Digital Marketing Icon" className="w-6 h-6 mr-2" />
                                    Marketing & Data Solutions
                                </div>
                            }
                        />
                    </Tabs>
                </Box>

                {/* Tab Panels Container */}
                <Box 
                    className="flex-grow pl-6 py-8 md:pl-6 md:py-8 flex flex-col items-center text-center px-4 space-y-6 md:items-start md:text-left md:space-y-8"
                >
                    {tabContent.map((content, index) => (
                        <div
                            key={index}
                            role="tabpanel"
                            hidden={tabValue !== index}
                            className="w-full space-y-8"
                        >
                            {tabValue === index && (
                                <div className='space-y-4'>
                                    <Typography variant="h5" className="font-bold mb-4 sm:mb-0 font-sora text-lg sm:text-xl md:text-2xl text-white">
                                        {content.title}
                                    </Typography>
                                    <Typography className="text-gray-300 text-sm sm:text-base md:text-lg font-clash leading-relaxed">
                                        {content.description}
                                    </Typography>
                                
                                    {/* Cards Section */}
                                    <div className="flex flex-col gap-6 sm:gap-8 w-full px-2 sm:px-0">
                                        {content.cards.map((card) => card)}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </Box>
            </Box>
        </section>
    );
};

export default ServiceCategories;