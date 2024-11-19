import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import OnBoarding from "./pages/OnBoarding"
import Game from "./pages/Game"
import NumberGame from "./pages/NumberGame"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/on-board" element={<OnBoarding />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/number-game" element={<NumberGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
