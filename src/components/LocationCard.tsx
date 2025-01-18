import React, { useState, useEffect } from 'react';

const LocationCard: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-gray-900 shadow-lg rounded-2xl">
      <div className="relative w-full h-64 overflow-hidden bg-white rounded-lg">
        <img
          src="/assets/map-bordeaux.png"
          alt="Map"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-white">Bordeaux, France</h2>
        <p className="mt-1 text-gray-400">{time}</p>
      </div>
    </div>
  );
};

export default LocationCard;
