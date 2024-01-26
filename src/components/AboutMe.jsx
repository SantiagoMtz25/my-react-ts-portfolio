import React from "react";
import "../components/css_files/AboutMe.css";

const AboutMe = () => {

  return (
    <div className="about-me">
      <div className="content">
        <span>class SantiagoMartinezVallejo:</span>
        <span><br></br>&emsp;&emsp;__init__(self, career, hobbies):</span>
        <div class="wrapper">
          <div class="static-txt">I'm a </div>
          <ul class="dynamic-txts">
            <li><span>Programmer</span></li>
            <li><span>Musician</span></li>
            <li><span>Developer</span></li>
            <li><span>Student</span></li>
          </ul>
        </div>
        <span>
          I'm a Web & Android Developer, I bring a vibrant <br></br>
          mix of technical skills and creativity to the world <br></br>
          software. My journey includes internships and a <br></br>
          range of projects that display my passion for <br></br>
          techonology and my commitment to creating solutions <br></br>
          that address real necessities
        </span>
      </div>
      <div className="image-container">
        <img src="yoyo2.jpeg" alt="Santiago Martinez Vallejo" />
      </div>
    </div>
  );
};

export default AboutMe;
