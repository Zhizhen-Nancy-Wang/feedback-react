import React from "react";
import propsTypes from "prop-types";

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "grey " : "white",
        color: reverse ? "black" : "black",
      }}
    >
      {children}
    </div>
  );
}
Card.defaultProps = {
  reverse: true,
};

Card.propsTypes = {
  children: propsTypes.node.isRequired,
  reverse: propsTypes.bool,
};

export default Card;
