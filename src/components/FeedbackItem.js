import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import propsTypes from "prop-types";

function FeedbackItem({ text, rating, id, deleteItem }) {
  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          onClick={() => handleDelete(id)}
          className="btn"
          style={{ backgroundColor: "#ff6a95" }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
}

FeedbackItem.protoTypes = {
  text: propsTypes.string,
  rating: propsTypes.number,
};

export default FeedbackItem;
