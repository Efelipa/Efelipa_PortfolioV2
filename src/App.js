import 'bulma/css/bulma.min.css';
import './App.css'
import { NavBar } from './components/Navbar';
import { Content } from './components/Content';


function App() {
  return (
    <div className="App has-navbar-fixed-top">
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
