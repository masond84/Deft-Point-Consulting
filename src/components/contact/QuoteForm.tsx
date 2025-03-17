import React, { useState } from "react";
import { Button } from '@nextui-org/react';
import emailjs from "emailjs-com";
import { Modal, Box, Typography } from "@mui/material";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const QuoteForm: React.FC = () => {
  const [budget, setBudget] = useState(0);
  const [status, setStatus] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility state
  const [email, setEmail] = useState<string>(""); // Email state
  const [phone, setPhone] = useState<string>(""); // Phone state
  const [errors, setErrors] = useState<{ email: string; phone: string }>({
    email: "",
    phone: "",
  });

  // Validate email
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Format and validate phone number
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Add dashes based on the phone number format
    let formattedPhone = numericValue;
    if (numericValue.length > 3 && numericValue.length <= 6) {
      formattedPhone = `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
    } else if (numericValue.length > 6) {
      formattedPhone = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`;
    }

    // Check for valid length
    if (numericValue.length < 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be 10 digits",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }

    return formattedPhone;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_kh5mxgh", // Replace with your EmailJS service ID
        "template_ax5eulh", // Replace with your EmailJS template ID
        e.currentTarget, // Form reference
        "cs25hwXJDJ76049Jp" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("success");
          setModalOpen(true);  // Ensure modal opens here
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setStatus("error");
          setModalOpen(true);  // Ensure modal opens here
        }
      );

    // Reset the form fields after submission
    e.currentTarget.reset();
    setBudget(0); // Reset the budget slider
    setEmail(""); // Reset email field
    setPhone(""); // Reset phone field
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#121212] text-white py-40">
      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box 
          className="absolute bg-glass-bg border border-glass-border shadow-xl backdrop-blur-glass p-6 rounded-lg text-center flex flex-col items-center justify-center w-[90%] max-w-md mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4"
        >
          {status === "success" ? (
            <div>
              <Typography 
                id="modal-title"
                className="text-2xl font-bold text-white font-sora"
              >
                Success!
              </Typography>
              <Typography 
                id="modal-description" 
                className="text-sm text-gray-300 font-clash leading-relaxed"
              >
                Your inquiry has been sent successfully. We'll get back to you shortly.
              </Typography>
            </div>
          ) : (
            <div>
              <Typography 
                id="modal-title"
                className="text-2xl font-bold text-white font-sora"
              >
                Oops!
              </Typography>
              <Typography 
                id="modal-description" 
                className="text-sm text-gray-300 font-clash leading-relaxed"
              >
                Something went wrong. Please try again later.
              </Typography>
            </div>
          )}
          <Button
            onPress={() => setModalOpen(false)}
            className="px-6 py-2 bg-black text-white font-sora text-sm font-medium rounded-full hover:bg-black/40 transition"
          >
            Close
          </Button>
        </Box>
      </Modal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-12 px-6">
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-sora">
            Let’s <span className="bg-gradient-to-br from-[#4fadff] via-[#6dc1ff] to-[#0e73e6b9] bg-clip-text text-transparent font-clash italic"> start </span> a winning project together
          </h1>
          <address className="not-italic text-gray-400 space-y-2">
            <p className="font-bold">Deft Point Consulting</p>
            <p>Experience Excellence In</p>
            <p className="font-tusker"><span className="mr-4">•</span> Development</p>
            <p className="font-tusker"><span className="mr-4">•</span> Deployment</p>
            <p className="font-tusker"><span className="mr-4">•</span> Execution</p>
          </address>
          {/* Social Media Section */}
          <div className="flex items-center space-x-4">
            {/* Paragraph */}
            <p className="text-white text-sm font-medium font-clash mr-4">Follow Us On Social Media</p>

            <div className="flex items-center space-x-4">
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
          </div>
        </div>

        {/* Right Section - Form */}
        <form 
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1A1A1A] p-8 rounded-lg shadow-lg"
        >
          <p className="text-gray-300 font-sora">
            A simple conversation is all it takes. Our team looks forward to discussing your project with you and will get back with you right away.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              className="p-4 bg-glass-bg border border-glass-bg shadow-glass rounded-lg text-white placeholder-[#666666] font-clash"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="p-4 bg-glass-bg border border-glass-bg shadow-glass rounded-lg text-white placeholder-[#666666] font-clash"
            />
            <input
              type="email"
              name="company"
              placeholder="Email *"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              required
              className={`p-4 bg-glass-bg border ${ errors.email ? "border-red-300" : "border-glass-bg" } shadow-glass rounded-lg text-white placeholder-[#666666] font-clash`}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
              required
              className={`p-4 bg-glass-bg border ${ errors.phone ? "border-red-300" : "border-glass-bg" } shadow-glass rounded-lg text-white placeholder-[#666666] font-clash`}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="text-gray-400 text-sm font-sora">
              What’s your budget?
            </label>
            <input
              id="budget"
              type="range"
              name="budget"
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
            name="vision"
            placeholder="Describe your vision"
            className="p-4 bg-glass-bg border-glass-bg shadow-glass font-clash rounded-lg border border-[#1F1F1F] text-white placeholder-gray-400 w-full h-32"
          ></textarea>
          <Button
            type="submit"
            className="w-full py-5 bg-gradient-to-br from-[#4fadff] via-[#6dc1ff] to-[#0e73e6b9] text-white font-medium font-sora tracking-widest rounded-lg border border-[#1A1A1A] transition"
          >
            <span className="">Send your Inquiry</span>
            <ArrowRightAltIcon /> 
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
