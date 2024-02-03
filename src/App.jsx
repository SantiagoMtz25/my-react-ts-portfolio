import './App.css';
import AboutMe from './components/AboutMe';
import ContactMeForm from './components/ContactMeForm';
import DailyQuote from './components/DailyQuote';
import MoreQuotes from './components/MoreQuotes';
import PersonalFooter from './components/PersonalFooter';
import Projects from './components/Projects';
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
        <Projects
          missionImage="../androidapp.png"
          visionImage="../blogapp.png"
          missionTitle="Frisa and Yco Android App"
          missionSubtitle="Mobile Application with Kotlin, API Design, and Figma"
          missionDescription="Developed a catalogue like Android app to provide a list of social organizations, and allow users to connect and seek help"
          visionTitle="Blog App"
          visionSubtitle="MongoDB, Express, React, Node.js, Tkinter"
          visionDescription="App where users can register, and post blog cards with real time updates, account management functionalities and multiple API integrations"
          link1=""
          link2=""
        />
        <MoreQuotes />
        <Projects
          missionImage="../paginaphp.png"
          visionImage="../Pruebas_arduino.jpeg"
          missionTitle="University Survey Webpage"
          missionSubtitle="Developed with PHP, HTML, CSS, C#, Unity, MySQL"
          missionDescription="Interactive web page for my university's student annual survey seeking to increase student participation"
          visionTitle="Arduino Connected to Cloud"
          visionSubtitle="Developed with Arduino, Firebase, MySQL"
          visionDescription="Sensor connected to cloud with Firebase, could be activated or deactivated through a webpage and assistant Alexa. Sensor’s activity was stored in MySQL"
          link1=""
          link2=""
        />
        <ContactMeForm />
      </div>
      <div className='not-fixed-footer'>
        <PersonalFooter />
      </div>
    </>
  );
}

export default App;
