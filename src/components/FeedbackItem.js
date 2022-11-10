import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackItem({ item, deleteItem, reverse, editFeedback }) {
  const { rating, id, text } = item;
  const handleDelete = (id) => {
    deleteItem(id);
    console.log(1);
  };

  const handleEdit = (item) => {
    editFeedback(item);
    console.log(item);
  };

  return (
    <Card reverse={reverse}>
      <div className="num-display ">{rating}</div>
      <div className="text-display">{text}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <button onClick={() => handleDelete(id)} className="btn btn-secondary">
          Delete
        </button>

        <button onClick={() => handleEdit(item)} className="btn btn-secondary">
          Edit
        </button>
      </div>
    </Card>
  );
}

export default FeedbackItem;
