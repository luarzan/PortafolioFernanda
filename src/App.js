import React from 'react';
import './assets/styles/App.scss';
import './assets/fonts/fonts.scss';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MainPage from './scenes/MainPage/MainPage';
import AboutPage from './scenes/AboutPage/AboutPage';
import ProjectPage from './scenes/ProjectPage/ProjectPage';
import Lush from './scenes/Portafolio/Scenes/Lush/Lush';
import 'animate.css';
import Sporty from './scenes/Portafolio/Scenes/Sporty/Sporty';
import Barrica from './scenes/Portafolio/Scenes/Barrica/Barrica';
import Luova from './scenes/Portafolio/Scenes/Luova/Luova';
import Bloom from './scenes/Portafolio/Scenes/Bloom/Bloom';
import DressGreen from './scenes/Portafolio/Scenes/DressGreen/DressGreen';

function App() {
  return (
    <div className="App">
        <Router>
             <Switch>
                <Route path="/" component={MainPage} exact></Route>
                <Route path="/about" component={AboutPage} exact></Route>
                <Route path="/projects" component={ProjectPage} exact></Route>
                <Route path="/lush" component={Lush} exact></Route>
                <Route path="/sporty" component={Sporty} exact></Route>
                <Route path="/barrica" component={Barrica} exact></Route>
                <Route path="/luova" component={Luova} exact></Route>
                <Route path="/bloom" component={Bloom} exact></Route>
                <Route path="/dress-green" component={DressGreen} exact></Route>
             </Switch>
        </Router>
    </div>
  );
}

export default App;
