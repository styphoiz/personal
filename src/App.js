//import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Home from "./components/js/Home";
import About from "./components/js/About";
import SinglePost from "./components/js/SinglePost";
import Post from "./components/js/Post";
import Project from "./components/js/Project";
import NavBar from "./components/js/NavBar";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </Router>
  );
}

export default App;
