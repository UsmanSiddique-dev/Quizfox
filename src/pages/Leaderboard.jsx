import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

function Leaderboard() {
  const { dispatch } = useContext(QuizContext);

  const [data, setData] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setData(stored);
  }, []);
  const clearBoard = () => {
    localStorage.removeItem("leaderboard");
    setData([]);
  };
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
      {data.length === 0 ? (
        <>
          <h4 className="fw-bold">Nobody play. play the quiz first </h4>
        </>
      ) : (
        <table className="table table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.percentage}%</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link
        onClick={() => dispatch({ type: "RESET" })}
        to="/"
        className="btn btn-warning mt-3 mr-5"
      >
        Home
      </Link>

      <button className="btn btn-danger mt-3 ml-5" onClick={clearBoard}>
        Clear Leaderboard
      </button>
    </div>
  );
}

export default Leaderboard;
