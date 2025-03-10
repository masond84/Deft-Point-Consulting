import React, { useEffect, useState, useRef } from "react";
import { Card, CardBody, CardFooter, Button, Link } from "@nextui-org/react";
import { useNavigate, useLocation } from "react-router-dom";

// Import Components
import ProjectCard from '../components/projects/ProjectCard';

// Import assets
import CardImage from '../assets/images/DropdownCardImage2.jpg'
import AbstractDesignSvg from '../assets/AbstractDesign.svg?url';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs"; // Scroll up icon

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  timeTaken: string;
  startDate: string;
  endDate: string;
  technologies: { _id: string; src: string; alt: string }[];
  methods: string[];
}

const AllProjects: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [projects, setProjects] = useState<Project[]>([]);
    const [ loading, setLoading] = useState(true);
    const [ error, setError ] = useState("");

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

    // Reference for the header section to scroll back to
    const headerRef = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<{ [key: string]: HTMLDivElement | null}>({});

    // Fetch Projects from Backend
    useEffect(() => {
      fetch(`${API_BASE_URL}/projects`)
        .then(response => response.json())
        .then((data) => {
          const formattedProjects = data.map((project: any) => ({
            id: project._id?.toString() || "", // Ensure ID is always a string
            title: project.title,
            description: project.description,
            image: project.image,
            tags: project.tags,
            category: project.category,
            timeTaken: project.timeTaken,
            startDate: project.startDate,
            endDate: project.endDate,
            technologies: project.technologies.map((tech: any) => ({
              src: tech.src,
              alt: tech.alt,
            })),
            methods: project.methods,
          }));
    
          setProjects(formattedProjects);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching projects:", error);
          setError("Failed to load projects. Please try again later.");
          setLoading(false);
        });
    }, []);

    // Scroll to project if a query parameter is present
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const scrollToId = params.get("scrollTo");

      if (scrollToId) {
        setTimeout(() => {
          const targetElement = document.getElementById(scrollToId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100); // Delay to allow rendering
      }
    }, [location.search, projects]); // Run this after projects are loaded

    // Scroll to header function
    const scrollToTop = () => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    return(
        <section 
          className="py-8 px-6 min-h-screen"
          style={{
            background: 'linear-gradient(285deg, #0F0F0F 60%, #0f0f0f98 92%)',
            overflow: 'hidden',
          }}
        >
          
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Large Hero Card */}
            <Card 
              className="md:col-span-2 bg-glass-bg shadow-glass backdrop-blur-glass rounded-lg border border-glass-border p-6 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center"
              isHoverable
            >
              {/* Background Overlay */}
              <div
                className="absolute inset-0 z-0 w-full h-full min-h-[250px]"
                style={{
                  backgroundImage: `url(${AbstractDesignSvg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.9, 
                }}
              ></div>

              <CardBody className="relative z-10 text-white flex flex-col md:flex-row justify-between items-start w-full h-full">
                {/* Left aligned content */}
                <div className="w-full md:w-3/4">
                  <h1 className="text-2xl md:text-3xl font-semibold font-sora leading-tight">
                    Start Exploring Our Work
                  </h1>
                  <p className="text-lg text-gray-300 mt-3 font-clash">
                    Discover a selection of our best work, where we transform ideas into high-performing digital experiences.
                  </p>
                </div>

                {/*Right Aligned Button */}
                <div className="w-full md:w-1/4 flex flex-col justify-end items-end h-full">
                  <div className="flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#1A1A1A]/40 transition">
                    <Link 
                      className="text-white text-sm font-medium font-sora pr-4 cursor-default"
                    >
                      View Projects
                    </Link>
                    <Button 
                      onPress={scrollToTop}
                      className="w-12 h-2 p-4 text-white text-sm rounded-full border border-glass-bg transition-colors font-semibold tracking-wide font-clash"
                      style={{
                        backgroundImage: `linear-gradient(150deg, #4fadff 20%, #6dc1ff 55%, #0e73e6b9 100%)`,
                      }}
                    >
                      <BsChevronDoubleDown />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Two Smaller Cards Below */}
            <Card 
              className="md:col-span-1 w-full bg-glass-bg-dark shadow-glass backdrop-blur-glassmorphism rounded-lg border border-glass-border p-6 text-white relative"
              isHoverable
            >
              {/* Background Overlay */}
              <div
                className="absolute inset-0 z-0 w-full h-full min-h-[250px]"
                style={{
                  backgroundImage: `url(${AbstractDesignSvg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.99, 
                }}
              ></div>
              <CardBody className="relative z-10">
                <h3 className="text-xl font-semibold font-sora">Designed for Impact</h3>
                <p className="text-gray-300 mt-3 font-clash">
                  Our projects focus on clean UI, optimized performance, and intuitive experiences.
                </p>
              </CardBody>
              <CardFooter className="flex justify-start pt-4">
                <div className="flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#1A1A1A]/40 transition">
                  <Link className="text-white text-sm font-medium font-sora pr-4 cursor-default">
                    Learn More
                  </Link>
                  <Button 
                    className="w-12 h-2 p-4 bg-black rounded-full flex items-center justify-center"
                  >
                    <ArrowRightAltIcon />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card 
              className="md:col-span-1 w-full bg-glass-bg shadow-glass backdrop-blur-glassmorphism rounded-lg border border-glass-border p-6 text-white relative"
              isHoverable
            >
              {/* Background Overlay */}
              <div
                className="absolute inset-0 z-0 w-full h-full min-h-[250px]"
                style={{
                  backgroundImage: `url(${AbstractDesignSvg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.6, 
                }}
              ></div>
              <CardBody className="relative z-10">
                <h3 className="text-xl font-semibold font-sora">Built for Scalability</h3>
                <p className="text-gray-300 mt-3 font-clash">
                  We ensure every project is designed to scale with your business needs.
                </p>
              </CardBody>
              <CardFooter className="flex justify-start pt-4">
                <div className="flex items-center bg-[#1A1A1A]/20 border border-[#1F1F1F] rounded-full px-5 py-2 space-x-2 hover:bg-[#1A1A1A]/40 transition">
                  <Link className="text-white text-sm font-medium font-sora pr-4 cursor-default">
                    See How
                  </Link>
                  <Button 
                    className="w-12 h-2 p-4 bg-black rounded-full flex items-center justify-center"
                  >
                    <ArrowRightAltIcon />
                  </Button>
                </div>
              </CardFooter>
            </Card>                        
          </div>

          {/* Projects Grid */}
          <div className="w-full max-w-5xl flex flex-col gap-8 mx-auto">
            {/* Header Section */}
            <div ref={headerRef} className="text-center max-w-3xl mx-auto px-12 sm:px-16 md:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sora leading-snug sm:leading-tight text-white">
                  Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b4b4b4] to-[#e4e4e4]">Portfolio of Projects</span>
              </h2>
              <p className="text-gray-300 text-md font-light max-w-lg mx-auto font-sora leading-loose">
                Browse through our latest projects spanning web development, UI/UX design, and innovative digital solutions.
              </p>
            </div>


            {/* Loading/Error Handling */}
            {loading ? (
                <p className="text-gray-400 text-center">Loading projects...</p>
            ) : error ? (
                <p className="text-red-400 text-center">{error}</p>
            ) : (
                projects.map((project) => (
                  <div key={project.id} ref={(el) => (projectRefs.current[project.id] = el)}>
                    <ProjectCard project={project} />
                  </div>
                ))
            )}
          </div>

          {/* Scroll To Top Button */}
          <div className="inset-0 flex items-center justify-center mt-10">
            <Button
              onPress={scrollToTop}
              className="px-6 py-3 rounded-full border border-[#262626] bg-[#1A1A1A]/20 text-white font-sora hover:bg-[#1A1A1A]/40 text-sm font-light flex items-center justify-center"
            >
              Scroll to Top <BsChevronDoubleUp className="ml-2" />
            </Button>
          </div>
        </section>
    )
};

export default AllProjects;