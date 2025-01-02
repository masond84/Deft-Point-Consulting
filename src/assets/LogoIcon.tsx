import * as React from "react";

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <circle cx={4.894} cy={4.394} r={4.394} fill="#1E1E1E" opacity={0.7} />
    <circle cx={4.894} cy={16} r={4.394} fill="#1E1E1E" opacity={0.8} />
    <circle cx={4.894} cy={27.606} r={4.394} fill="#1E1E1E" />
    <circle cx={16.5} cy={4.394} r={4.394} fill="#1E1E1E" opacity={0.7} />
    <circle cx={16.5} cy={27.606} r={4.394} fill="#1E1E1E" />
    <circle cx={28.106} cy={4.394} r={4.394} fill="#1E1E1E" opacity={0.7} />
    <circle cx={28.106} cy={16} r={4.394} fill="#1E1E1E" opacity={0.8} />
    <circle cx={28.106} cy={27.606} r={4.394} fill="#1E1E1E" />
  </svg>
);

export default LogoIcon;
