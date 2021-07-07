import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';
import Landing from './components/Landing';
import Header from './components/Header';

import './App.scss';

function App() {
  return (
    <Provider store={configureStore({ popularMovies: String, popularTvShows: String })}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
