import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import data from './data';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <>
    <NavBar nav = {data.navList}/>
    <Home link={data.links}/>
    <Education education={data.education} skills= {data.skills}/>
    <Work works={data.work} />
    <Project projects={data.projects} />
    <ContactMe contacts={data.contactDetails}/>
    </>
  );
}

export default App;
