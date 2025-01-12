import React from 'react';
import Hero from '../components/contact/Hero';
import ContactCTA from '../components/layout/ContactCTA';
import ContactByEmail from "../components/contact/ContactByEmail";
import ContactByPhone from "../components/contact/ContactByPhone";
import InquiryForm from "../components/contact/InquiryForm";
import AdditionalInfo from "../components/contact/AdditionalInfo";
import SocialMedia from '../components/contact/SocialMedia'
import CallToAction from '../components/layout/CallToAction';

const Contact: React.FC = () => {
    return (
      <div className="bg-[#121212] text-white">
        <Hero />

        {/* Inquiry Form */}
        <InquiryForm />

        {/* Contact By Email */}
        <ContactByEmail />
  
        {/* Contact By Phone */}
        <ContactByPhone />

        {/* Contact CTA */}
        <ContactCTA />
  
        {/* Additional Information */}
        <AdditionalInfo />
  
        {/* Social Media Section */}
        <SocialMedia />

      </div>
    );
  };

export default Contact;