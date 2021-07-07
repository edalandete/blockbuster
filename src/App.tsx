import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';
import HeroSection from './components/Landing';
import './App.scss';

function App() {
  return (
    <Provider store={configureStore({ popularMovies: String, popularTvShows: String })}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HeroSection} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
