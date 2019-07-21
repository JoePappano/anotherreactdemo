import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Post from "./components/Post"
// import "./App.css"


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
