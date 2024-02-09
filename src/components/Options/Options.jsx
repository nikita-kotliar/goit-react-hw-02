export const Options = ({ feedback, setFeedback, total }) => {
  const { good, neutral, bad } = feedback;

  const handleClick = (feedbackItem) => {
    setFeedback({ ...feedback, [feedbackItem]: feedback[feedbackItem] + 1 });
  };

  const resetClicks = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      {total > 0 ? <button onClick={resetClicks}>Reset</button> : null}
    </div>
  );
};
