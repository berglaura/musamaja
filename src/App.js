import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Firstpage from "./components/Firstpage";
import Footer from "./components/Footer";
import Pianokoulu from "./components/Pianokoulu";
import Contact from "./components/Contact"
import Musiikkiohjelma from './components/Musiikkiohjelma';


function App() {
  return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Firstpage} />
            <Route exact path="/pianokoulu" component={Pianokoulu} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/musiikkiohjelma" component={Musiikkiohjelma} />
          </Switch>
        </div>
        <Footer />
      </Router>   
  );
}

export default App;
