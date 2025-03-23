import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Mint = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);

  const nftCollections = [
    { 
      name: 'Creator Pass', 
      description: 'Exclusive access to premium features', 
      price: 0.05, 
      total: 1000,
      background: 'from-indigo-100 to-purple-100' 
    },
    { 
      name: 'Founder\'s Edition', 
      description: 'Limited series commemorative NFT', 
      price: 0.1, 
      total: 500,
      background: 'from-pink-100 to-rose-100' 
    },
    { 
      name: 'Community Champion', 
      description: 'Recognizing top contributors', 
      price: 0.075, 
      total: 250,
      background: 'from-violet-100 to-fuchsia-100' 
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Mint Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Glutisfy NFT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your digital identity with our exclusive NFT collections. Each NFT unlocks unique benefits and community access.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {nftCollections.map((nft, index) => (
            <motion.div
              key={nft.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${nft.background} rounded-3xl p-8 shadow-xl relative overflow-hidden`}
              onClick={() => setSelectedNFT(nft)}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{nft.name}</h3>
                <p className="text-gray-700 mb-6">{nft.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{nft.price} ETH</div>
                    <div className="text-gray-600">Total: {nft.total} NFTs</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium shadow-lg"
                  >
                    Mint Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedNFT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedNFT(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-3xl p-12 max-w-xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-6">{selectedNFT.name}</h3>
              <p className="text-gray-700 mb-8">{selectedNFT.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="text-xl font-bold">Price</div>
                  <div className="text-2xl">{selectedNFT.price} ETH</div>
                </div>
                <div>
                  <div className="text-xl font-bold">Available</div>
                  <div className="text-2xl">{selectedNFT.total} NFTs</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-xl"
              >
                Confirm Mint
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Mint;