import React, { useEffect } from "react";
import "../../assets/styles/preloader.css"; // Link your CSS file
import gsap from "gsap";

const Preloader: React.FC = () => {
  useEffect(() => {
    // Counter animation logic
    const counter3 = document.querySelector(".counter-3") as HTMLElement;

    // Create additional number elements for counter-3
    if (counter3) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = j.toString();
          counter3.appendChild(div);
        }
      }
      const finalDiv = document.createElement("div");
      finalDiv.className = "num";
      finalDiv.textContent = "0";
      counter3.appendChild(finalDiv);
    }

    const animateCounter = (counter: HTMLElement, duration: number, delay = 0) => {
      const numHeight = counter.querySelector(".num")?.clientHeight || 0;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;
      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };

    // Run animations
    animateCounter(document.querySelector(".counter-3") as HTMLElement, 5);
    animateCounter(document.querySelector(".counter-2") as HTMLElement, 6);
    animateCounter(document.querySelector(".counter-1") as HTMLElement, 2, 4);

    // GSAP Animations
    gsap.to(".digit", {
      top: "-150px",
      stagger: { amount: 0.25 },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.from(".loader-1", {
      width: 0,
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
      width: 0,
      delay: 1.9,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      delay: 6,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader-2", { x: -75, y: 75, duration: 0.5 }, "<");

    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });

    gsap.to("h1", 1.5, {
      delay: 7,
      y: -80,
      ease: "power4.inOut",
      stagger: { amount: 0.1 },
    });
  }, []);

  return (
    <div>
      <div className="website-content">
        <div className="header">
          <div className="h1">
            <h1>Website</h1>
            <h1>Content</h1>
          </div>
          <div className="header-revealer"></div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-1 bar"></div>
          <div className="loader-2 bar"></div>
        </div>
        <div className="counter">
          <div className="counter-1 digit">
            <div className="num">0</div>
            <div className="num num1offset1">1</div>
          </div>
          <div className="counter-2 digit">
            <div className="num">0</div>
            <div className="num num1offset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit">
            <div className="num">0</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

