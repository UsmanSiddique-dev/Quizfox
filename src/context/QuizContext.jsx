import { createContext, useReducer } from "react";

import questions from "../data/questions.json";

export const QuizContext = createContext();

const initialState = {
  username: "",
  questions,
};
const quizReducer =(state,action)=>{
   switch (action.type) {
    case "SET_USERNAME":
        return {
            ...state,
            username: action.payload
        }
        
        
   
    default:
        return state;
        
   }

}
export default function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
