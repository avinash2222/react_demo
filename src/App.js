import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
