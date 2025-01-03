import React, { useState } from "react";
import { Button } from '@nextui-org/react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';


const QuoteForm: React.FC = () => {
  const [budget, setBudget] = useState(0);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#121212] text-white py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-12 px-6">
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-sora">
            Let’s <span className="bg-gradient-to-br from-[#4fadff] via-[#6dc1ff] to-[#0e73e6b9] bg-clip-text text-transparent font-clash italic"> start </span> a winning project together
          </h1>
          <address className="not-italic text-gray-400 space-y-2">
            <p className="font-bold">FLUID22</p>
            <p>801-206-9678</p>
            <p>2118 East 3900 South</p>
            <p>Suite 200</p>
            <p>Holladay, UT 84124</p>
          </address>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
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

        {/* Right Section - Form */}
        <form className="space-y-6 bg-[#1A1A1A] p-8 rounded-lg shadow-lg">
          <p className="text-gray-300 font-sora">
            A simple conversation is all it takes. Our team looks forward to discussing your project with you and will get back with you right away.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name *"
              className="p-4 bg-glass-bg border border-glass-bg shadow-glass rounded-lg text-white placeholder-[#666666] font-clash"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-4 bg-glass-bg border border-glass-bg shadow-glass rounded-lg text-white placeholder-[#666666] font-clash"
            />
            <input
              type="email"
              placeholder="Email *"
              className="p-4 bg-glass-bg border border-glass-bg shadow-glass rounded-lg text-white placeholder-[#666666] font-clash"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-4 bg-glass-bg border border-glass-bg shadow-glass rounded-lg text-white placeholder-[#666666] font-clash"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="text-gray-400 text-sm font-sora">
              What’s your budget?
            </label>
            <input
              id="budget"
              type="range"
              min="0"
              max="2500"
              step="100"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full bg-glass-bg border border-glass-bg shadow-glass rounded-lg text-white placeholder-[#666666] font-clash"
            />
            <p className="text-gray-400 font-clash">$ {budget.toLocaleString()}</p>
          </div>
          <textarea
            placeholder="Describe your vision"
            className="p-4 bg-glass-bg border-glass-bg shadow-glass font-clash rounded-lg border border-[#1F1F1F] text-white placeholder-gray-400 w-full h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-br from-[#4fadff] via-[#6dc1ff] to-[#0e73e6b9] text-white font-medium font-sora tracking-widest rounded-lg border border-[#1A1A1A] transition"
          >
            Send your Inquiry ➡
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
