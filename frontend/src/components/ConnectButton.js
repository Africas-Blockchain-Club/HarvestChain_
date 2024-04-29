import React, { useState } from "react";


const ConnectButton = ({connectWallet}) => {
    

    return (
    
        <button onClick={() => {connectWallet()}} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 roundedbg-green-500 hover:bg-green-600 text-white hover:text-black font-bold py-2 px-4 rounded">Connect Wallet</button>
    
    
)
}

export default ConnectButton;