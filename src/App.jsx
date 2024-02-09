import { useState, useEffect } from "react";
import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const rate = Math.round(((good + neutral) / total) * 100);

  return (
    <>
      <Description />
      <Options feedback={feedback} setFeedback={setFeedback} total={total} />
      {total > 0 ? (
        <Feedback feedback={feedback} total={total} rate={rate} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
