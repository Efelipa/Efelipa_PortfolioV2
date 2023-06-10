import 'bulma/css/bulma.min.css';
import './App.css'
import { NavBar } from './components/Navbar';
import { Content } from './components/Content';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App has-navbar-fixed-top">
      <NavBar/>
      <Content/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
