import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Grid } from '@mui/material';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className='big-background'>
        <header>
          <h1>KEVINSHANK.tech</h1>
          <nav>
          <Grid container spacing={2} justifyContent="center">
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
          </Grid>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </main>
        <footer>
          <Grid container spacing={2} justifyContent="center">
            <Grid item><a className="linkedin" href="https://www.linkedin.com/in/shank-kevin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></Grid>
            <Grid item><a className="github" href="https://github.com/Bluekev22" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></Grid>
            <Grid item><a className="twitter" href="https://twitter.com/kevshank22" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></Grid>
          </Grid>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
