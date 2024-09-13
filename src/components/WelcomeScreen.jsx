import React from 'react';

const WelcomeScreen = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center h-screen p-6 bg-background text-text">
    <h1 className="text-3xl font-bold mb-4 text-primary">Welcome to Our Survey</h1>
    <p className="text-lg mb-6">We value your feedback. Please take a moment to answer a few questions.</p>
    <button onClick={onStart} className="px-6 py-3 bg-primary text-white rounded-xl shadow-custom-light hover:shadow-custom-heavy transition-shadow duration-300">
      Start Survey
    </button>
  </div>
);

export default WelcomeScreen;
