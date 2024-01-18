import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TopNavBar from './components/TopNavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {


  return (
    <>
      <div className="fixed-top-nav">
        <TopNavBar />
      </div>
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={1}>
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <img src="your_image_url_here.jpg" alt="Descriptive Text" style={{ width: '100%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <h1>Projects</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <img src="your_image_url_here.jpg" alt="Descriptive Text" style={{ width: '100%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <h1>Experience</h1>
        </ParallaxLayer>
        
      </Parallax>
    </>
  );
}

export default App
