import React from 'react';
import { Route, Switch } from 'react-router-dom';
import JobsList from './JobsList';
import JobDetails from './JobDetails';

class Jobs extends React.Component {

  state = {
    selectedJob: {},
  }

  selectJob = (jobId) => {
    console.log(jobId);
    const selected = this.props.jobs.find(job => job.id === jobId);
    console.log(selected);
    this.setState({
      selectedJob: selected
    }, () => {
      this.props.history.push('/candidate/jobs/details');
    });
    
  }

  render() {
    console.log('state', this.state);
    return (
      <Switch>
        <Route
          exact
          path={'/candidate/jobs'}
          render={routerProps => (
            React.createElement(
              JobsList,
              {
                ...routerProps,
                jobs: this.props.jobs,
                onClick: this.selectJob,
              },
              ))
            }
          />
        <Route
          exact
          path={'/candidate/jobs/details'}
          render={routerProps => (
            React.createElement(
              JobDetails,
              {
                ...routerProps,
                ...this.state.selectedJob,
              },
              ))
            }
          />
      </Switch>
    )
  }
}

export default Jobs;