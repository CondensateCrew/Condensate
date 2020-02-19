import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import WelcomePage from '../WelcomePage/WelcomePage';
import Dashboard from '../../Containers/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <WelcomePage />}/>
        <Route path='/dashboard' render={() => <Dashboard />}/>
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
