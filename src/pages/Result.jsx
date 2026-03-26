import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
function Result() {
  const { state, dispatch } = useContext(QuizContext);
  const percentage = Math.round((state.score / state.questions.length) * 100);
  useEffect(() => {
    const entry = {
      name: state.username,
      score: state.score,
      date: new Date().toLocaleDateString(),
      percentage: percentage,
    };
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const updated = [...stored, entry];
    updated.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(updated));
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-5">
        <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
        <h4>{state.username}, your score is:</h4>
        <h1 className="text-success">{state.score}</h1>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="/leaderboard" className="btn btn-primary">
            View Leaderboard
          </Link>
          <Link
            onClick={() => dispatch({ type: "RESET" })}
            to="/"
            className="btn btn-warning"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Result;
