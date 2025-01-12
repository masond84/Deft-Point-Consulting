import React from "react";
import { Button } from "@nextui-org/react";
import { TiArrowForwardOutline } from "react-icons/ti";


const ContactByPhone: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-center text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#f0f0f0] to-[#ffffffcc] font-bold mb-6">Contact Us By Phone</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-8 sm:px-0">
        {[
          { title: "General Enquiries", phone: "+1-XXX-XXX-XXXX" },
          { title: "Business Collaborations", phone: "+1-XXX-XXX-XXXX" },
          { title: "Free Consultation", phone: "+1-XXX-XXX-XXXX" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-lg bg-[#1A1A1A]/20 border border-[#FFFFFF1A] flex items-center justify-between"
          >
            <div>
              <h3 className="text-sm text-gray-300 font-sora">{item.title}</h3>
              <p className="text-white font-clash mt-1">{item.phone}</p>
            </div>
            <Button
              className="flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-[#0e0e0e] to-[#4d4d4d]/40"
            >
              <TiArrowForwardOutline className="text-white text-xl" /> {/* Replace the arrow with an icon */}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactByPhone;
