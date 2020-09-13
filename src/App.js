import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import HowItWorks from './components/information/howItWorks/HowItWorks';
import Advantages from './components/information/advantages/Advantages';
function App() {
  return (
    <main className="App">
      <Header/>
      <Router>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/" exact component={HowItWorks}></Route>
        <Route path="/" exact component={Advantages}></Route>
      </Router>
    </main>
  );
}

export default App;
