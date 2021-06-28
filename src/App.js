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
        <Route component={Home} path="/personal" exact />
        <Route component={About} path="/personal/About" />
        <Route component={SinglePost} path="/personal/post/:slug" />
        <Route component={Post} path="/personal/post" />
        <Route component={Project} path="/personal/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
