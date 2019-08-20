import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Jobs from './Jobs';
import Other from './Other';

const CandidateView = (props) => {
  return (
    <Switch>
      <Route
        path={'/candidate/jobs'}
        render={routerProps => (
          React.createElement(
            Jobs,
            {
              ...routerProps,
              jobs: props.jobs,
            },
            ))
          }
        />
        <Route
        render={routerProps => (
          React.createElement(
            Other,
            {
              ...routerProps,
              jobs: props.jobs,
            },
            ))
          }
        />
    </Switch>
  )
}

export default CandidateView;