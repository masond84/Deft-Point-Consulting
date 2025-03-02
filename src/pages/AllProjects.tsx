import React from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import ProjectCard from '../components/projects/ProjectCard';

import CardImage from '../assets/images/DropdownCardImage2.jpg'
// Update fake projects with real data
const projects = [
    {
      id: 1,
      title: "CostTracker",
      description: "A Norwegian purchase order platform with a modernized UX.",
      image: CardImage,
      tags: ["Corporate website", "Design", "UI/UX", "WordPress"],
      category: "Web Development",
      timeTaken: "3 Months",
      startDate: "Aug 20, 2024",
      endDate: "Oct 16, 2024",
      technologies: [
        { src: "/assets/icons/react.svg", alt: "React.js" },
        { src: "/assets/icons/nextjs.svg", alt: "Next.js" },
        { src: "/assets/icons/tailwind.svg", alt: "Tailwind CSS" },
      ],
      methods: ["Full-Stack Development", "API Integration", "SEO Optimization"],
    },
    {
      id: 2,
      title: "E-Commerce Redesign",
      description: "A Shopify-based online store with a seamless UX.",
      image: CardImage,
      tags: ["E-commerce", "Redesign", "Shopify"],
      category: "Web Development",
      timeTaken: "2 Months",
      startDate: "Jul 10, 2024",
      endDate: "Sep 5, 2024",
      technologies: [{ src: "/assets/icons/shopify.svg", alt: "Shopify" }],
      methods: ["UX Research", "Conversion Optimization"],
    },
];

const AllProjects: React.FC = () => {
    const navigate = useNavigate();

    return(
        <section className="py-12 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#252525] min-h-screen">
        
            {/* Projects Grid */}
            <div className="w-full max-w-5xl flex flex-col gap-8 mx-auto">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
};

export default AllProjects;