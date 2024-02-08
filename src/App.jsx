import { useState, useEffect } from "react";
import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import "./App.css";

function App() {
  const [Good, setGood] = useState(() => {
    const savedGood = window.localStorage.getItem("Good");
    return savedGood ? parseInt(savedGood) : 0;
  });
  const [Neutral, setNeutral] = useState(() => {
    const savedNeutral = window.localStorage.getItem("Neutral");
    return savedNeutral ? parseInt(savedNeutral) : 0;
  });
  const [Bad, setBad] = useState(() => {
    const savedBad = window.localStorage.getItem("Bad");
    return savedBad ? parseInt(savedBad) : 0;
  });

  useEffect(() => {
    window.localStorage.setItem("Good", Good.toString());
    window.localStorage.setItem("Neutral", Neutral.toString());
    window.localStorage.setItem("Bad", Bad.toString());
  }, [Good, Neutral, Bad]);

  const total = Good + Neutral + Bad;

  return (
    <>
      <Description />
      <Options
        Good={Good}
        setGood={setGood}
        Neutral={Neutral}
        setNeutral={setNeutral}
        Bad={Bad}
        setBad={setBad}
      />
      {total > 0 ? (
        <Feedback
          Good={Good}
          Neutral={Neutral}
          Bad={Bad}
        />
      ) : (
        <div>Notification</div>
      )}
    </>
  );
}

export default App;
