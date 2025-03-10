import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto mt-16">
        {/* Header Section */}
        <div className="text-center border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mt-2">Last Updated April 22, 2024</p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Main Content */}
          <div className="col-span-2">
            <p className="text-gray-300">
              At Deft Point, we respect customers' need for privacy. We offer our services to users either directly or through a reseller.
              By using or accessing our website and services, you accept the policies outlined in this Privacy Notice.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
            <p className="text-gray-400 mt-2">
              We collect information that you provide directly, from third parties, and through automated tracking technologies.
            </p>

            <h2 className="text-2xl font-semibold mt-6">How We Use Information</h2>
            <p className="text-gray-400 mt-2">
              We use collected data to improve user experience, provide support, and ensure security on our platform.
            </p>

            <h2 className="text-2xl font-semibold mt-6">How We Share Information</h2>
            <p className="text-gray-400 mt-2">
              We do not sell your personal data. Information may be shared with trusted third-party providers for service improvement.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Your Rights & Choices</h2>
            <p className="text-gray-400 mt-2">
              You can request access to your data, opt-out of marketing communications, or request deletion of your personal information.
            </p>
          </div>

          {/* Sidebar Navigation */}
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold">On this page</h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white">About Deft Point</a></li>
              <li><a href="#info-collect" className="hover:text-white">Information We Collect</a></li>
              <li><a href="#how-use" className="hover:text-white">How We Use Information</a></li>
              <li><a href="#sharing" className="hover:text-white">How We Share Information</a></li>
              <li><a href="#rights" className="hover:text-white">Your Rights & Choices</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
