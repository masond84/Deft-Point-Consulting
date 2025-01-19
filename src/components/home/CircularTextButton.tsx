import { useLocation } from "react-router-dom"; // For detecting the current path
import { FaArrowDown } from "react-icons/fa"; // Use React Icons for the arrow-down icon

const CircularTextButton = () => {
    const location = useLocation();

    const handleScroll = () => {
        let targetId = "";

        // Determine the target section based on the current route
        if (location.pathname === "/") {
        targetId = "reasons-to-choose"; // ID of the section on the landing page
        } else if (location.pathname === "/about") {
        targetId = "about-section"; // ID of the section on the about page
        }

        // Scroll to the determined section if it exists
        const target = document.getElementById(targetId);
        if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div 
            className="relative w-40 h-40 flex items-center justify-center"
            onClick={handleScroll}
        >
            {/* Circular Text */}
            <div className="absolute inset-0 animate-spin-slow">
                <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                >
                {/* Circle Path */}
                <path
                    id="circlePath"
                    d="M 50,50 m -25,0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
                    fill="none"
                />
                {/* Text along the circle */}
                <text fill="white" fontSize="6" fontFamily="Arial" fontWeight="bold">
                    <textPath href="#circlePath" startOffset="50%">
                    Get To Know What We Do •  •
                    </textPath>
                </text>
                </svg>
            </div>

            {/* Center Icon */}
            <div className="relative border border-glass-bg bg-gradient-to-br from-[#4fadff]/95 via-[#6dc1ff]/85 to-[#0e73e6b9] p-4 rounded-full shadow-lg transition-all duration-300 hover:from-[#6dc1ff]/95 hover:via-[#0e73e6b9]/85 hover:to-[#4fadff]/95 cursor-pointer">
                <FaArrowDown className="text-white text-xl" />
            </div>
        </div>
    );
};

export default CircularTextButton;
