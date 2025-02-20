import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const partners = [
    {
        title: "For Startups",
        description: "Empowering startups on their journey, every step of the way.",
        bgColor: "bg-blue-600",
        gradient:
          "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-400 hover:to-blue-600",
    },
    {
        title: "For Scaleups",
        description: "Supporting Scaleups to step into the next phase of growth.",
        bgColor: "bg-purple-600",
        gradient:
        "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 hover:from-purple-400 hover:to-purple-600",
    },
    {
        title: "For Enterprise",
        description:
        "Optimizing Enterprises to transform challenges into triumphs.",
        bgColor: "bg-black",
        gradient:
        "bg-gradient-to-br from-gray-900 via-black to-gray-800 hover:from-gray-800 hover:to-black",
    },
];

const PartnersSection: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-200 font-sora">Our B2B Partners</h2>
                <p className="text-gray-200 mt-2 max-w-2xl mx-auto font-clash">
                We unite multi-disciplinary expertise across technology, marketing,
                data, and creativity to create client teams composed of experts in
                their fields.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                <motion.div
                    key={index}
                    className={`relative rounded-xl ${partner.gradient} p-6 text-white flex flex-col justify-between min-h-[280px]`}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} // Expansion on hover
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    {/* Card Title */}
                    <h3 className="text-2xl font-semibold">{partner.title}</h3>

                    {/* Card Description (hidden initially, appears on hover) */}
                    <motion.p
                    className="mt-2 text-sm opacity-0"
                    whileHover={{ opacity: 1 }}
                    >
                    {partner.description}
                    </motion.p>

                    {/* Explore Button (hidden initially, appears on hover) */}
                    <motion.div whileHover={{ opacity: 1 }} className="opacity-0">
                    <Button className="mt-4 border border-white text-white">
                        Explore more
                    </Button>
                    </motion.div>
                </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;