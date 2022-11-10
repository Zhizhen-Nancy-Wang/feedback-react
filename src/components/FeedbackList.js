import React, { createContext, useContext, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackList() {
  const { feedback, deleteFeedback, reverse, editFeedback } =
    useContext(FeedbackContext);

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
        return (
          <FeedbackItem
            item={item}
            key={item.id}
            deleteItem={deleteFeedback}
            reverse={reverse}
            editFeedback={editFeedback}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;
