import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import DeleteAllBtn from "./components/DeleteAllBtn";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
      <DeleteAllBtn />
    </FeedbackProvider>
  );
}
export default App;
