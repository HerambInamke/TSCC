import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <svg
        className="loader-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="loader-circle-bg"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="8"
        />
        <circle
          className="loader-circle"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="8"
          strokeDasharray="283"
          strokeDashoffset="283"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;