import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const SocialMedia: React.FC = () => {
  return (
    <section className="py-8 px-8 text-center bg-gradient-to-b from-[#121212]/10 to-[#0F0F0F] text-white">
      {/* Header Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-sora mb-4">Join Us on Social Media</h3>
        <p className="text-gray-400 text-md font-clash">
          Stay updated with our latest projects, industry insights, and company news by following us on social media.
        </p>
      </div>

      {/* Card Section */}
      <Card
        className="relative border border-[#1F1F1F] rounded-glass p-8 bg-[linear-gradient(220deg,_#121212,_#181818_60%,_#1F1F1F)] max-w-4xl mx-auto"
      >
        <CardBody className="flex flex-col items-center space-y-6">
          {/* Social Media Buttons */}
          <div className="flex items-center space-x-6">
            {/* LinkedIn Button */}
            <Button 
              className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
              onPress={() => window.open("https://www.linkedin.com/company/deft-point-consulting", "_blank")}
            >
              <BsLinkedin className="text-white text-xl" />
            </Button>
            {/* Twitter Button */}
            <Button 
              className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
              onPress={() => window.open("https://x.com/deftpoint", "_blank")}
            >
              <BsTwitter className="text-white text-xl" />
            </Button>
            {/* Facebook Button */}
            <Button 
              className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
              onPress={() => window.open("https://www.facebook.com/profile.php?id=61572559884891", "_blank")}
            >
              <BsFacebook className="text-white text-xl" />
            </Button>
            {/* Instagram Button */}
            <Button 
              className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
              onPress={() => window.open("https://www.instagram.com/deftpointconsulting/", "_blank")}
            >
              <BsInstagram className="text-white text-xl" />
            </Button>
          </div>

          {/* Thank You Header */}
          <h4 className="text-xl font-medium tracking-wide font-sora">Thank You!</h4>
          <p className="text-gray-300 text-md font-clash max-w-lg text-center">
            For considering Deft Point. We look forward to connecting with you and being part of your next success!
          </p>
        </CardBody>
      </Card>
    </section>
  );
};

export default SocialMedia;
