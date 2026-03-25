import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";

function Quiz() {
  return (
    <div className="container mt-4">
      <Timer />
      <ProgressBar />
      <QuestionCard />
    </div>
  );
}

export default Quiz;
