import React, { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function DeleteAllBtn() {
  const { feedback, setFeedback } = useContext(FeedbackContext);
  const handleDeleteAll = () => {
    if (window.confirm("Are you sure to delete all?")) setFeedback([]);
  };

  return (
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
          onClick={() => window.location.reload()}
          className="btn"
          version="secondary"
          style={{ color: "purple" }}
        >
          Refresh the Page
        </button>
      )}
    </div>
  );
}

export default DeleteAllBtn;
