import { v4 as uuidv4 } from "uuid";
import React, { createContext, useState } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "this is a text1",
    },
    {
      id: 2,
      rating: 9,
      text: "this is a text2",
    },
    {
      id: 3,
      rating: 8,
      text: "this is a text3",
    },
  ]);
  const [reverse, setReverse] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item: item, edit: true });
  };

  const updateFeedback = (editedFeedback) => {
    console.log(editedFeedback);
    setFeedback(
      feedback.map((item) =>
        item.id === editedFeedback.id ? { ...item, ...editedFeedback } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        setReverse,
        feedback,
        reverse,
        feedbackEdit,
        setFeedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
