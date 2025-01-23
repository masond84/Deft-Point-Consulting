import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ClockIcon from '../../assets/images/ClockIconFull.svg';
import SecurityIcon from '../../assets/images/SecurityIcon.svg';

const AdditionalInfo: React.FC = () => {
  const infoCards = [
    {
      title: "Our Response",
      content:
        "We prioritize timely responses, and are committed to addressing your project needs promptly. We hope to build a partnership and trust with each client, and thank you again for working with us.",
      icon: ClockIcon,
    },
    {
      title: "Privacy Assurance",
      content:
        "Your privacy is our priority. We keep your data secure, and it is solely used for your inquries, and never shared with third-parties without consent.",
      icon: SecurityIcon,
    },
  ];


  return (
    <section className="py-12 px-8 bg-gradient-to-b from-[#121212]/95 to-[#121212] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {infoCards.map((card, index) => (
          <Card
            key={index}
            className="relative border border-[#1F1F1F] rounded-glass p-6 bg-[linear-gradient(220deg,_#121212,_#181818_60%,_#1F1F1F)]"
          >
            {/* Card Header */}
            <CardHeader className="flex items-center space-x-4 pb-4">
              <img
                src={card.icon}
                alt={`${card.title} Icon`}
                className="w-12 h-12"
              />
              <h3 className="text-lg font-medium font-sora tracking-wider text-white">
                {card.title}
              </h3>
            </CardHeader>

            {/* Card Body */}
            <CardBody>
              <p className="text-gray-300 text-sm font-sora leading-relaxed">
                {card.content}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AdditionalInfo;
