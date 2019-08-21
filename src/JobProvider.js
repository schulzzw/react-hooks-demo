import React from 'react';

const JobContext = React.createContext();

class JobProvider extends React.Component {
  state = {
    jobs: [],
    applications: [],
  }

  componentDidMount() {
    this.setState({
      jobs: [{
        id: 1,
        title: 'Simple Scrubber',
        pay: '$19/hr',
        companyName: 'Steve Timber\'s Tub Masters',
      },{
        id: 2,
        title: 'Trunk Flattener',
        pay: '$33/hr',
        companyName: 'Baby Got Back',
      },{
        id: 3,
        title: 'Ranch Thinner',
        pay: '$10/hr',
        companyName: 'Hidden Field',
      },{
        id: 4,
        title: 'Gauge Timer',
        pay: '$55/hr',
        companyName: 'Chernobyl No 4',
      },{
        id: 5,
        title: 'Gumby Race Hiker',
        pay: '$19/hr',
        companyName: 'Block Heads Inc',
      }]
    })
  }

  applyToJob = ({ jobId, candidateId }) => {
    this.setState(prevState => ({
      applications: [
        ...prevState.applications,
        this.state.jobs
          .find(job => job.id===jobId)
          .map(jobb => ({
            jobId: jobb.id,
            candidateId,
          }))
      ]
    }));
  }

  viewCandidatesForJob = (jobId) => {
    return this.state.applications.filter(app => app.jobId === jobId);
  }

  render() {
    return (
      <JobContext.Provider
        value={{
          jobs: this.state.jobs,
          applyToJobb: this.applyToJob,
          viewCandidatesForJob: this.state.applications,
        }}
      >
        {this.props.children}
      </JobContext.Provider>
    )
  }
}

export default JobProvider;

export { JobContext, JobProvider };

