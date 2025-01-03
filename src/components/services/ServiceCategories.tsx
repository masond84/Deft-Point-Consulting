import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';

import PointClickIcon from '../../assets/icons/PointClickIcon.svg';
import WebIcon from '../../assets/icons/WebIcon.svg';
import GraphIcon from '../../assets/icons/GraphIcon.svg';

import ServiceCardImage1 from '../../assets/images/ServiceCardImage1.jpg';
import ServiceCardImage2 from '../../assets/images/ServiceCardImage2.jpg';

// Individual card components
const CardOne = () => (
    <Card className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6">
        <CardHeader className='font-sora'>
            <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
        </CardHeader>

        <CardBody className='font-clash'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* First Column */}
                <div className='space-y-6'>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Customized Design</h4>
                        <p className="text-sm text-gray-400 mt-4">
                            We craft bespoke designs tailored to match your brand personality and industry.
                        </p>
                    </div>

                    <hr className="border-t border-[#1F1F1F]" w-full />
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white">Responsive Design</h4>
                        <p className="text-sm text-gray-400 mt-4">
                            Ensuring your website adapts seamlessly to different devices and screen sizes.
                        </p>
                    </div> 
                </div>
                
                {/* Divider Between Columns */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#1F1F1F] hidden md:block"></div>

                {/* Second Column */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-white">User-Centric Approach</h4>
                        <p className="text-sm text-gray-400 mt-4">
                            Prioritizing ease of navigation and intuitive user experience.
                        </p>
                    </div>

                    <hr className="border-t border-[#1F1F1F] w-full" />
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white">Visual Elements</h4>
                        <p className="text-sm text-gray-400 mt-4">
                        Incorporating engaging visuals, graphics, and animations to enhance the overall appeal.
                        </p>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>
);
  
const CardTwo = () => (
    <Card className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6">
        <CardHeader className='flex flex-col items-start font-sora'>
            <h3 className="text-xl font-bold text-white mb-4">Design Process</h3>
            <p className="text-sm font-light text-gray-400 mb-6">
                Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here's an overview of our design process.
            </p>
        </CardHeader>
        
        <CardBody className='font-clash'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* First Column */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-white">Discovery & Planning</h4>
                        <p className="text-sm text-gray-400 mt-4">
                        We start by understanding your business, target audience, and project goals.
                        </p>
                    </div>

                    <hr className="border-t border-[#1F1F1F] w-full" />

                    <div>
                        <h4 className="text-lg font-semibold text-white">Wireframing & Prototyping</h4>
                        <p className="text-sm text-gray-400 mt-4">
                        Creating wireframes and prototypes to visualize the website layout and user flow.
                        </p>
                    </div>
                </div>

                {/* Divider Between Columns */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#1F1F1F] hidden md:block"></div>

                {/* Second Column */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-white">Design & Development</h4>
                        <p className="text-sm text-gray-400 mt-4">
                        Once the wireframes are approved, our designers and developers bring the design to life.
                        </p>
                    </div>

                    <hr className="border-t border-[#1F1F1F] w-full" />

                    <div>
                        <h4 className="text-lg font-semibold text-white">Testing & Review</h4>
                        <p className="text-sm text-gray-400 mt-4">
                        We conduct thorough testing to ensure the website functions flawlessly across devices.
                        </p>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>
);

const ServiceCardThree = () => (
    <Card className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6 overflow-visible">
        {/* Header and description */}
        <CardHeader className="flex flex-col items-start font-sora">
            <h3 className="text-xl font-bold text-white mb-4">Web Design Portfolio</h3>
            <p className="text-sm font-light text-gray-400 mb-6">
                Check out some of our most recent Web Design projects in the table below.
            </p>
        </CardHeader>

        {/* Images container */}
        <CardBody>
            <div className="relative grid grid-cols-2 gap-4">
                <img
                    src={ServiceCardImage1} // Replace with actual path
                    alt="Project 1"
                    className="rounded-lg border border-[#1F1F1F] object-cover"
                />
                <img
                    src={ServiceCardImage2} // Replace with actual path
                    alt="Project 2"
                    className="rounded-lg border border-[#1F1F1F] object-cover"
                />

                {/* Button overlay */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-10 flex justify-center items-center">
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
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    // Content for each tab
    const tabContent = [
        {
            title: "Web Design",
            description: "Our web design services focus on creating visually appealing, user-friendly websites tailored to your brand's identity and business goals. With a mobile-first approach and seamless UX/UI designs, we ensure your online presence leaves a lasting impression.",
            cards: [
                <CardOne key="card1" />, 
                <CardTwo key="card2" />,
                <ServiceCardThree key="card3" />,
                <ServiceCardFour key="card4" />,
            ]
        },
        {
            title: "Web Development",
            description: "We develop high-performing, secure, and scalable web solutions tailored to meet your business requirements. From front-end development to back-end integration, we deliver seamless functionality.",
            cards: [
                <CardOne key="card1" />, 
                <CardTwo key="card2" />,
            ]
        },
        {
            title: "Mobile App Development",
            description: "Our mobile app development services ensure your business is accessible anytime, anywhere. We specialize in creating intuitive, responsive apps for iOS and Android platforms.",
            cards: [
                <CardOne key="card1" />, 
                <CardTwo key="card2" />,
            ]
        },
        {
            title: "Digital Marketing",
            description: "Boost your brand visibility and engagement with our data-driven digital marketing strategies. We specialize in SEO, PPC, content marketing, and social media campaigns tailored to your business.",
            cards: [
                <CardOne key="card1" />, 
                <CardTwo key="card2" />,
            ]
        },
    ];

    return (
        <section 
            id='categories'
            className="py-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white"
        >
            {/* Header Section */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 font-sora leading-tight">
                    Categories of <span className="text-[#ffffff]">Services</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-clash">
                    At Deft Point, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.
                </p>
            </div>

            {/* Tabs Section */}
            <Box className="max-w-6xl mx-auto px-4 pt-0 flex">
                {/* Tabs Container */}
                <Box className="pr-6 min-w-xl">
                    <Tabs
                        orientation='vertical'
                        value={tabValue}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="primary"
                        aria-label="service categories tabs"
                        className='space-y-4'
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#0073E6', // Set to your custom color (e.g., orange)
                                width: '1px', // Optional: Adjust thickness
                            },
                        }}
                    >
                        {/* Tab 1 */}
                        <Tab
                            disableRipple
                            label={
                                <div className={`flex items-center justify-start p-4 w-72 whitespace-nowrap rounded-lg border border-[#1A1A1A] ${
                                    tabValue === 0 ? 'bg-[#1A1A1A] text-white' : 'bg-transparent text-gray-400'
                                } hover:bg-[#1A1A1A] hover:text-white transition`}>
                                    <img src={PointClickIcon} alt="Web Design Icon" className="w-6 h-6 mr-2" />
                                    Web Design
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
                                    Web Development
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
                                    Mobile App Development
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
                                    Digital Marketing
                                </div>
                            }
                        />
                    </Tabs>
                </Box>

                {/* Tab Panels Container */}
                <Box className="flex-grow pl-6 py-8">
                    {tabContent.map((content, index) => (
                        <div
                            key={index}
                            role="tabpanel"
                            hidden={tabValue !== index}
                            className="space-y-8"
                        >
                            {tabValue === index && (
                                <div className='space-y-6'>
                                    <Typography variant="h5" className="font-bold mb-4 font-sora">
                                        {content.title}
                                    </Typography>
                                    <Typography className="text-gray-300 text-lg font-clash leading-relaxed">
                                        {content.description}
                                    </Typography>
                                
                                    {/* Cards Section */}
                                    <div className="flex flex-col gap-8">
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