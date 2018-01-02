import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { MainPage } from './MainPage';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-6842596-2'); //Unique Google Analytics tracking number

const history = createBrowserHistory();

history.listen((location, action) => { //fire Google Analytics on route change
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});

class App extends Component {
  componentWillMount() { //fire Google Analytics when page first loads
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
