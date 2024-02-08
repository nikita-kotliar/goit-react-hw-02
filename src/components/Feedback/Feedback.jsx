import { useEffect, useState } from "react";

export const Feedback = ({ clicksGood, clicksNeutral, clicksBad }) => {
  const [totalFeedback, setTotalFeedback] = useState(0);

  useEffect(() => {
    
    const total = clicksBad + clicksGood + clicksNeutral;
    setTotalFeedback(total);

  
    localStorage.setItem(
      "feedbackData",
      JSON.stringify({ clicksGood, clicksNeutral, clicksBad })
    );
  }, [clicksGood, clicksNeutral, clicksBad]); 

  return (
    <>
      <p>Good: {clicksGood}</p>
      <p>Neutral: {clicksNeutral}</p>
      <p>Bad: {clicksBad}</p>
      <p>Total: {totalFeedback}</p>
      <p>
        {Math.round(((clicksGood + clicksNeutral) / totalFeedback) * 100)} %
      </p>
    </>
  );
};
