import './App.css';
import { useTime } from 'react-timer-hook';
import { useState } from 'react';

function App() {
  const [flip, setFlip] = useState(false);
  const [shake, setShake] = useState(false);
  const { hours, minutes, seconds, ampm } = useTime({ format: '12-hour' });

  const handleFlipAndShake = () => {
    setFlip(true);
    setShake(true);
    setTimeout(() => setFlip(false), 1000); // Reset flip after animation
    setTimeout(() => setShake(false), 500); // Reset shake after animation
  };

  return (
    <div className="App" onClick={handleFlipAndShake}>
      <h1 style={flip ? { animation: 'flip 1s ease-in-out' } : {}}>
        MINI GLOBAL CLOCK
      </h1>
      <p style={shake ? { animation: 'shake 0.5s ease-in-out' } : {}}>
        Time: {hours}:{minutes}:{seconds} {ampm}
      </p>
      <p className="instruction">Tap the screen to see magic!</p>
    </div>
  );
}

export default App;
