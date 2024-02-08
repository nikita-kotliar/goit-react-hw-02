export const Options = ({
  Good,
  setGood,
  Neutral,
  setNeutral,
  Bad,
  setBad,
}) => {
  const handleGoodClick = () => {
    setGood(Good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(Neutral + 1);
  };

  const handleBadClick = () => {
    setBad(Bad + 1);
  };

  const resetClicks = () => {
    setBad(0);
    setNeutral(0);
    setGood(0);
  };

  const total = Good + Neutral + Bad;

  return (
    <div>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      {total > 0 ? <button onClick={resetClicks}>Reset</button> : null}
    </div>
  );
};
