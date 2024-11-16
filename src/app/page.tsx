import React from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

// component
import Navbar from './components/Navbar';

const App = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: 'bbc8819d-f94e-4f1e-8969-460a2361b06b', // Use the environment variable
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <div>
        <Navbar />
        {/* Header Section */}
        <header className="bg-gray-100 py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            {/* Text Content */}
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Emphasizing secure student identity verification through blockchain.
              </h1>
              <p className="text-gray-600 text-lg">
                Secure, decentralized student identity verification with MetaMask. Connect your wallet to verify and
                access your status instantly.
              </p>
            </div>
            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/path-to-your-image.jpg" // Replace with the actual image path
                alt="Blockchain Illustration"
                className="w-64 h-auto md:w-96"
              />
            </div>
          </div>
        </header>
        {/* Rest of your content */}
        <div className="pt-20">
          <section id="home" className="h-screen bg-gray-100">
            Home Content
          </section>
          <section id="ranking" className="h-screen bg-gray-200">
            Ranking Content
          </section>
          <section id="drops" className="h-screen bg-gray-300">
            DROPS Content
          </section>
        </div>
      </div>
    </DynamicContextProvider>
  );
};

export default App;
