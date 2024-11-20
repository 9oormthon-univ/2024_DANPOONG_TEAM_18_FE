import styled from "styled-components";
import backArrow from "../assets/back-arrow.svg";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"
import { useState, useEffect, useContext } from "react";
import { ScoreContext } from "../App"

const Number = [1,2,3,4,5,6,7,8,9,10,11,12];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const NumberGame = () => {
    const nav = useNavigate();
    const { bestScore, setGameScore, seconds, setSeconds } = useContext(ScoreContext);
    const [shuffledNumbers, setShuffledNumbers] = useState([]);
    const [clickedNumbers, setClickedNumbers] = useState([]);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
      setShuffledNumbers(shuffleArray([...Number]));
    }, []);

    const handleNumberClick = (num) => {
      if(num === clickedNumbers.length + 1) {
        const newClickedNumbers = [...clickedNumbers, num];
        setClickedNumbers(newClickedNumbers);

        if (newClickedNumbers.length === Number.length) {
          alert('축하합니다! 모든 숫자를 순서대로 클릭했습니다!');
          setClickedNumbers([]);
          setIsRunning(false);
          setSeconds(0);
          
          if(bestScore.numberGame === '-' || bestScore.numberGame > seconds ){
            setGameScore("numberGame", seconds);
          }
        }
      } else {
        alert('실패!');
        setClickedNumbers([]);
        setIsRunning(false);
        setSeconds(0);
      }
    }

  return (
    <Wrapper>
      <Header>
        <img src={backArrow} alt="back" width={25} height={25} onClick={() => nav(-1)}/>
      </Header>
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
      <Button text={"나가기"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  width: 100%;
  margin-bottom: 84px;

  Button {
    margin: 45px 130px;
  }
`;

const Header = styled.div`
  width: 100%;
  margin: 15px 0px;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 20px;
`

const NumberGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

const NumberItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 20px;
  background-color: ${({isClicked, theme}) => (isClicked ? theme.colors.main : "#FFFFFF")};
  color: ${({isClicked}) => (isClicked ? "#FFFFFF" : "black")};
  border: 1px solid gray;
  font-size: 2rem;
  font-weight: bold;
`

export default NumberGame;
