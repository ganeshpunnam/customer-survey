import React from 'react';

const SurveyScreen = ({ question, onAnswer, onNext, onPrevious, onSkip, onSubmit, isFirstQuestion, isLastQuestion }) => {
  const handleChange = (e) => onAnswer(question.id, e.target.value);

  return (
    <div className="flex flex-col max-w-lg mx-auto  p-6 bg-background text-text shadow-md rounded-3xl mt-12 ">
      <h1 className="text-2xl font-bold mb-4 text-primary">Question {question.id}/5</h1>
      <p className="text-lg mb-6">{question.text}</p>
      {question.type === 'rating' && (
        <div className="flex space-x-2 mb-6">
          {[...Array(question.scale).keys()].map(i => (
            <label key={i} className="inline-block">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={i + 1}
                onChange={handleChange}
                className="mr-2"
              />
              {i + 1}
            </label>
          ))}
        </div>
      )}
      {question.type === 'text' && (
        <textarea onChange={handleChange} className="w-full p-3 border rounded-xl border-gray-300 shadow-custom-light mb-6" />
      )}
      <div className="flex space-x-4">
        {!isFirstQuestion && (
          <button onClick={onPrevious} className="px-4 py-2 bg-gray-300 text-text rounded-xl shadow-custom-light hover:shadow-custom-heavy transition-shadow duration-300">
            Previous
          </button>
        )}
        {!isLastQuestion ? (
          <button onClick={onNext} className="px-4 py-2 bg-primary text-white rounded-xl shadow-custom-light hover:shadow-custom-heavy transition-shadow duration-300">
            Next
          </button>
        ) : (
          <button onClick={onSubmit} className="px-4 py-2 bg-accent text-white rounded-xl shadow-custom-light hover:shadow-custom-heavy transition-shadow duration-300">
            Submit
          </button>
        )}
        <button onClick={onSkip} className="px-4 py-2 bg-gray-100 text-text rounded-xl shadow-custom-light hover:shadow-custom-heavy transition-shadow duration-300">
          Skip
        </button>
      </div>
    </div>
  );
};

export default SurveyScreen;
