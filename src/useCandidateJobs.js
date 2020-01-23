import React from 'react';
import { JobContext } from './JobProvider';

const useCandidateJobs = () => {
  const { jobs, setApplications } = React.useContext(JobContext);

  const applyToJob = ({ jobId, candidateId }) => {
    setApplications(prevState => [
      ...prevState,
      {
        jobId: jobs.find(job => job.id === jobId).id,
        candidateId,
      },
    ]);
  };

  return {
    jobs,
    applyToJob,
  };
};

export default useCandidateJobs;
