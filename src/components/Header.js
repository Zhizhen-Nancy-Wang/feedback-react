import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function Header({ text, bgColor, textColor }) {
  const { reverse, setReverse } = useContext(FeedbackContext);

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const changeMode = () => {
    setReverse((pre) => !pre);
  };

  return (
    <header style={headerStyles}>
      <div className="container" style={{ display: "flex" }}>
        <h2>{text}</h2>

        {reverse ? (
          <button className="btn btn-primary" onClick={changeMode}>
            ☾
          </button>
        ) : (
          <button className="btn btn-primary" onClick={changeMode}>
            ☀︎
          </button>
        )}

        <button className="btn btn-primary">About</button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  textColor: "#ff6a95",
  bgColor: "rgba(0,0,0,0.5)",
};

export default Header;
