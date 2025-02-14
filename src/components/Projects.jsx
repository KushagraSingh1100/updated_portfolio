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
    "https://github.com/KushagraSingh1100/Youtube-Clone",
    "https://github.com/KushagraSingh1100/Minimalist-News",
    "https://github.com/KushagraSingh1100/TextTools",
    "https://github.com/KushagraSingh1100/Weather-App",
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
    <div className="projects-page">
      <div className="projects-heading">
        <h6>Projects</h6>
      </div>
      <hr />
      <div className="projects-items">
        {[
          {
            title: "YouTube Clone",
            desc: "A working YouTube clone made using React.js and YouTube API.",
          },
          {
            title: "Minimalist News",
            desc: "A minimalistic news app bringing the latest news according to your liking.",
          },
          {
            title: "Text Tool",
            desc: "A helpful text manipulation app made using React.js.",
          },
          {
            title: "Weather App",
            desc: "A weather app bringing weather details worldwide with a sleek UI.",
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
