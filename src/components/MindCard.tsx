import React from 'react';

const FoundationCard = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto text-white shadow-lg bg-gradient-to-r from-purple-800 via-pink-500 to-orange-500 rounded-3xl">
      <h2 className="mb-6 text-lg font-bold text-center">FOUNDATION OF MY WORK</h2>
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Functionality</h3>
            <p>Designs that serve a purpose</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Simplicity</h3>
            <p>Complexity surfaced only when necessary</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
            <div className="w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
            <div className="w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
          </div>
        </div>
        <div className="space-y-4 text-right">
          <div>
            <h3 className="text-xl font-semibold">Emotion</h3>
            <p>Products with a character & solutions optimized for emotion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCard;
