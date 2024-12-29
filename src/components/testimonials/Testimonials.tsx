import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Link } from '@nextui-org/react';
import { motion } from "motion/react";

const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO at Company',
      date: 'Jan 1, 2024',
      content: 'This is an amazing service! Highly recommend to others.',
      image: 'path_to_image1.jpg',
    },
    {
        name: 'John Doe',
        title: 'CEO at Company',
        date: 'Jan 1, 2024',
        content: 'This is an amazing service! Highly recommend to others.',
        image: 'path_to_image1.jpg',
    },
    {
        name: 'John Doe',
        title: 'CEO at Company',
        date: 'Jan 1, 2024',
        content: 'This is an amazing service! Highly recommend to others.',
        image: 'path_to_image1.jpg',
    },
    {
        name: 'John Doe',
        title: 'CEO at Company',
        date: 'Jan 1, 2024',
        content: 'This is an amazing service! Highly recommend to others.',
        image: 'path_to_image1.jpg',
    },

    // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-8 ">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Testimonials</h2>
                <p className="text-gray-600">What our clients say about us</p>
            </div>
        </section>
    );
};

export default Testimonials;