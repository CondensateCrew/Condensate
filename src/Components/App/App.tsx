import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import WelcomePage from '../WelcomePage/WelcomePage';
import Dashboard from '../../Containers/Dashboard/Dashboard';
import RoundOne from 'Containers/RoundOne/RoundOne';
<<<<<<< HEAD
import RoundTwo from 'Containers/RoundTwo/RoundTwo';
=======
>>>>>>> 78709f68b952bc755af90522a99d8121acc83743
import Instructions from 'Containers/Instructions/Instructions';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <WelcomePage />}/>
        <Route path='/dashboard' render={() => <Dashboard />}/>
<<<<<<< HEAD
        <Route path='/gameboard/round-two' render={() => <RoundTwo />}/>
=======
>>>>>>> 78709f68b952bc755af90522a99d8121acc83743
        <Route path='/instructions' render={() => <Instructions />}/>
        <Route path='/round-one' render={() => <RoundOne />}/>
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
