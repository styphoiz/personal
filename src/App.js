import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/js/Home";
import About from "./components/js/About";
import SinglePost from "./components/js/SinglePost";
import Post from "./components/js/Post";
import Project from "./components/js/Project";
import NavBar from "./components/js/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
