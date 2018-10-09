import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import About from "./pages/AboutUs";
import Regions from "./pages/Regions";
import News from "./pages/News";
import Resources from "./pages/Resources";
import Store from "./pages/TNTTStore";
import Navbar from "./components/Navbar/";


// const App = () => (
class App extends Component {
  render() {
    return(
      <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/our-regions" component={Regions} />
        <Route exact path="/news" component={News} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/store" component={Store} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;
