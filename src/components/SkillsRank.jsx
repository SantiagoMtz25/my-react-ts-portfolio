import React, { useState, useEffect, useRef } from 'react';
import '../components/css_files/SkillsRank.css';

const SkillsRank = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, {
      rootMargin: '100px 0px',
    });    

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []); 

  return isVisible ? (
    <div className="skills-parent" ref={domRef}>
      <div className="skills-container">
        <h1 className="skills-header">Skills</h1>
        
        <p className="skills-text">HTML</p>
        <div className="skill">
          <div className="html">100%</div>
        </div>

        <p className="skills-text">JavaScript</p>
        <div className="skill">
          <div className="js">75%</div>
        </div>

        <p className="skills-text">SQL</p>
        <div className="skill">
          <div className="sql">70%</div>
        </div>

        <p className="skills-text">Node.js</p>
        <div className="skill">
          <div className="node">70%</div>
        </div>

        <p className="skills-text">React</p>
        <div className="skill">
          <div className="react">65%</div>
        </div>

        <p className="skills-text">Kotlin</p>
        <div className="skill">
          <div className="kotlin">65%</div>
        </div>

        <p className="skills-text">Python</p>
        <div className="skill">
          <div className="python">60%</div>
        </div>

        <p className="skills-text">CSS</p>
        <div className="skill">
          <div className="css">50%</div>
        </div>
      </div>
    </div>
  ) : <div ref={domRef}></div>;
}

export default SkillsRank;
