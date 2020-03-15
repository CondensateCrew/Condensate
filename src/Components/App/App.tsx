import './App.scss';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from 'interfaces';
import WelcomePage from '../WelcomePage/WelcomePage';
import Dashboard from '../../Containers/Dashboard/Dashboard';
import RoundOne from 'Containers/RoundOne/RoundOne';
import RoundTwo from 'Containers/RoundTwo/RoundTwo';
import Instructions from 'Containers/Instructions/Instructions';
import IdeaEventHorizon from 'Containers/IdeaEventHorizon/IdeaEventHorizon';

const App: React.FC = () => {
  const user = useSelector((store: AppStore) => store.user);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <WelcomePage />}/>
        { !Object.keys(user).length && <Redirect to='/' /> }
        <Route path='/dashboard' render={() => <Dashboard />}/>
        <Route path='/instructions/:type' render={({match}) => <Instructions type={match.params.type} />}/>
        <Route path='/round-one' render={() => <RoundOne />}/>
        <Route path='/round-two' render={() => <RoundTwo />}/>
        <Route path='/round-three' render={() => <IdeaEventHorizon />}/>
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
