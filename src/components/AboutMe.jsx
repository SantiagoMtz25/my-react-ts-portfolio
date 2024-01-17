import React from "react";
import "../components/css_files/AboutMe.css";

const AboutMe = () => {

  return (
    <div className="about-me">
      <span>class SantiagoMartinezVallejo:</span>
      <span>&emsp;&emsp;&emsp;&emsp;&emsp;__init__(self, career, hobbies):</span>
      <div class="wrapper">
        <div class="static-txt">I'm a </div>
        <ul class="dynamic-txts">
          <li><span>Programmer</span></li>
          <li><span>Musician</span></li>
          <li><span>Developer</span></li>
          <li><span>Student</span></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
