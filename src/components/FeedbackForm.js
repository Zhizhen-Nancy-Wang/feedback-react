import { v4 as uuidv4 } from "uuid";
import React, { useContext, useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
  const {
    addFeedback,
    reverse,
    feedbackEdit,
    updateFeedback,
    setFeedbackEdit,
  } = useContext(FeedbackContext);

  const { item, edit } = feedbackEdit;

  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (text.length === 0) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.length && text.trim().length < 3) {
      setBtnDisabled(true);
      setMessage("Text must be at least 4 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 3) {
      const newFeedback = {
        rating: rating,
        text: text,
        id: uuidv4(),
      };
      if (edit === true) {
        const editedObj = {
          rating: rating,
          text: text,
          id: item.id,
        };

        updateFeedback(editedObj);
        setText("");
        setRating(10);
        setFeedbackEdit({ item: {}, edit: false });
      } else {
        addFeedback(newFeedback);
        setText("");
        setRating(10);
      }
    }
  };
  useEffect(() => {
    if (edit === true) {
      setBtnDisabled(false);
      setText(item.text);
      setRating(item.rating);
    }
  }, [feedbackEdit]);

  return (
    <Card reverse={reverse}>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate your service with us?</h2>
        <RatingSelect rating={rating} setRating={setRating} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} version="primary">
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
