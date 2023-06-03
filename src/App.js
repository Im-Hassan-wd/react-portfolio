import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages and compnents
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/works">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
