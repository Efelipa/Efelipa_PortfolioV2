import 'bulma/css/bulma.min.css';
import './style.css'
import { NavBar } from './components/Navbar';

function App() {
  return (
    <div className="App has-navbar-fixed-top">
      <NavBar/>
    </div>
  );
}

export default App;
