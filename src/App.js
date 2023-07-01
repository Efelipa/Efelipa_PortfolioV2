import 'bulma/css/bulma.min.css';
import './App.css'
import { NavBar } from './components/Navbar';
import { Content } from './components/Content';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App has-navbar-fixed-top">
      <NavBar/>
      <Content/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
