import React from "react";
import "../styles/Home.css";
import arrow from "../assets/imgs/down-right.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Home() {
  useGSAP(() => {
    gsap.to(".home-moving-strip", {
      x: -28500,
      duration: 400,
      repeat: -1,
      ease: "power1.out",
    });
    gsap.from('.home-left-tag',{
      x:-200,
      duration: 1,
      ease: "power1.inOut",
    })
    gsap.from('.right-text-heading',{
      x:400,
      duration: 1.5,
      ease: "power1.inOut",
    })
    gsap.from('.right-text-arrow img',{
      rotateX: 360,
      duration: 1.5,
      ease: "power1.inOut",
    })
  });
  return (
    <div className="home-page">
      <div className="home-left-tag">
        <div className="tag-text">
          <p>
            Located <br /> in <br /> India
          </p>
        </div>
      </div>
      <div className="home-right-text">
        <div className="right-text-arrow">
          <img src={arrow} alt="" />
        </div>
        <div className="right-text-heading">
          <h1>
            Full Stack <br /> Web-Developer
          </h1>
        </div>
      </div>
      <div className="home-moving-strip">
        <p>
          Kushagra Singh - Kushagra Singh - Kushagra Singh - Kushagra Singh -
          Kushagra Singh - Kushagra Singh - Kushagra Singh - Kushagra Singh -
          Kushagra Singh - Kushagra Singh - Kushagra Singh - Kushagra Singh -
          Kushagra Singh - Kushagra Singh - Kushagra Singh - Kushagra Singh -
          Kushagra Singh - Kushagra Singh - Kushagra Singh - Kushagra Singh -
          Kushagra Singh - Kushagra Singh - Kushagra Singh - Kushagra Singh -
        </p>
      </div>
    </div>
  );
}

export default Home;
