import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';

const Showcase: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (cardId: number): void => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-12 bg-[#121212] text-white">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold font-sora leading-tight">
          Projects <span className="text-gray-400">Showcase</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed font-clash mt-4">
          Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
        </p>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <Card className="bg-[#1A1A1A] shadow-lg rounded-lg border border-[#1F1F1F]">
          <CardHeader className="p-0">
            <img
              src="https://via.placeholder.com/600x300" // Replace with actual image
              alt="Project Thumbnail"
              className="rounded-t-lg object-cover w-full"
            />
          </CardHeader>
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">E-Commerce Revolution</h3>
              <Button
                onClick={() => toggleCard(1)}
                className="text-gray-400 hover:text-white"
                variant="ghost"
              >
                {expandedCard === 1 ? 'Show Less' : 'Show More'} ↓
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#222222] text-gray-400 px-3 py-1 rounded-md">E-commerce</span>
              <span className="bg-[#222222] text-gray-400 px-3 py-1 rounded-md">Web Design</span>
              <span className="bg-[#222222] text-gray-400 px-3 py-1 rounded-md">Development</span>
            </div>
            {expandedCard === 1 && (
              <div className="space-y-4">
                <p className="text-gray-400">
                  A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white">Category</h4>
                    <p className="text-gray-400">E-commerce</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Time Taken</h4>
                    <p className="text-gray-400">4 Months</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Start Date</h4>
                    <p className="text-gray-400">Jan 16, 2023</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">End Date</h4>
                    <p className="text-gray-400">May 16, 2023</p>
                  </div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>

        {/* Card 2 */}
        <Card className="bg-[#1A1A1A] shadow-lg rounded-lg border border-[#1F1F1F]">
          <CardHeader className="p-0">
            <img
              src="https://via.placeholder.com/600x300" // Replace with actual image
              alt="Project Thumbnail"
              className="rounded-t-lg object-cover w-full"
            />
          </CardHeader>
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">TechGuru Platform</h3>
              <Button
                onClick={() => toggleCard(2)}
                className="text-gray-400 hover:text-white"
                variant="ghost"
              >
                {expandedCard === 2 ? 'Show Less' : 'Show More'} ↓
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#222222] text-gray-400 px-3 py-1 rounded-md">Technology</span>
              <span className="bg-[#222222] text-gray-400 px-3 py-1 rounded-md">Platform</span>
              <span className="bg-[#222222] text-gray-400 px-3 py-1 rounded-md">Development</span>
            </div>
            {expandedCard === 2 && (
              <div className="space-y-4">
                <p className="text-gray-400">
                  A cutting-edge platform for technology enthusiasts, designed to streamline workflows and enhance collaboration among teams.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white">Category</h4>
                    <p className="text-gray-400">Technology</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Time Taken</h4>
                    <p className="text-gray-400">6 Months</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Start Date</h4>
                    <p className="text-gray-400">Feb 1, 2023</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">End Date</h4>
                    <p className="text-gray-400">Aug 1, 2023</p>
                  </div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Showcase;