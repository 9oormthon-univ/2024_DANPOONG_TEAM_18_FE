import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Timer from "../components/Timer";
import Button from "../components/Button"
import { ScoreContext } from "../App"
import Retry from "./Retry";
import GameComplete from "./GameComplete";

const Number = [1,2,3,4,5,6,7,8,9,10,11,12];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const NumberGame = () => {
    const nav = useNavigate();
    const { seconds, setSeconds, id } = useContext(ScoreContext);
    const [shuffledNumbers, setShuffledNumbers] = useState([]);
    const [clickedNumbers, setClickedNumbers] = useState([]);
    const [isRunning, setIsRunning] = useState(true);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isCompleteOpen, setIsCompleteOpen] = useState(false);

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
      setShuffledNumbers(shuffleArray([...Number]));
    }, []);

    const handleNumberClick = (num) => {
      if(num === clickedNumbers.length + 1) {
        const newClickedNumbers = [...clickedNumbers, num];
        setClickedNumbers(newClickedNumbers);

        if (newClickedNumbers.length === Number.length) {
          setIsCompleteOpen(true);
          setClickedNumbers([]);
          setIsRunning(false);
          
          // if(bestScore.numberGame === '-' || bestScore.numberGame > seconds ){
          //   setGameScore("numberGame", seconds);
          // }

          const payload = {
            score: seconds, 
            gameType: "숫자 순서 게임"
          };

          axios.patch(`${apiBaseUrl}/api/vi/game/play`, payload, {
            params: { id },
          })
            .then((response) => {
              console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
          }
      } else {
        setClickedNumbers([]);
        setIsRunning(false);
        setIsOverlayOpen(true);
      }
    }

    const handleRetry = () => {
      setClickedNumbers([]);
      setShuffledNumbers(shuffleArray([...Number]));
      setIsRunning(true);
      setIsOverlayOpen(false);
      setSeconds(0);
    }

  return (
    <>
      <Wrapper>
        <Title>숫자 순서 게임</Title>
        <Timer isRunning={isRunning} />
        <NumberGrid>
          {shuffledNumbers.map((num) => (
            <NumberItem 
              key={num}
              onClick={() => handleNumberClick(num)}
              isClicked={clickedNumbers.includes(num)}
            >
              {num}
            </NumberItem>
          ))}
        </NumberGrid>
        <Button text={"나가기"} onClick={() => nav(-1)}/>
      </Wrapper>
      {isCompleteOpen && <GameComplete />}
      {
        isOverlayOpen && (
          <Retry handleRetry={handleRetry} />
        )
      }
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  width: 100%;
  margin-bottom: 84px;

  Button {
    margin: 45px 75px;
    width: 150px;
    height: 40px;
  }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 26px;
    margin-top: 50px;
    margin-bottom: 20px;
`

const NumberGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
`;

const NumberItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 20px;
  background-color: ${({isClicked, theme}) => (isClicked ? theme.colors.main : "#FFFFFF")};
  color: ${({isClicked}) => (isClicked ? "#FFFFFF" : "black")};
  border: 1px solid gray;
  font-size: 2.2rem;
  z-index: 10;
`

export default NumberGame;
