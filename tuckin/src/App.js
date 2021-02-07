import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import About from "./pages/About.js";
import Materials from "./pages/Materials.js";
import Product1 from "./pages/Product1.js";
import Product2 from "./pages/Product2.js";
import Product3 from "./pages/Product3.js";

function App() {
  const [apiConnect, setApiConnect] = React.useState("initial");
  const [err, setErr] = React.useState({});

  async function TestBackend() {
    console.log("here");
    const res = await fetch("http://localhost:9000/test");
    res
      .text()
      .then((res) => {
        console.log("res:", res);
        setApiConnect(res);
      })
      .catch((err) => {
        setErr(err);
      });
  }
  React.useEffect(() => {
    TestBackend();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Product" exact component={Product} />
          <Route path="/Product-1" exact component={Product1} />
          <Route path="/Product-2" exact component={Product2} />
          <Route path="/Product-3" exact component={Product3} />
          <Route path="/About" exact component={About} />
          <Route path="/Materials" exact component={Materials} />
        </Switch>
      </Router>
      <div>{apiConnect}</div>
    </div>
  );
}

export default App;
