import React from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
            <title>Contact Us | Deft Point Consulting</title>
            <meta name="description" content="Reach out to us for inquiries, quotes, or questions about our services and processes. We offer free quotes, templates, and consultation services as needed." />
        </Helmet>
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