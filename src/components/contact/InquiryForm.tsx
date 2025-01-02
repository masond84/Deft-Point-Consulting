import React from "react";
import { Button } from "@nextui-org/react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const InquiryForm: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-xl font-semibold mb-4 text-white font-sora">Online Inquiry Form</h2>
      <p className="text-center text-gray-300 mb-8 font-sora text-sm">
        Please fill in the following details, and we'll get back to you within 24 hours.
      </p>
      <div 
        className="max-w-5xl mx-auto p-10 rounded-xl bg-[#1A1A1A]/20 border border-[#FFFFFF1A] text-white"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)", // Optional: slightly transparent border
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.8)", // Optional: subtle shadow for depth
        }}
      >
        <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Name", "Email", "Phone Number", "Company / Organization Name"].map(
            (placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                className="p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
              />
            )
          )}
          {["Select Service", "Subject"].map((placeholder, index) => (
            <select
              key={index}
              className="p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
            >
              <option>{placeholder}</option>
            </select>
          ))}
          <textarea
            placeholder="Enter your Message"
            className="col-span-1 md:col-span-2 p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
          ></textarea>

          {/* Button and Social Media Section */}
          <div className="col-span-1 md:col-span-2 flex items-center">
            {/* Inquiry Button */}
            <Button
              className="bg-transparent border border-[#FFFFFF1A] text-white font-normal py-6 px-6 rounded-lg font-sora flex-grow mr-12"
            >
              Send your Inquiry ➡
            </Button>

            {/* Social Media Section */}
            <div className="flex items-center space-x-4">
              {/* Paragraph */}
              <p className="text-white text-sm font-medium font-clash mr-4">Follow Us On Social Media</p>
              <div className="flex items-center space-x-4">
                {/* LinkedIn Button */}
                <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                  <BsLinkedin className="text-white text-xl" />
                </Button>
                {/* Twitter Button */}
                <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                  <BsTwitter className="text-white text-xl" />
                </Button>
                {/* Facebook Button */}
                <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                  <BsFacebook className="text-white text-xl" />
                </Button>
                {/* Instagram Button */}
                <Button className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40">
                  <BsInstagram className="text-white text-xl" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
