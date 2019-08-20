import React from 'react';
import CandidateView from './CandidateView';
import Other from './Other'
import './App.css';
import { JobContext, JobProvider } from './JobProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
      <Router>
      <JobProvider>
        <div className="App">
          <JobContext.Consumer>
            { jobContext => (
              <Switch>
                <Route
                  path={'/candidate'}
                  render={routerProps => (
                    React.createElement(
                      CandidateView,
                      {
                        ...routerProps,
                        jobs: jobContext.jobs,
                      },
                      ))
                    }
                  />
                <Route
                  exact
                  path={'/other'}
                  render={routerProps => (
                    React.createElement(
                      Other,
                      {
                        ...routerProps,
                        jobs: jobContext.jobs,
                      },
                      ))
                    }
                  />
              </Switch>
              )}
          </JobContext.Consumer>
        </div>
      </JobProvider>
    </Router>
  );  

}

export default App;
