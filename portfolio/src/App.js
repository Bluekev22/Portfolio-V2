import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Grid } from '@mui/material';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='big-background'>
        <div className="mask">
          <header>
            <h1>KEVINSHANK.tech</h1>
            <nav>
              <Navbar />
            </nav>
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
