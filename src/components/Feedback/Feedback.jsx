export const Feedback = ({ feedback, total, rate}) => {
  const { good, neutral, bad } = feedback;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>{rate} %</p>
    </>
  );
};
