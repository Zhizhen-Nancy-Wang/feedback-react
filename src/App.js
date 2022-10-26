import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteItem = (id) => {
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
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteItem={deleteItem} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {feedback.length ? (
          <button
            onClick={handleDeleteAll}
            className="btn"
            style={{ backgroundColor: "#ff6a95" }}
          >
            Delete All
          </button>
        ) : (
          <button
            onClick={refresh}
            style={{ backgroundColor: "#ff6a95" }}
            className="btn"
          >
            Refresh the Page
          </button>
        )}
      </div>
    </>
  );
}
export default App;
