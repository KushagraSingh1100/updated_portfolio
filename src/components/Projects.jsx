import React from "react";
import "../styles/Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Projects() {
  useGSAP(() => {
    gsap.from(".projects-heading", {
      y: 200,
      opacity:0.5,
      scrollTrigger: {
        scrub: true,
        trigger: ".projects-page",
        end: "10% 60%",
      },
    });
    gsap.from(".items", {
      y: 200,
      opacity:0,
      stagger: 0.5,
      scrollTrigger: {
        scrub: true,
        trigger: ".projects-page",
        end: "60% 60%",
      },
    });
    gsap.from(".projects-items hr", {
        y: 200,
        opacity:0,
        stagger: 0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".projects-page",
          end: "100% 60%",
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
        <a href="">
          <div className="items">
            <h1>YouTube Clone</h1>
            <p>A working YouTube clone made using React.js and YouTube API.</p>
          </div>
        </a>
        <hr />
        <a href="">
          <div className="items">
            <h1>Minimalist News</h1>
            <p>
              A minimalistic news app, bringing you the latest news from all
              around the world according to your liking.
            </p>
          </div>
        </a>

        <hr />
        <a href="">
          <div className="items">
            <h1>Text Tool</h1>
            <p>A helpful text manipulation app made using React.js.</p>
          </div>
        </a>
        <hr />
        <a href="">
          <div className="items">
            <h1>Weather App</h1>
            <p>
              A weather app bringing weather and other informations to you from
              all around the world with a sleak ui, made using HTML, CSS and
              JavaScript.
            </p>
          </div>
        </a>

        <hr />
      </div>
    </div>
  );
}

export default Projects;
