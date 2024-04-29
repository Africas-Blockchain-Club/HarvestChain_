// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Agreements from './components/Agreements/Agreements';
import Marketplace from './components/Marketplace/Marketplace';
import SellerForm from './components/SellerForm/SellerForm';
import NavBar from './components/NavBar/NavBar';
import Web3 from "web3";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.requestAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Web3 not found');
    }
  }

  return (
    <Router>
      {/* <NavBar /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-bg1">
        {web3 ? (
          <div className="text-center text-black">
            <p className="mb-4">Connected: {accounts[0]}</p>
            <p className="mb-4">Welcome to our system. Are you a Buyer or Seller?</p>
            <div className="flex justify-center mb-4">
              <button className="bg-white hover:bg-gray-200 text-green-500 hover:text-green-600 font-bold py-2 px-4 rounded mr-2">
                <Link to="/marketplace" element={<Marketplace />}>Buyer</Link>
              </button>
              <button className="bg-gray-200 hover:bg-white text-green-600 hover:text-green-500 font-bold py-2 px-4 pl-10 rounded ml-2">
                <Link to="/seller" element={<SellerForm />}>Seller</Link>
              </button>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/agreements" element={<Agreements />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/home" element={<Home connect={connectWallet} />} />
            <Route path="/" element={<Home connect={connectWallet} />} />
            <Route path="/seller" element={<SellerForm />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
