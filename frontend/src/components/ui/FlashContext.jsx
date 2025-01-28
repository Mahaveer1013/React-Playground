import { useState, useEffect, useRef } from 'react';
import { FlashMessageContext } from '../../config/FlashMessageContext';

export const FlashMessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState(5000);
  const [type, setType] = useState('success');
  const [progress, setProgress] = useState(100);

  const timerRef = useRef(null); // Persist timer across renders
  const progressIntervalRef = useRef(null);

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const showMessage = (
    message,
    type = 'success',
    messageDuration = 5000
  ) => {
    clearTimers(); // Clear previous timers
    setMessage(message);
    setType(type);
    setDuration(messageDuration);
    setProgress(100); // Reset progress
    setIsVisible(true);

    // Start auto-hide timer
    timerRef.current = window.setTimeout(() => setIsVisible(false), messageDuration);

    // Start progress bar
    const intervalTime = 50; // Update every 50ms
    const decrement = 100 / (messageDuration / intervalTime); // Calculate decrement per interval
    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.max(prev - decrement, 0);
        if (newProgress === 0) {
          clearTimers(); // Stop timers when progress is 0
        }
        return newProgress;
      });
    }, intervalTime);
  };

  const closeMessage = () => {
    clearTimers();
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      clearTimers(); // Cleanup on unmount
    };
  }, []);

  // Define styles for different message types
  const getMessageClasses = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'warn':
        return 'bg-yellow-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-700 text-white';
    }
  };

  return (
    <FlashMessageContext.Provider value={{ showMessage }}>
      {children}
      {isVisible && (
        <div
          className={`fixed top-5 right-5 py-2 px-4 rounded-lg shadow-lg flex items-center justify-between ${getMessageClasses()} z-50`}
          onMouseEnter={() => clearTimers()} // Pause timers on hover
          onMouseLeave={() => {
            // Resume timers on mouse leave
            timerRef.current = window.setTimeout(() => setIsVisible(false), duration);
            const remainingTime = (progress / 100) * duration;
            const decrement = 100 / (remainingTime / 50);
            progressIntervalRef.current = window.setInterval(() => {
              setProgress((prev) => Math.max(prev - decrement, 0));
            }, 50);
          }}
        >
          <span className="flex-1 mr-4">{message}</span>
          <button
            onClick={closeMessage}
            className="text-white font-bold text-lg hover:text-gray-200 focus:outline-none"
          >
            &times;
          </button>
          <div
            className="absolute bottom-0 left-0 h-1 bg-white opacity-75 rounded-b-lg"
            style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
          ></div>
        </div>
      )}
    </FlashMessageContext.Provider>
  );
};
