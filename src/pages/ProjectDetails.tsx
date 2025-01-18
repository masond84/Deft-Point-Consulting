import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const projects = [
  {
    id: 'cleaning-services',
    title: 'Professional Cleaning Services Website',
    category: 'Web App Development',
    date: 'September 2024',
    description: 'Developed a professional website to increase the online visibility of Minas Cleaning Services, a cleaning company.',
    details: 'Here you can add more detailed content about this project.',
  },
  {
    id: 'custom-crm-setup',
    title: 'Custom CRM Setup With HubSpot',
    category: 'Marketing & Data Solutions',
    date: 'June 2024',
    description: 'Designed a custom CRM using HubSpot and WordPress, automating lead capture and streamlining retail outreach.',
    details: 'Here you can add more detailed content about this project.',
  },
  {
    id: 'edutech-seo-optimization',
    title: 'SEO Optimization For EduTech App',
    category: 'Marketing & Data Solutions',
    date: 'June 2024',
    description: 'Implemented a modern car detailing website template, with figma and modern UI components - building online brand presence.',
    details: 'Here you can add more detailed content about this project.',
  },
  {
    id: 'mobile-detailing-template',
    title: '',
    category: 'Design & Branding',
    date: 'Decemeber 2024',
    description: 'Implemented a modern car detailing website template, with figma and modern UI components - building online brand presence.',
    details: ''
  }
  // Add the rest of your projects
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div className="text-white p-8 bg-[#0F0F0F]">
        <Helmet>
            <title>{project.title} | My Portfolio</title>
            <meta name="description" content={project.description} />
        </Helmet>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-400">{project.category}</p>
        <p className="text-gray-400">{project.date}</p>
        <p className="mt-4">{project.description}</p>
        <p className="mt-4">{project.details}</p>
    </div>
  );
};

export default ProjectDetails;
