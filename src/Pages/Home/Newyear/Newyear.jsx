import  { useState, useEffect } from 'react';
import './css.css'; 
const Newyear = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isNewYear, setIsNewYear] = useState(false);

  function calculateTimeLeft() {
    const year = new Date().getFullYear() + 1; // Next year
    const difference = +new Date(`${year}-01-01T00:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (Object.values(timeLeft).every(val => val === 0)) {
        setIsNewYear(true);
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className={`flex justify-center items-center h-screen ${isNewYear ? 'bg-black' : 'bg-gray-200'}`}>
    <div className="text-center">
      <h1 className={`text-4xl font-bold mb-4 ${isNewYear ? 'text-white' : 'text-black'}`}>
        {isNewYear ? 'Happy New Year!' : 'Happy New Year Countdown!'}
      </h1>
      {isNewYear ? (
        <div className="fireworks-animation">
          {/* Fireworks animation */}
          <div className="firework"></div>
          {/* Add more fireworks divs or customize the animation */}
        </div>
      ) : (
        <div className="flex justify-center items-center text-4xl font-bold space-x-4">
          <span>{timeLeft.days}</span> days{' '}
          <span>{timeLeft.hours}</span> hours{' '}
          <span>{timeLeft.minutes}</span> minutes{' '}
          <span>{timeLeft.seconds}</span> seconds
        </div>
      )}
    </div>
  </div>
  );
};

export default Newyear;
