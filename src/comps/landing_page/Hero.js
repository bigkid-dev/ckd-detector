import React from "react";
import img from "../../assets/premium_photo-1669106605302-a9fe105ac248.avif";
import illustrationOne from "../../assets/267fd9fe-9843-4c62-b44c-f7de17fcfb21.png";
import illustrationTwo from "../../assets/45067080-c1dc-40de-baf8-13efc1a6e6fd.png";
import Nav from "./Nav";
import Poster from "./Post";
import PosterTwo from "./postTwo";
import PosterThree from "./PostThree";



const imageOne = "/pexels-mo-eid-9454915.jpg";

const imageThree = "";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <Nav/>
        <Carousel></Carousel>
      </div>
      <Poster />
      <PosterTwo />
      <PosterThree />
      <a href="/ckd">
        <button id="discover">DISCOVER</button>
      </a>
    </section>
  );
};

const Carousel = () => {
  return (
    <div className="carousel">
      <div
        style={{
          height: "60%",
          width: "20%",
          position: "absolute",
          top: "10%",
          right: "5%",
        }}
      >
        <img src={illustrationTwo} />
      </div>
    </div>
  );
};

export default Hero;
