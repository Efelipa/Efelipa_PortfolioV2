import 'bulma/css/bulma.min.css';
import './App.css'
import { NavBar } from './components/Navbar';
import { Content } from './components/Content';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App has-navbar-fixed-top">
      <NavBar/>
      <Content/>
      <Skills/>
    </div>
  );
}

export default App;
