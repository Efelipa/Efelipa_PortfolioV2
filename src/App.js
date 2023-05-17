import 'bulma/css/bulma.min.css';
import './App.css'
import { NavBar } from './components/Navbar';
import { Content } from './components/Content';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App has-navbar-fixed-top">
      <NavBar/>
      <Content/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
