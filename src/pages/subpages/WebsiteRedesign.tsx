import React from 'react';

const WebsiteRedesign: React.FC = () => {
  return (
    <section className="text-white py-12 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#252525] min-h-screen">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 font-sora">Website Redesign</h1>
        <p className="text-lg font-light text-gray-300">
          Full-service custom website development solutions to help your business stand out and grow.
        </p>
      </div>

      {/* Overview Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Our custom website development service covers everything from initial design to deployment. We use cutting-edge frameworks like React.js, Django, and Laravel to ensure your site is modern, fast, and scalable. Whether you're starting from scratch or upgrading an existing website, our team ensures every detail is tailored to your business needs.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-3">
          <li>Responsive and mobile-first design to ensure cross-device compatibility.</li>
          <li>Custom-built features to align with your business goals.</li>
          <li>Integration with third-party tools like CRMs, analytics, or e-commerce platforms.</li>
          <li>SEO-friendly development to maximize visibility.</li>
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Starting at <span className="font-bold text-white">$400</span>. Pricing may vary depending on project complexity and specific requirements.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          For a detailed quote, feel free to <a href="/contact" className="text-blue-400 underline">contact us</a>.
        </p>
      </div>
    </section>
  );
};

export default WebsiteRedesign;
