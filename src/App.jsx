import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import OnBoarding from "./pages/OnBoarding"
import Game from "./pages/Game"
import NumberGame from "./pages/NumberGame"
import { createContext, useState } from "react"
import Welcome from "./pages/Welcome"
import CardGame from "./pages/CardGame"

export const ScoreContext = createContext();

function App() {
  const [bestScore, setBestScore] = useState({
    numberGame: '-',
    cardGame: '-',
    textGame: '-',
  });
  const [seconds, setSeconds] = useState(0);

  const setGameScore = (gameName, score) => {
    setBestScore((prevScores) => ({
      ...prevScores,
      [gameName]: score,
    }));
  }

  return (
    <BrowserRouter>
      <ScoreContext.Provider value={{ bestScore, setGameScore, seconds, setSeconds }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/on-board" element={<OnBoarding />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/number-game" element={<NumberGame />} />
          <Route path="/game/card-game" element={<CardGame />} />
        </Routes>
      </ScoreContext.Provider>
    </BrowserRouter>
  )
}

export default App
