import React, { useState } from 'react';
import PincodeDetails from './PincodeDetails';

const PincodeDetailsPage = ({ details }) => {
  const [filter, setFilter] = useState('');
  const filteredDetails = details.filter((detail) =>
    detail.Name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="pincode-details-page">
      <input
        type="text"
        onChange={(e) => handleFilterChange(e.target.value)}
        placeholder="Filter by post office name"
      />
      <PincodeDetails details={filteredDetails} />
    </div>
  );
};

export default PincodeDetailsPage;
