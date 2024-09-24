import React, { useState } from 'react';

const AudioInputForm = ({ onGenerate }) => {
  const [frequency, setFrequency] = useState(440); 
  const [amplitude, setAmplitude] = useState(1); 
  const [duration, setDuration] = useState(5); 
  const [initialVelocity, setInitialVelocity] = useState(0); 

  const handleGenerate = () => {
    onGenerate(frequency, amplitude, duration, initialVelocity);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto lg:mx-0">
      <h2 className="text-xl font-bold mb-4">Formulaire du Signal Audio</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Frequence (Hz):</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={frequency}
          onChange={(e) => setFrequency(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amplitude:</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={amplitude}
          onChange={(e) => setAmplitude(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Duration (s):</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={duration}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Velocité Initial:</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={initialVelocity}
          onChange={(e) => setInitialVelocity(parseFloat(e.target.value))}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        onClick={handleGenerate}
      >
        Generer le Signale
      </button>
    </div>
  );
};

export default AudioInputForm;
