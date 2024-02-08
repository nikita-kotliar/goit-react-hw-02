import { useState } from "react";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";
import "./App.css";

function App() {
  const [clicksGood, setGood] = useState(() => {
    const savedGood = window.localStorage.getItem("Good");
    return savedGood ? parseInt(savedGood) : 0;
  });
  const [clicksNeutral, setNeutral] = useState(() => {
    const savedNeutral = window.localStorage.getItem("Neutral");
    return savedNeutral ? parseInt(savedNeutral) : 0;
  });
  const [clicksBad, setBad] = useState(() => {
    const savedBad = window.localStorage.getItem("Bad");
    return savedBad ? parseInt(savedBad) : 0;
  });
  

  const totalClicks = clicksGood + clicksNeutral + clicksBad;

  return (
    <>
      <Description />
      <Options
        clicksGood={clicksGood}
        setGood={setGood}
        clicksNeutral={clicksNeutral}
        setNeutral={setNeutral}
        clicksBad={clicksBad}
        setBad={setBad}
      />
      {totalClicks > 0 ? (
        <Feedback
          clicksGood={clicksGood}
          clicksNeutral={clicksNeutral}
          clicksBad={clicksBad}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;