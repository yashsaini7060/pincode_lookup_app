import React from 'react';

const PincodeDetails = ({ details }) => {
  return (
    <div className="pincode-details">
      {details.map((detail, index) => (
        <div className='office' key={index}>
          <p>Post Office: {detail.Name}</p>
          <p>Branch Type: {detail.BranchType}</p>
          <p>District: {detail.District}</p>
          <p>State: {detail.State}</p>
        </div>
      ))}
    </div>
  );
};

export default PincodeDetails;
