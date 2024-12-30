import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react';

import PointClickIcon from '../../assets/icons/PointClickIcon.svg';
import WebIcon from '../../assets/icons/WebIcon.svg';
import GraphIcon from '../../assets/icons/GraphIcon.svg';


const ServiceCategories: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    // Content for each tab
    const tabContent = [
        {
            title: "Web Design",
            description: "Our web design services focus on creating visually appealing, user-friendly websites tailored to your brand's identity and business goals. With a mobile-first approach and seamless UX/UI designs, we ensure your online presence leaves a lasting impression.",
            cards: [
                {
                  icon: "/path/to/icon1.png",
                  title: "Customized Design",
                  description: "Tailored designs for your brand."
                },
                {
                  icon: "/path/to/icon2.png",
                  title: "Responsive Design",
                  description: "Seamless experience across devices."
                },
                {
                  icon: "/path/to/icon3.png",
                  title: "User-Centric Approach",
                  description: "Intuitive navigation and UI."
                },
                {
                  icon: "/path/to/icon4.png",
                  title: "Visual Elements",
                  description: "Engaging graphics and animations."
                }
            ]
        },
        {
            title: "Web Development",
            description: "We develop high-performing, secure, and scalable web solutions tailored to meet your business requirements. From front-end development to back-end integration, we deliver seamless functionality.",
            cards: [
                {
                  icon: "/path/to/icon1.png",
                  title: "Customized Design",
                  description: "Tailored designs for your brand."
                },
                {
                  icon: "/path/to/icon2.png",
                  title: "Responsive Design",
                  description: "Seamless experience across devices."
                },
                {
                  icon: "/path/to/icon3.png",
                  title: "User-Centric Approach",
                  description: "Intuitive navigation and UI."
                },
                {
                  icon: "/path/to/icon4.png",
                  title: "Visual Elements",
                  description: "Engaging graphics and animations."
                }
            ]
        },
        {
            title: "Mobile App Development",
            description: "Our mobile app development services ensure your business is accessible anytime, anywhere. We specialize in creating intuitive, responsive apps for iOS and Android platforms.",
            cards: [
                {
                  icon: "/path/to/icon1.png",
                  title: "Customized Design",
                  description: "Tailored designs for your brand."
                },
                {
                  icon: "/path/to/icon2.png",
                  title: "Responsive Design",
                  description: "Seamless experience across devices."
                },
                {
                  icon: "/path/to/icon3.png",
                  title: "User-Centric Approach",
                  description: "Intuitive navigation and UI."
                },
                {
                  icon: "/path/to/icon4.png",
                  title: "Visual Elements",
                  description: "Engaging graphics and animations."
                }
            ]
        },
        {
            title: "Digital Marketing",
            description: "Boost your brand visibility and engagement with our data-driven digital marketing strategies. We specialize in SEO, PPC, content marketing, and social media campaigns tailored to your business.",
            cards: [
                {
                  icon: "/path/to/icon1.png",
                  title: "Customized Design",
                  description: "Tailored designs for your brand."
                },
                {
                  icon: "/path/to/icon2.png",
                  title: "Responsive Design",
                  description: "Seamless experience across devices."
                },
                {
                  icon: "/path/to/icon3.png",
                  title: "User-Centric Approach",
                  description: "Intuitive navigation and UI."
                },
                {
                  icon: "/path/to/icon4.png",
                  title: "Visual Elements",
                  description: "Engaging graphics and animations."
                }
            ]
        },
    ];

    return (
        <section className="py-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
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
                            id={`tabpanel-${index}`}
                            aria-labelledby={`tab-${index}`}
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
                                        {content.cards.map((card, cardIndex) => (
                                            <Card
                                            key={cardIndex}
                                            isHoverable
                                            className="bg-[#121212] shadow-lg border border-[#1F1F1F] rounded-lg p-6 flex flex-col items-center space-y-4 transition w-full"
                                            >
                                                {/* Card Icon */}
                                                <CardHeader className="flex justify-center pb-2">
                                                    <img src={card.icon} alt={card.title} className="w-16 h-16" />
                                                </CardHeader>

                                                {/* Card Content */}
                                                <CardBody className="flex flex-col items-center text-center">
                                                    <h3 className="text-xl font-medium font-sora">{card.title}</h3>
                                                    <p className="text-gray-400 text-sm font-clash leading-relaxed">
                                                    {card.description}
                                                    </p>
                                                </CardBody>

                                                {/* Card Footer */}
                                                <CardFooter className="pt-4">
                                                    <Button
                                                    variant="flat"
                                                    className="px-4 py-2 bg-gradient-to-r from-[#444444] to-[#111111] text-white font-medium rounded-md hover:opacity-80"
                                                    >
                                                    Learn More
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
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