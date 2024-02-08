export const Options = ({
  clicksGood,
  setGood,
  clicksNeutral,
  setNeutral,
  clicksBad,
  setBad,
}) => {
  const handleGoodClick = () => {
    setGood(clicksGood + 1);
    window.localStorage.setItem("Good", clicksGood + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(clicksNeutral + 1);
    window.localStorage.setItem("Neutral", clicksNeutral + 1);
  };

  const handleBadClick = () => {
    setBad(clicksBad + 1);
    window.localStorage.setItem("Bad", clicksBad + 1);
  };

  const resetClicks = () => {
    setBad(0);
    setNeutral(0);
    setGood(0);
    window.localStorage.setItem("Bad", clicksBad = 0);
    window.localStorage.setItem("Neutral", clicksNeutral = 0);
    window.localStorage.setItem("Good", clicksGood = 0);
    };

    const totalClicks = clicksGood + clicksNeutral + clicksBad;

  return (
    <div>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      {totalClicks > 0 ? <button onClick={resetClicks}>Reset</button> : null}
    </div>
  );
};
