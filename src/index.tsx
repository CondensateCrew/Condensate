import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.scss';
import './css/index.scss';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers';
import { AppStore } from './interfaces';
import { CookiesProvider } from 'react-cookie';

const store: Store<AppStore> = createStore(rootReducer, composeWithDevTools());

const app = (
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
