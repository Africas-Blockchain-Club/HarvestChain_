
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const Agreements = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreement = () => {
    setAgreed(!agreed);
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Agreements</h1>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="text-lg mb-4">
              By clicking "Agree" below, you agree to the Terms and Conditions of our platform.
            </p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={handleAgreement}
                className="mr-2"
              />
              <label htmlFor="agreement" className="text-lg">
                I agree to the Terms and Conditions
              </label>
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={handleAgreement}
            >
              {agreed ? 'Agreed' : 'Agree'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreements;
