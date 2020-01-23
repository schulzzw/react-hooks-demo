import React from 'react';

const JobContext = React.createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = React.useState([]);
  const [applications, setApplications] = React.useState([]);

  React.useEffect(() => {
    setJobs([
      {
        id: 1,
        title: 'Simple Scrubber',
        pay: '$19/hr',
        companyName: "Steve Timber's Tub Masters",
      },
      {
        id: 2,
        title: 'Trunk Flattener',
        pay: '$33/hr',
        companyName: 'Baby Got Back',
      },
      {
        id: 3,
        title: 'Ranch Thinner',
        pay: '$10/hr',
        companyName: 'Hidden Field',
      },
      {
        id: 4,
        title: 'Gauge Timer',
        pay: '$55/hr',
        companyName: 'Chernobyl No 5',
      },
      {
        id: 5,
        title: 'Gumby Race Hiker',
        pay: '$19/hr',
        companyName: 'Block Heads Inc',
      },
    ]);
  }, [setJobs]);

  const applyToJob = ({ jobId, candidateId }) => {
    setApplications(
      prevState => [
        ...prevState,
        {
          jobId: jobs.find(job => job.id === jobId).id,
          candidateId,
        },
      ],
      () => console.log('update applications', applications)
    );
  };

  const viewCandidatesForJob = jobId => {
    return applications.filter(app => app.jobId === jobId);
  };

  return (
    <JobContext.Provider
      value={{
        jobs: jobs,
        applyToJobb: applyToJob,
        viewCandidatesForJob: viewCandidatesForJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;

export { JobContext, JobProvider };
