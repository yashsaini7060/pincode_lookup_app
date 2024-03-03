import React, { useState } from 'react';
import PincodeForm from './components/PincodeForm';
import PincodeDetailsPage from './components/PincodeDetailsPage';
import Error from './components/Error';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [pincode, setPincode] = useState('');
  const [pincodeDetails, setPincodeDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePincodeSubmit = async () => {
    if (pincode.length !== 6) {
      setError('Pincode should be 6 digits');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      
      if (data[0]?.Status === 'Error') {
        setError('Error fetching pincode details');
        return;
      }

      setPincodeDetails(data[0]?.PostOffice);
    } catch (error) {
      setError('Error fetching pincode details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {!pincodeDetails && (
        <PincodeForm
          pincode={pincode}
          setPincode={setPincode}
          handleSubmit={handlePincodeSubmit}
        />
      )}
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !error && pincodeDetails && (
        <PincodeDetailsPage details={pincodeDetails} />
      )}
    </div>
  );
}

export default App;
