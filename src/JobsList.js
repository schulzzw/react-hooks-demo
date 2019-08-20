import React from 'react';

const JobsList = ({ jobs = [], onClick}) => {
  return (
    jobs.map(job => (
      <button key={job.id} onClick={() => onClick(job.id)}>{job.title}</button>
    ))
  );
}

export default JobsList;