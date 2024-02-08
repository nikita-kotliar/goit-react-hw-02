export const Feedback = ({ clicksGood, clicksNeutral, clicksBad }) => {
  const totalFeedback = clicksBad + clicksGood + clicksNeutral;
  return (
    <>
      <p>Good: {clicksGood}</p>
      <p>Neutral: {clicksNeutral}</p>
      <p>Bad: {clicksBad}</p>
      <p>{totalFeedback}</p>
      <p>{Math.round(((clicksGood + clicksNeutral) / totalFeedback) * 100)} %</p>
    </>
  );
};
