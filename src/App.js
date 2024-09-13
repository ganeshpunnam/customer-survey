import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyScreen from './components/SurveyScreen';
import ThankYouScreen from './components/ThankYouScreen';

const questions = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", type: "text" },
];

const App = () => {
  const [step, setStep] = useState('welcome');
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleStart = () => setStep('survey');
  const handleAnswer = (questionId, answer) => setAnswers({ ...answers, [questionId]: answer });
  const handleNext = () => setCurrentQuestion(currentQuestion + 1);
  const handlePrevious = () => setCurrentQuestion(currentQuestion - 1);
  const handleSkip = () => handleNext();
  const handleSubmit = () => {
    // Save answers to local storage or backend here
    setStep('thankyou');
  };

  return (
 <div className=" h-screen">
      {step === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {step === 'survey' && (
        <SurveyScreen
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSkip={handleSkip}
          onSubmit={handleSubmit}
          isFirstQuestion={currentQuestion === 0}
          isLastQuestion={currentQuestion === questions.length - 1}
        />
      )}
      {step === 'thankyou' && <ThankYouScreen />}
    </div>
  );
};

export default App;
