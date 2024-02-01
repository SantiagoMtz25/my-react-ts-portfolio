import './App.css';
import AboutMe from './components/AboutMe';
import ContactMeForm from './components/ContactMeForm';
import DailyQuote from './components/DailyQuote';
import PersonalFooter from './components/PersonalFooter';
import Projects from './components/Projects';
import Projects2 from './components/Projects2';
import SkillsRank from './components/SkillsRank';
import TopNavBar from './components/TopNavBar';

function App() {
   

  return (
    <>
      <div className="fixed-top-nav">
        <TopNavBar />
      </div>
      <div className="contents">
        <AboutMe />
        <DailyQuote />
        <SkillsRank />
        <Projects />
        <Projects2 />
        <Projects />
        <Projects2 />
        <ContactMeForm />
      </div>
      <div className='not-fixed-footer'>
        <PersonalFooter />
      </div>
    </>
  );
}

export default App;
