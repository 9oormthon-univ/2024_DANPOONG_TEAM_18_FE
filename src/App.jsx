import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

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
import LoginAuthorizationCode from "./pages/LoginAuthorizationCode";

export const ScoreContext = createContext();

function AppContent() {
  // const [level, setLevel] = useState(1);
  // const [bestScore, setBestScore] = useState({
  //   numberGame: '-',
  //   cardGame: '-',
  //   textGame: '-',
  // });
  const [userData, setUserData] = useState({
      walks: 0,
      gamePlayed: false,
      diaryWrote: false,
      level: 1,
      statistics: [
        {
          gameType: "숫자 순서 게임",
          highScore: 0,
        },
        {
          gameType: "틀린 단어 찾기 게임",
          highScore: 0,
        },
        {
          gameType: "카드 뒤집기 게임",
          highScore: 0,
        },
      ]
  });
  const [seconds, setSeconds] = useState(0);
  const [id, setId] = useState();

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; 
      try {
        const response = await axios.get(`${apiBaseUrl}/api/vi/mission`, {
          params: { id },
        });
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, apiBaseUrl]);

  console.log(userData)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiBaseUrl}/api/vi/mission`, {
  //         params: { id },
  //       });
  //       setUserData(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id])

  const location = useLocation();
  const hideLogoPaths = ['/welcome', '/login'];
  const shouldShowLogo = !hideLogoPaths.includes(location.pathname);

  return (
    <ScoreContext.Provider value={{ ...userData, id, setId, seconds, setSeconds }}>
      {shouldShowLogo && <img src={logo} alt="Logo" className="logo" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/oauth2/code/kakao" element={<LoginAuthorizationCode />} />
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