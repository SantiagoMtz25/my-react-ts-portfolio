import React from "react";
import "../components/css_files/AboutMe2.css";
import DownloadCV from "./DownloadCV";

const AboutMe2 = () => {

  return (
    <>
      <main className="wrapper">
        <section className="featured-box" id="home">
          <div className="featured-text">
            <div className="featured-text-card">
              <span>class SantiagoMartinezVallejo: </span>
            </div>
            <div className="featured-name">
              <p>I'm a <span className="typedText"></span></p>
              <ul className="dynamic-txts">
                <li><span>Programmer</span></li>
                <li><span>Musician</span></li>
                <li><span>Developer</span></li>
                <li><span>Student</span></li>
              </ul>
            </div>
            <div className="featured-text-info">
              <p>
                I'm a Web & Android Developer, I bring a vibrant
                mix of technical skills and creativity to the world
                software. My journey includes internships and a
                range of projects that display my passion for
                techonology and my commitment to creating solutions
                that address real necessities
              </p>
            </div>
            <div className="featured-text-btn">
              <button className="btn blue-btn">Hire Me</button>
              <DownloadCV />
            </div>
            <div className="social_icons">
              <div className="icon"><i className="fab fa-git"></i></div>
              <div className="icon"><i className="fab fa-react"></i></div>
              <div className="icon"><i className="fab fa-python"></i></div>
              <div className="icon"><i className="fab fa-android"></i></div>
              <div className="icon"><i className="fab fa-js"></i></div>
              <div className="icon"><i className="fab fa-node"></i></div>
              <div className="icon"><i className="fab fa-css3"></i></div>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src="yoyo2.jpeg" alt="avatar" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe2;
