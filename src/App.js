import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

const Home = () => {
  return (
    <h1>Strona startowa</h1>
  );
}
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt do nas</h1>;
const ErrorPage = () => <h1>Strona nie istnieje!</h1>

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li><NavLink to="/" exact activeClassName="home_selected" activeStyle={{ bacgroundColor: 'gray', letterSpacing: '6px' }}>Start</NavLink></li>
                <li><NavLink to="/news" activeClassName="news_selected">Aktualności</NavLink></li>
                <li><NavLink to="/contact" activeClassName="contact_selected">Kontakt</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    )
  }
}

export default App;