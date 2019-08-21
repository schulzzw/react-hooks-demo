import React from 'react';

const JobDetails = (props) => {
  const { title, pay, companyName, id} = props;
  return (
    <React.Fragment>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div>Pay: {pay}</div>
      <div>Company: {companyName}</div>
    </React.Fragment>
  )
}

export default JobDetails;