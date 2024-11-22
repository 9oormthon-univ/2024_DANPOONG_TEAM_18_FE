import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createContext, useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Game from "./pages/Game";
import NumberGame from "./pages/NumberGame";
import Diary from "./pages/Diary";
import WriteDiary from "./pages/WriteDiary";
import RemindDiary from "./pages/RemindDiary";
import Welcome from "./pages/Welcome";
import CardGame from "./pages/CardGame";
import TextGame from "./pages/TextGame";
import Profile from "./pages/Profile";
import Mart from "./pages/Mart";
import logo from "./assets/icons/logo.svg";

export const ScoreContext = createContext();

function AppContent() {
  const [level, setLevel] = useState(1);
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
  };

  const location = useLocation();
  const hideLogoPaths = ['/welcome', '/login'];
  const shouldShowLogo = !hideLogoPaths.includes(location.pathname);

  return (
    <ScoreContext.Provider value={{ level, setLevel, bestScore, setGameScore, seconds, setSeconds }}>
      {shouldShowLogo && <img src={logo} alt="Logo" className="logo" />}
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/mart" element={<Mart />} />
      </Routes>
    </ScoreContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;