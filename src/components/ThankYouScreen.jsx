import React, { useEffect } from 'react';

const ThankYouScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => window.location.reload(), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-background text-text">
      <h1 className="text-3xl font-bold mb-4 text-primary">Thank You for Your Feedback!</h1>
      <p className="text-lg">We appreciate your time. You will be redirected shortly.</p>
    </div>
  );
};

export default ThankYouScreen;
