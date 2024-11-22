import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Game from "./pages/Game"
import NumberGame from "./pages/NumberGame"
import Diary from "./pages/Diary"
import WriteDiary from "./pages/WriteDiary"
import RemindDiary from "./pages/RemindDiary"
import { createContext, useState } from "react"
import Welcome from "./pages/Welcome"
import CardGame from "./pages/CardGame"
import TextGame from "./pages/TextGame"

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
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/number-game" element={<NumberGame />} />
          <Route path="/game/card-game" element={<CardGame />} />
          <Route path="/game/text-game" element={<TextGame />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/write" element={<WriteDiary />} />
          <Route path="/diary/remind" element={<RemindDiary />} />
        </Routes>
      </ScoreContext.Provider>
    </BrowserRouter>
  )
}

export default App
