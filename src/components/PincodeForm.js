import React from 'react';

const PincodeForm = ({ pincode, setPincode, handleSubmit}) => {
  return (
    <div className="pincode-form">
      <h1>Enter Pincode</h1>
      <input
        type="text"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        placeholder="Enter 6-digit pincode"
      />
      <br />
      <button className="submit" onClick={handleSubmit}>Lookup</button>
    </div>
  );
};

export default PincodeForm;