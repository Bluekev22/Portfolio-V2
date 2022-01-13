import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from '@mui/material'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MoveTowardsTheMovies from './pages/Projects/MoveTowardsTheMovies/MoveTowardsTheMovies'
import BetterBuy from './pages/Projects/BetterBuy/BetterBuy'
import BookSearchEngine from './pages/Projects/BookSearchEngine/BookSearchEngine'
import GoldenFlights from './pages/Projects/GoldenFlights/GoldenFlights'

function App() {
  return (
    <Router>
      <div className="big-background">
        <div className="mask">
          <header>
            <p className="site-name">
              <span className="name">KEVINSHANK</span>.tech
            </p>
            <nav>
              <Navbar />
            </nav>
          </header>
          <Grid
            container
            className="main"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/move-towards-the-movies"
              component={MoveTowardsTheMovies}
            />
            <Route exact path="/better-buy" component={BetterBuy} />
            <Route
              exact
              path="/book-search-engine"
              component={BookSearchEngine}
            />
            <Route exact path="/golden-flights" component={GoldenFlights} />
          </Grid>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
