import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
const Result = lazy(() => import("./pages/Result"));
import "bootstrap/dist/css/bootstrap.min.css";
import QuizProvider from "./context/QuizContext";
import Leaderboard from "./pages/Leaderboard";
function App() {
  return (
    <>
      <QuizProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QuizProvider>
    </>
  );
}

export default App;
