export const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>{Math.round(((good + neutral) / totalFeedback) * 100)} %</p>
    </>
  );
};
