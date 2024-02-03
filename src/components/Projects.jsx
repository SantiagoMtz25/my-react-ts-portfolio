import React from 'react';
import '../components/css_files/Projects.css';

const Projects = (props) => {
  const { missionImage, visionImage, missionTitle, missionSubtitle, missionDescription, visionTitle, visionSubtitle, visionDescription, link1, link2 } = props;

  return (
    <div className="responsive-container-block bigContainer">
      <section className="responsive-container-block Container full-bleed">
        <img className="mainImg" src={missionImage} alt="Mission" />
          <div className="allText aboveText">
            <p className="text-blk headingText">
              {missionTitle}
            </p>
            <p className="text-blk subHeadingText">
              {missionSubtitle}
            </p>
            <p className="text-blk description">
              {missionDescription}
            </p>
            <button className="explore">
              <a className='project-link' href={link1} target="_blank">View Project</a>
            </button>
          </div>
      </section>
      <section className="responsive-container-block Container bottomContainer">
        <img className="mainImg" src={visionImage} alt="Vision" />
          <div className="allText bottomText">
            <p className="text-blk headingText">
              {visionTitle}
            </p>
            <p className="text-blk subHeadingText">
              {visionSubtitle}
            </p>
            <p className="text-blk description">
              {visionDescription}
            </p>
            <button className="explore">
              <a className='project-link' href={link2} target="_blank">View Project</a>
            </button>
          </div>
      </section>
    </div>
  );
}

export default Projects;
