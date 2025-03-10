import React, { useState } from "react";
import { Card, CardBody, CardHeader, Button, Chip } from "@nextui-org/react";
import { FaPalette, FaLaptopCode } from "react-icons/fa";
import { TfiAngleDoubleUp, TfiAngleDown } from "react-icons/tfi";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    timeTaken: string;
    startDate: string;
    endDate: string;
    technologies: { src: string; alt: string }[];
    methods: string[];
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={String(project.id)} className="w-full">
      <Card className="bg-[#1A1A1A] shadow-lg rounded-lg border border-[#1F1F1F]">
        {/* Card Header */}
        <CardHeader className="p-4">
          <div className="bg-[#222222] shadow-glass rounded-lg overflow-hidden flex justify-center items-center h-fit">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </CardHeader>

        {/* Card Body */}
        <CardBody className="p-8 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-center sm:text-left sm:pl-4 sm:pr-4 mb-4 space-y-4 sm:space-y-0">
            <h3 className="text-lg sm:text-xl font-medium font-sora whitespace-nowrap text-white">
              {project.title}
            </h3>

            <div className="flex items-center gap-2">
              <span className="text-[#666666] font-xs font-sora mr-2 sm:mr-0">
                {expanded ? "Show Less" : "Show More"}
              </span>
              <div className="p-[2px] rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A]/0">
                <Button
                  onPress={() => setExpanded(!expanded)}
                  className="p-3 bg-gradient-to-r from-[#222222] to-[#333333] text-white hover:text-white/80 border border-[#262626] rounded-full"
                  variant="ghost"
                >
                  {expanded ? (
                    <TfiAngleDoubleUp className="text-sm sm:text-lg" />
                  ) : (
                    <TfiAngleDown className="text-sm sm:text-lg" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:-mt-4 sm:pl-4 sm:pr-4 justify-center sm:justify-start overflow-x-auto">
            {project.tags.map((tag, index) => (
              <Chip
                key={index}
                className="bg-transparent text-[#A6A6A6] border border-[#1F1F1F] rounded-full flex items-center px-3 py-1 sm:p-4 text-xs sm:text-sm font-clash"
                size="lg"
                variant="bordered"
              >
                {tag}
              </Chip>
            ))}
          </div>

          {/* Default Description */}
          <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-lg sm:ml-4 sm:mr-4 mb-4 p-4 sm:p-8 text-center sm:text-left">
            <h4 className="text-lg font-light text-white font-sora mb-4">Project Description</h4>
            <p className="text-xs text-gray-400 font-sora">{project.description}</p>
          </div>

          {/* Expanded Content */}
          {expanded && (
            <div className="space-y-6 p-4 sm:p-8 bg-[#0f0f0f] border border-[#1F1F1F] rounded-lg">
              {/* Project Details */}
              <div className="flex flex-col sm:flex-row font-clash items-center sm:items-start justify-center sm:justify-between border border-[#1F1F1F] rounded-lg p-4 space-y-4 sm:space-y-0">
                <div className="flex-1 text-center">
                  <h4 className="font-light text-white font-sora">Category</h4>
                  <p className="text-[#666666]">{project.category}</p>
                </div>
                <div className="hidden sm:block w-px bg-[#1f1f1f] h-12 mx-4"></div>
                <div className="flex-1 text-center">
                  <h4 className="font-light text-white font-sora">Time Taken</h4>
                  <p className="text-[#666666]">{project.timeTaken}</p>
                </div>
                <div className="hidden sm:block w-px bg-[#1f1f1f] h-12 mx-4"></div>
                <div className="flex-1 text-center">
                  <h4 className="font-light text-white font-sora">Start Date</h4>
                  <p className="text-[#666666]">{project.startDate}</p>
                </div>
                <div className="hidden sm:block w-px bg-[#1f1f1f] h-12 mx-4"></div>
                <div className="flex-1 text-center">
                  <h4 className="font-light text-white font-sora">End Date</h4>
                  <p className="text-[#666666]">{project.endDate}</p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-4 justify-center">
                {project.technologies.map((tech, index) => (
                  <img key={index} src={tech.src} alt={tech.alt} className="w-10 h-10 sm:w-12 sm:h-12" />
                ))}
              </div>

              {/* Methods Used */}
              <div className="flex flex-wrap gap-4 justify-center">
                {project.methods.map((method, index) => (
                  <Chip key={index} className="bg-transparent text-[#A6A6A6] border border-[#272727] rounded-full px-3 py-1 text-xs sm:text-sm font-clash">
                    {method}
                  </Chip>
                ))}
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
