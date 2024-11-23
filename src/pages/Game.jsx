import styled from "styled-components";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ScoreContext } from "../App";
import getFormatTime from "../utils/getFormatTime";

const gameDetails = [
  {
    key: "numberGame",
    path: "number-game",
    title: "숫자 순서 게임",
    description: "1부터 16까지 순서대로 누르는 \n 게임입니다 🤗",
  },
  {
    key: "cardGame",
    path: "card-game",
    title: "카드 뒤집기 게임",
    description: "카드를 뒤집어 같은 그림의 카드를 맞추는 \n 게임입니다 🃏",
  },
  {
    key: "textGame",
    path: "text-game",
    title: "틀린 단어 찾기 게임",
    description: "여러 개의 단어 중 틀린 단어를 골라내는 \n 게임입니다 🔍",
  },
];

const Game = () => {
  const nav = useNavigate();
  const { bestScore, setSeconds } = useContext(ScoreContext);
  const [randomGame, setRandomGame] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gameDetails.length);
    setRandomGame(gameDetails[randomIndex]);
  },[])

  const handleGameOpen = () => {
    nav(`/game/${randomGame.path}`);
    setSeconds(0);
  }

  return (
    <>
      <Wrapper>
        <Title>오늘의 게임</Title>
        <MainContent>
          {randomGame && (
    <>
      <GameTitle>{randomGame.title}</GameTitle>
      <ScoreContainer>
            <Score>
              <span>최고 기록</span>
              <ScoreStyle>{getFormatTime(Number(bestScore[randomGame.key]))}</ScoreStyle>
            </Score>
          </ScoreContainer>
      <DescriptionTitle>게임 설명</DescriptionTitle>
      <Description>{randomGame.description}</Description>
    </>
  )}
        </MainContent>
        <Button text={"게임 플레이!"} onClick={() => handleGameOpen()} />
      </Wrapper>
      <Footer>
        <NavigationBar />
      </Footer>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 30px;
  width: 100%;
  margin-bottom: 84px;

  Button {
    margin: 0px 75px;
    width: 150px;
    height: 40px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 30px;
`;

const GameTitle = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.main};
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 30px;
  border-bottom: 2px dotted black;
  margin-bottom: 130px;
`;

const Score = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const ScoreStyle = styled.div`
  color: ${(props) => props.theme.colors.main};
  font-weight: bold;
`;

const DescriptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  white-space: pre-line;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export default Game;
