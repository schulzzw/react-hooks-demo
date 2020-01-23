import React from 'react';
import { JobContext } from './JobProvider';

const useCandidateJobs = () => {
  const { jobs, applyToJob } = React.useContext(JobContext);

  return {
    jobs,
    applyToJob,
  };
};

export default useCandidateJobs;
