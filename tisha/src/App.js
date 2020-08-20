import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import './App.css';

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>

          <Navbar />

          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
