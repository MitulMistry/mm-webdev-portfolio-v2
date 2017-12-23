import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
