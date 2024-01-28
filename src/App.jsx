import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Projects2 from './components/Projects2';
import TopNavBar from './components/TopNavBar';

function App() {
  

  return (
    <>
      <div className="fixed-top-nav">
        <TopNavBar />
      </div>
      <div className="contents">
        <AboutMe />
        <Projects />
        <Projects2 />
        <Projects />
        <Projects2 />
      </div>
      <div className='not-fixed-footer'>
        
      </div>
    </>
  );
}

export default App;
