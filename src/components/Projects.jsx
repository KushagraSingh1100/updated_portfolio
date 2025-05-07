import React, { useRef } from "react";
import "../styles/Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import news from "../assets/imgs/news.png";
import portfolio from "../assets/imgs/portfolio.png";
import event from "../assets/imgs/event.png";
import textTool from "../assets/imgs/text.png";
import weather from "../assets/imgs/weather.png";
import youtube from "../assets/imgs/youtube.jpeg";

function Projects() {
  const links = [
    "https://github.com/KushagraSingh1100/Link-Shortner",
    "https://github.com/KushagraSingh1100/eventpulse",
    "https://github.com/KushagraSingh1100/IITR-BitByBit",
    "https://github.com/KushagraSingh1100/Youtube-Clone",
  ];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".projects-heading", {
      y: 200,
      opacity: 0.5,
      scrollTrigger: {
        scrub: true,
        trigger: ".projects-page",
        end: "10% 60%",
      },
    });

    const myAnimation = gsap.from(".items", {
      y: 200,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        scrub: true,
        trigger: ".projects-page",
        start: "-20% 30%",
        end: "40% 60%",
        onLeave: (self) => {
          myAnimation.kill();
          self.kill();
        },
      },
      onComplete: () => {
        myAnimation.kill();
      },
    });

    const myAnimation1 = gsap.from(".projects-items hr", {
      y: 200,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        scrub: true,
        trigger: ".projects-page",
        end: "60% 60%",
        onLeave: (self) => {
          myAnimation1.kill();
          self.kill();
        },
      },
      onComplete: () => {
        myAnimation1.kill();
      },
    });

    gsap.to(".img-carosel-1", {
      x: 200,
      scrollTrigger: {
        scrub: true,
        trigger: ".image-div",
        end: "100% 60%",
      },
    });
    gsap.to(".img-carosel-2", {
      x: -220,
      scrollTrigger: {
        scrub: true,
        trigger: ".image-div",
        end: "110% 60%",
      },
    });
  });

  return (
    <div id="projects" className="projects-page">
      <div className="projects-heading">
        <h6>Projects</h6>
      </div>
      <hr />
      <div className="projects-items">
        {[
          {
            title: "Rapid Shortener",
            desc: "A fast and minimal URL shortening tool that creates compact links with click tracking, designed for simplicity, speed, and a seamless user experience.",
          },
          {
            title: "Event Pulse",
            desc: "A dynamic event management web app that allows users to discover, create, and manage events seamlessly. Built with a responsive UI and real-time updates for a smooth user experience.",
          },
          {
            title: "Free Work",
            desc: "A freelance marketplace platform with features like escrow payment system, milestone tracking, and secure client-freelancer collaboration. Designed for smooth and trusted project management.",
          },
          {
            title: "YouTube Clone",
            desc: "A video streaming web app replicating core YouTube features like video playback, search, categories, and responsive UI using the YouTube Data API.",
          },
        ].map((project, index) => (
          <React.Fragment key={index}>
            <a href={links[index]}>
              <div className="items">
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
              </div>
            </a>
            <hr />
          </React.Fragment>
        ))}
      </div>
      <div className="image-div">
        <div className="img-carosel-1">
          <img src={news} alt="" />
          <img src={textTool} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className="img-carosel-2">
          <img src={portfolio} alt="" />
          <img src={weather} alt="" />
          <img src={event} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
