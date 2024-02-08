export const Feedback = ({ Good, Neutral, Bad }) => {
  const totalFeedback = Good + Neutral + Bad;

  return (
    <>
      <p>Good: {Good}</p>
      <p>Neutral: {Neutral}</p>
      <p>Bad: {Bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        {Math.round(((Good + Neutral) / totalFeedback) * 100)} %
      </p>
    </>
  );
};
