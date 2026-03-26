import React from "react";
import { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const startQuiz = () => {
    if (!name.trim()) return alert("Please enter your name");
    dispatch({ type: "SET_USERNAME", payload: name });
    navigate("/quiz");
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
      <input
        placeholder="Enter your name"
        className="form-control w-50 mx-auto mb-3"
        type="text"
        onChange={(e) => setName(e.target.value)}
        autocomplete="off"
      />
      <button className="btn btn-primary btn-lg" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default Home;
