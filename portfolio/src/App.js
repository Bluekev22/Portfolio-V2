import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className='big-background'>
      <header>
        <h1>KEVINSHANK.tech</h1>
        <nav>
          <ul>
            <li><a></a></li>
          </ul>
        </nav>
      </header>
      <footer>
        <Grid container spacing={2} justifyContent="center">
          <Grid item><a className="linkedin" href="https://www.linkedin.com/in/shank-kevin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></Grid>
          <Grid item><a className="github" href="https://github.com/Bluekev22" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></Grid>
          <Grid item><a className="twitter" href="https://twitter.com/kevshank22" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></Grid>
        </Grid>
        
      </footer>
    </div>
  );
}

export default App;
