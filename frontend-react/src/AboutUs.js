import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        This project is part of a Zero Trust Access Control prototype that
        evaluates users dynamically based on contextual trust factors rather
        than static credentials.
      </p>
      <p>
        The goal is to demonstrate how modern security systems can adapt
        access decisions in real time using trust scores and behavioral data.
      </p>
    </div>
  );
};

export default AboutUs;
