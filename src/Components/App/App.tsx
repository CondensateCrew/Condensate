import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import WelcomePage from '../WelcomePage/WelcomePage';
import Dashboard from '../../Containers/Dashboard/Dashboard';
import RoundOne from 'Containers/RoundOne/RoundOne';
import RoundTwo from 'Containers/RoundTwo/RoundTwo';
import Instructions from 'Containers/Instructions/Instructions';
import IdeaEventHorizon from 'Containers/IdeaEventHorizon/IdeaEventHorizon'; 


const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <WelcomePage />}/>
        <Route path='/dashboard' render={() => <Dashboard />}/>
        <Route path='/instructions' render={() => <Instructions />}/>
        <Route path='/round-one' render={() => <RoundOne />}/>
        <Route path='/round-two' render={() => <RoundTwo />}/>
        <Route path='/round-three' render={() => <IdeaEventHorizon />}/>
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
