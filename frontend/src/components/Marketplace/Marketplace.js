
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const Marketplace = () => {
  const [sellers, setSellers] = useState([]);

  // Dummy data for testing
  const dummySellers = [
    { id: 1, name: 'Seller 1', picture: 'url_to_picture1', price: '$10', quantity: '5', description: 'Product 1 description' },
    { id: 2, name: 'Seller 2', picture: 'url_to_picture2', price: '$20', quantity: '3', description: 'Product 2 description' },
    // Add more sellers as needed
  ];

  // useEffect to set sellers from form data
  // useEffect(() => {
  //   // Fetch sellers from API or set from form submission
  //   setSellers(formData);
  // }, [formData]);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Marketplace</h1>
        <div className="flex flex-col md:flex-row justify-center">
          {sellers.length > 0 ? (
            sellers.map((seller) => (
              <div key={seller.id} className="md:w-1/2 p-4">
                <div className="bg-white shadow-md rounded-md p-4">
                  <h2 className="text-xl font-semibold mb-2">{seller.name}</h2>
                  <img src={seller.picture} alt={seller.name} className="w-full h-48 object-cover mb-2" />
                  <p className="text-lg mb-2">Price: {seller.price}</p>
                  <p className="text-lg mb-2">Quantity: {seller.quantity}</p>
                  <p className="mb-2">{seller.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No sellers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

