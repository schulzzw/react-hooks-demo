import React from 'react';
import { JobContext } from './JobProvider';

const JobDetails = props => {
  const { title, pay, companyName, id } = props;

  const { applyToJob } = React.useContext(JobContext);

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
