import React from 'react';
import NavBar from '../NavBar/NavBar';

const AboutUs = () => {
  return (
    <div><NavBar />
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row justify-center">
            <div className="md:w-1/2 p-4">
            <img 
                src="/agri-sys.jpg" 
                alt="Agriculture" 
                className="w-full rounded-lg shadow-lg" 
                style={{ 
                clipPath: 'ellipse(50% 35% at 50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                }} 
            />
            </div>
            <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lacus et orci suscipit, ac eleifend mi commodo. Ut non sapien non lectus aliquam aliquam. Proin efficitur, mauris a pharetra consectetur, ipsum dolor porta tortor, nec consequat odio magna non odio.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lacus et orci suscipit, ac eleifend mi commodo. Ut non sapien non lectus aliquam aliquam. Proin efficitur, mauris a pharetra consectetur, ipsum dolor porta tortor, nec consequat odio magna non odio.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Features</h2>
            <ul className="list-disc pl-6">
                <li className="text-lg mb-2">Product Listings</li>
                <li className="text-lg mb-2">Search and Discovery Tools</li>
                <li className="text-lg mb-2">Ratings and Reviews</li>
                <li className="text-lg mb-2">Escrow Services</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  );
};

export default AboutUs;
