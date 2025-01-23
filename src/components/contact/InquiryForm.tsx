import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Modal, Box, Typography } from "@mui/material";
import emailjs from 'emailjs-com'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsFillSendFill } from "react-icons/bs";

const InquiryForm: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility state
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
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

  // Format phone number
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Add dashes based on the phone number format
    if (numericValue.length <= 3) return numericValue;
    if (numericValue.length <= 6) {
      return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
    }
    return `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`;
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_kh5mxgh", // Replace with your EmailJS service ID
        "template_timmk3n", // Replace with your EmailJS template ID
        e.currentTarget, // Form reference
        "cs25hwXJDJ76049Jp" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("success");
          setModalOpen(true); // Open the modal
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setStatus("error");
          setModalOpen(true); // Open the modal
        }
      );
    // Reset the form fields after submission
    e.currentTarget.reset();
  };

  return (
    <section id="inquiryForm" className="py-8">
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

      <div className="text-center mb-8 max-w-3xl mx-auto px-8 sm:px-12 md:px-0">
        <h2 className="text-center text-2xl md:text-3xl  font-semibold mb-4 text-white font-sora">Feel Free To Contact Us</h2>
        <p className="text-center text-gray-300 mb-8 font-sora text-sm">
          Please fill in the following details, and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Form Container */}
      <div 
        className="max-w-5xl mx-6 sm:mx-auto p-10 rounded-xl bg-[#1A1A1A]/20 border border-[#FFFFFF1A] text-white px-4 sm:px-10"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)", // Optional: slightly transparent border
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.8)", // Optional: subtle shadow for depth
        }}
      >
        <form 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}  
        >
          {/* Input Fields */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
          />
          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={`p-4 bg-glass-bg-2 rounded-lg border ${ errors.email ? "border-red-300" : "border-glass-bg" } text-white placeholder-[#666666] font-clash`}
          />
          
          {/* Phone Field */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => {
              const formattedPhone = formatPhoneNumber(e.target.value);
              setPhone(formattedPhone);
  
              // Check for invalid phone number length
              if (formattedPhone.replace(/\D/g, "").length < 10) {
                setErrors((prev) => ({
                  ...prev,
                  phone: "Phone number must be 10 digits",
                }));
              } else {
                setErrors((prev) => ({ ...prev, phone: "" }));
              }
            }}
            className="p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
          />
          <input
            type="text"
            name="company"
            placeholder="Company / Organization Name"
            required
            className="p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
          />
          <select
            name="service"
            className="p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
          >
            <option value="">Select Service</option>
            <option value="Website & Application Development">Website & Application Development</option>
            <option value="Consulting Services">Consulting Services</option>
            <option value="Design & Branding">Design & Branding</option>
            <option value="Marketing & Data Solutions">Marketing & Data Solutions</option>
          </select>
          <textarea
            name="message"
            placeholder="Enter your Message"
            required
            className="col-span-1 md:col-span-2 p-4 bg-glass-bg-2 rounded-lg border border-glass-bg text-white placeholder-[#666666] font-clash"
          ></textarea>
          
          {/* Button and Social Media Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Inquiry Button */}
            <Button
              type="submit"
              className="bg-transparent border border-[#FFFFFF1A] text-white font-normal py-6 px-6 rounded-lg font-sora flex-grow sm:mr-12"
            >
              <span>Send your Inquiry</span>
              <BsFillSendFill
                className="text-lg transform rotate-45 text-white" // Rotate the icon slightly
              />
            </Button>

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
                  onPress={() => window.open("", "_blank")}
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
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
