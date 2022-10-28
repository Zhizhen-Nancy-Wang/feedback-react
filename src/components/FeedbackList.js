import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";

function FeedbackList({ feedback, deleteFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => {
  //         const { id, rating, text } = item;
  //         return (
  //           <motion.div
  //             key={item.id}
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0 }}
  //           >
  //             <FeedbackItem
  //               rating={rating}
  //               text={text}
  //               key={id}
  //               id={id}
  //               deleteItem={deleteFeedback}
  //             />
  //           </motion.div>
  //         );
  //       })}
  //     </AnimatePresence>
  //   </div>
  // );

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
            deleteItem={deleteFeedback}
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
