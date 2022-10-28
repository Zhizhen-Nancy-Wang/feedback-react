import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Button from "./components/shared/Button";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  console.log(feedback);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleDeleteAll = () => {
    setFeedback([]);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {feedback.length ? (
          <button
            onClick={handleDeleteAll}
            className="btn"
            version="secondary"
            style={{ color: "purple" }}
          >
            Delete All
          </button>
        ) : (
          <button
            onClick={refresh}
            className="btn"
            version="secondary"
            style={{ color: "purple" }}
          >
            Refresh the Page
          </button>
        )}
      </div>
    </>
  );
}
export default App;
