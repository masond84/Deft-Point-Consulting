import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What services does Deft Point provide?",
      answer:
        "We offer web development, consulting services, SEO, mobile-first designs, and marketing strategies to help businesses grow.",
    },
    {
      question: "How do you ensure timely project delivery?",
      answer:
        "Our team adheres to strict timelines and milestones while maintaining a transparent communication process.",
    },
    {
      question: "Can your solutions be customized for specific business needs?",
      answer:
        "Yes, all our solutions are tailored to suit the unique requirements of each client.",
    },
    {
      question: "Do you provide support after project completion?",
      answer:
        "Absolutely. We offer ongoing support and maintenance to ensure the continued success of your projects.",
    },
  ];

  return (
    <section 
      className="py-16 px-8 bg-[linear-gradient(180deg,_#1F1F1F,_#181818_50%,_#0F0F0F)] text-white"
    >
      {/* Header and Paragraph Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Header & Description */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold mb-4 font-sora leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-gray-300 font-light font-clash leading-loose">
            Have questions? We’ve got answers. Learn more about how Deft Point works and how we can help you achieve your goals.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="w-full mx-w-md mx-auto">
          <Accordion 
            variant="splitted"
            className="rounded-lg bg-transparent"

          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={`Accordion ${index + 1}`}
                title={faq.question}
                className="hover:bg-[#1A1A1A] transition-all px-4 py-3 text-gray-200 text-md font-sora rounded-lg"
              >
                <p className="px-4 py-2 text-gray-400 text-md font-clash leading-loose">
                  {faq.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
