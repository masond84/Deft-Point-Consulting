import { motion } from "motion/react";
import {
    Card,
    CardHeader,
    CardBody,
} from '@nextui-org/react';
// Icons
import NotesIcon from '../../assets/images/NotesIcon.svg';
import FireIcon from '../../assets/images/FireIcon.svg';
import PeopleIcon from '../../assets/images/PeopleIcon.svg';
import BoltIcon from '../../assets/images/BoltIconCircular.svg';
import ClockIcon from '../../assets/images/ClockIcon.svg';
import abstractDesignSvg from '@/assets/AbstractDesign.svg';

const KeyFeatures = () => {
    const features = [
        {
            icon: <img src={NotesIcon} alt="Strategic Planning" className="w-14 h-14" />,
            title: "Strategic Planning",
            description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
        },
        {
            icon: <img src={FireIcon} alt="Customized Solutions" className="w-14 h-14" />,
            title: "Customized Solutions",
            description: "We tailor our services to suit each project's unique requirements, resulting in solutions that align perfectly with our clients' brand identities.",
        },
        {
            icon: <img src={PeopleIcon} alt="User-Centric Approach" className="w-14 h-14" />,
            title: "User-Centric Approach",
            description: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
        },
        {
            icon: <img src={BoltIcon} alt="Cutting-Edge Technologies" className="w-14 h-14" />,
            title: "Cutting-Edge Technologies",
            description: "We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.",
        },
        {
            icon: <img src={ClockIcon} alt="Timely Delivery" className="w-14 h-14" />,
            title: "Timely Delivery",
            description: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
        },
    ];

    return (
        <section 
            className="py-16 text-white"
            style={{
                background: 'linear-gradient(135deg, #272727 0%, #0f0f0f 92%)',
            }}
        >
            {/* Header Section */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 font-sora leading-tight">
                    Key Features <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#808080] to-[#b4b4b4]">of Our Projects</span>
                </h2>
                <p className="text-gray-300 text-md font-light font-sora leading-loose">
                    Partnering with Deft Point offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto items-stretch">
                {features.slice(0, 3).map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ rotateY: -10, rotateX: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 8 }}
                    >
                        <Card
                            isHoverable
                            className="bg-glass-bg shadow-glass backdrop-blur-glass border  border-glass-border p-6 rounded-lg text-center flex flex-col items-center space-y-4 transition h-full"
                        >
                            {/* Overlay Image */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${abstractDesignSvg})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    opacity: 0.6, // Adjust opacity for better visibility of the backdrop
                                }}
                            ></div>
                            <CardHeader className="flex flex-col items-center pb-2">{feature.icon}</CardHeader>
                            <CardBody className="flex flex-col items-center text-center flex-grow mb-4">
                                <h3 className="text-xl font-medium mb-4 font-sora">{feature.title}</h3>
                                <p className="text-gray-400 text-sm font-clash leading-loose">{feature.description}</p>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Larger Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto mt-12 items-stretch">
                {features.slice(3, 5).map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ rotateY: 10, rotateX: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 8 }}
                    >
                        <Card
                            isHoverable
                            className="bg-glass-bg shadow-glass backdrop-blur-glass border  border-glass-border p-8 rounded-lg text-center flex flex-col items-center space-y-4 transition h-full w-full"
                        >
                            {/* Overlay Image */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${abstractDesignSvg})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    opacity: 0.6, // Adjust opacity for better visibility of the backdrop
                                }}
                            ></div>
                            <CardHeader className="flex flex-col items-center pb-2">{feature.icon}</CardHeader>
                            <CardBody className="flex flex-col items-center text-center flex-grow mb-4">
                                <h3 className="text-xl font-medium mb-4 font-sora">{feature.title}</h3>
                                <p className="text-gray-400 text-sm font-clash leading-loose">{feature.description}</p>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default KeyFeatures;