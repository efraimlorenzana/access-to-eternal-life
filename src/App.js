import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/navigation-bar';
import Home from './pages/Home/home-page';
import Chapter from './pages/Chapter/chapter-page';
import Footer from './components/Footer/footer-bar';

const App = () => {
  return (
    <div className="App">
        <Router>
          <header className="app-header">
            <Navigation />
          </header>
          <main className="app-main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/chapter' component={Chapter} />
            </Switch>
          </main>
          <footer className="app-footer">
            <Footer />
          </footer>
        </Router>
    </div>
  );
}

export default App;
