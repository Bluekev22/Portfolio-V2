import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Grid } from '@mui/material'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mttm from './pages/Projects/Mttm/Mttm'
import Fitness from './pages/Projects/Fitness/Fitness'
import Budget from './pages/Projects/Budget/Budget'
import Flights from './pages/Projects/Flights/Flights'

function App() {
  return (
    <Router>
      <div className='big-background'>
        <div className="mask">
          <header>
            <p className="site-name"><span className="name">KEVINSHANK</span>.tech</p>
            <nav>
              <Navbar />
            </nav>
          </header>
          <Grid container className="main" direction="row"
  justifyContent="center"
  alignItems="center">
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Movies" component={Mttm} />
            <Route exact path="/Fitness" component={Fitness} />
            <Route exact path="/Budget" component={Budget} />
            <Route exact path="/Flights" component={Flights} />
          </Grid>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
