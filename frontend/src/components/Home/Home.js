import React from 'react';
import NavBar from '../NavBar/NavBar';
import ConnectButton from "../ConnectButton";
import "./Home.css"

function Home({connect}) {
    return (
        <div>
            <NavBar />
            <section className="home-wrapper">
                <div className="paddings innerWidth flexCenter home-Container">


                    <div className="home-left">
                        <div className="home-title">
                            <div className="green-circle"/>
                            <h1 className="text-6xl font-bold mb-4">Growing <br/> 
                                Tomorrow's Harvest <br/> with Technology</h1>
                        </div>
                        <p className="text-lg mb-4">
                            Promoting fair trade practices by leveraging technology to empower farmers.
                        </p>
                        <ConnectButton connectWallet={connect}/>
                        
                    </div>
                    {/* Right Section */}
                    <div className="flexCenter home-right">
                        <div className="image-container">
                            <img src="./agriculture.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
