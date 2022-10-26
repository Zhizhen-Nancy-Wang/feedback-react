import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";

function FeedbackList({ feedback, deleteItem }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div>
      {feedback.map((item) => {
        const { id, rating, text } = item;
        return (
          <FeedbackItem
            rating={rating}
            text={text}
            key={id}
            id={id}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}
FeedbackList.propTypes = {
  feedback: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
      rating: propTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
