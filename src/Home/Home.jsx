import React, { useState } from 'react';
import DynamicChart from '../components/DynamicChart';
import AudioInputForm from '../components/AudioInputForm';
import RungeKuttaSimulator from '../utils/RungeKuttaSimulator';

const Home = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  const [frequency, setFrequency] = useState(440);
  const [amplitude, setAmplitude] = useState(1);
  const [duration, setDuration] = useState(5);
  const [initialVelocity, setInitialVelocity] = useState(0);

  const handleGenerateSignal = (freq, amp, dur, initialVel) => {
    setFrequency(freq);
    setAmplitude(amp);
    setDuration(dur);
    setInitialVelocity(initialVel);
  };

  const handleSimulateSignal = (simulatedData, simulatedLabels) => {
    setData(simulatedData);
    setLabels(simulatedLabels);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Simulation de Signal Audio avec Runge-Kutta</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Formulaire à gauche */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <AudioInputForm onGenerate={handleGenerateSignal} />
        </div>

        {/* Graphique à droite */}
        <div className="flex-grow w-full lg:w-2/3">
          <RungeKuttaSimulator
            frequency={frequency}
            amplitude={amplitude}
            duration={duration}
            initialVelocity={initialVelocity}
            onSimulate={handleSimulateSignal}
          />
          <DynamicChart data={data} labels={labels} />
        </div>
      </div>
    </div>
  );
};

export default Home;
