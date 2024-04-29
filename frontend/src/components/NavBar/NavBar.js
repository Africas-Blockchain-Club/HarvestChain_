import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-green-500 p-4 flex items-center justify-between pl-10 pr-20">
            <div className="flex items-center">
                <span className="text-black text-3xl font-bold">Harvest Chain_</span>
            </div>
            <ul className="flex space-x-8 text-white">
                <li className="hover:text-black-200 text-lg">
                    <Link to="/Home">Home</Link>
                </li>
                <li className="hover:text-black-200 text-lg">
                    <Link to="/About">About</Link>
                </li>
                <li className="hover:text-black-200 text-lg">
                    <Link to="/Marketplace">Marketplace</Link>
                </li>
                <li className="hover:text-black-200 text-lg">
                    <Link to="/Agreements">Agreements</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from '../Home/Home';
// import AboutUs from "../AboutUs/AboutUs";
// import Marketplace from "../Marketplace/Marketplace";
// import Agreements from "../Agreements/Agreements";

// function NavBar() {
//     return (
//         <Router>
//             <nav className="bg-green-500 p-4 flex items-center justify-between pl-10 pr-20">
//                 <div className="flex items-center">
//                     <span className="text-black text-3xl font-bold">Harvest Chain_</span>
//                 </div>
//                 <ul className="flex space-x-8 text-white">
//                     <li className="hover:text-black-200 text-lg">
//                         <Link to="/Home">Home</Link>
//                     </li>
//                     <li className="hover:text-black-200 text-lg">
//                         <Link to="/About">About</Link>
//                     </li>
//                     <li className="hover:text-black-200 text-lg">
//                         <Link to="/Marketplace">Marketplace</Link>
//                     </li>
//                     <li className="hover:text-black-200 text-lg">
//                         <Link to="/Agreements">Agreements</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Routes>
//                 <Route path="/Home" element={<Home />} />
//                 <Route path="/About" element={<AboutUs />} />
//                 <Route path="/Marketplace" element={<Marketplace />} />
//                 <Route path="/Agreements" element={<Agreements />} />
//             </Routes>
//         </Router>
//     );
// }

// export default NavBar;





// import React, { useState } from 'react';
// import Home from '../Home/Home';
// import AboutUs from "../AboutUs/AboutUs";

// function NavBar() {
//     const [currentPage, setCurrentPage] = useState('home');

//     const navigateTo = (page) => {
//         setCurrentPage(page);
//     };

    

//     switch (currentPage) {
//         case 'home' || "/":
//             <Home/>
//             break;
//         case 'about':
//             <AboutUs/>
//             break;
//         case 'marketplace':

//             break;
//         case 'agreements':

//             break;
        
//     }

//     return (
//         <nav className="bg-green-500 p-4 flex items-center justify-between pl-10 pr-20">
//             <div className="flex items-center">
//                 {/* <img src="/harvest-icon.png" alt="Harvest Cain" className="h-8 mr-2" /> */}
//                 <span className="text-black text-3xl font-bold">Harvest Chain_</span>
//             </div>
//             <ul className="flex space-x-8 text-white">
//                 <li className="hover:text-black-200 text-lg" onClick={<Home/>}>Home</li>
//                 <li className="hover:text-black-200 text-lg" onClick={<AboutUs/>}>About</li>
//                 <li className="hover:text-black-200 text-lg" onClick={() => navigateTo('marketplace')}>Marketplace</li>
//                 <li className="hover:text-black-200 text-lg" onClick={() => navigateTo('agreements')}>Agreements</li>
//             </ul>
            
//         </nav>
//     );
// }

// export default NavBar;


