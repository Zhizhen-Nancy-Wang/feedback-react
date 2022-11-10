import React, { version } from "react";

function Button({ children, version, isDisabled, type }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
};

export default Button;
