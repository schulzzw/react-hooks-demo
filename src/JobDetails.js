import React from 'react';
import useCandidateJobs from './useCandidateJobs';

const JobDetails = props => {
  const { title, pay, companyName, id } = props;

  const { applyToJob } = useCandidateJobs();

  const handleOnClick = () => {
    applyToJob({
      jobId: id,
      candidateId: 1234,
    });
  };
  return (
    <React.Fragment>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div>Pay: {pay}</div>
      <div>Company: {companyName}</div>
      <button onClick={handleOnClick}>Apply</button>
    </React.Fragment>
  );
};

export default JobDetails;
