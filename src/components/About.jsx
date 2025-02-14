import React, { useRef } from "react";
import "../styles/About.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function About() {
  const circleRef = useRef(null);
  useGSAP(() => {
    let mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger);
    const circle = circleRef.current;
    gsap.from(".about-me-left", {
      y: 300,
      opacity: 0,
      scrollTrigger: {
        scrub: true,

        trigger: ".about-page",
        start: "30% bottom",
        end: "0% top",
      },
    });
    gsap.from(".quote", {
      y: 300,
      opacity: 0,
      scrollTrigger: {
        scrub: true,
        trigger: ".about-page",
        start: "30% bottom",
        end: "0% top",
      },
    });
    gsap.from(".circle", {
      scale: 0.1,
      opacity: 0,
      scrollTrigger: {
        scrub: true,
        trigger: ".about-page",
        start: "30% 80%",
        end: "0% top",
      },
    });
    if (circle) {
      circle.addEventListener("mouseenter", () => {
        gsap.to(circle, {
          color: "black",
          backgroundPosition: "0% 100.1%",
        });
        const tl = gsap.timeline();
        tl.fromTo(
          circle,
          {
            y: 20,
          },
          {
            y: -20,
          }
        );
        tl.to(circle, {
          y: 0,
          duration: 0.3,
        });
      });
      circle.addEventListener("mouseleave", () => {
        gsap.to(circle, {
          color: "white",
          backgroundPosition: "0% 0%",
        });
      });
    }
  }, []);
  return (
    <div id="about" className="about-page">
      <div className="about-me-left">
        <p>A creative Web-Developer bringing great ideas into reality.</p>
      </div>
      <div className="about-me-right">
        <div className="quote">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web development world.
          </p>
        </div>
        <a href="https://portfolio-opal-alpha-80.vercel.app/">
          <div className="circle" ref={circleRef}>
            <h1>About Me</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
