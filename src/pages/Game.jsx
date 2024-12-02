import styled from "styled-components";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ScoreContext } from "../App";
import getFormatTime from "../utils/getFormatTime";
import axios from "axios";
import { ContentsWrapper, Footer } from "../styles/CommonStyles";

const Game = () => {
  const nav = useNavigate();
  const { setSeconds, id } = useContext(ScoreContext);
  const [randomGame, setRandomGame] = useState();

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchRandomGame = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`${apiBaseUrl}/api/vi/game`, {
          params: { id },
        });
        setRandomGame(response.data.data);
        console.log("Fetched random game:", response.data.data);
      } catch (error) {
        console.error("Failed to fetch random game:", error);
      }
    };

    fetchRandomGame();
  }, [id, apiBaseUrl]);

  const handleGameOpen = () => {
    if (randomGame) {
      const gameTypeToPath = {
        "숫자 순서 게임": "number-game",
        "카드 뒤집기 게임": "card-game",
        "틀린 단어 찾기 게임": "text-game",
      };
  
      const path = gameTypeToPath[randomGame.gameType];
      if (path) {
        nav(`/game/${path}`);
        setSeconds(0);
      } else {
        console.error("Unknown game type:", randomGame.gameType);
      }
    }
  };

  return (
    <ContentsWrapper>
      <Wrapper>
        <Title>오늘의 게임</Title>
        <MainContent>
          {randomGame && (
            <>
              <GameTitle>{randomGame.gameType}</GameTitle>
              <ScoreContainer>
                <Score>
                  <span>최고 기록</span>
                  <ScoreStyle>
                    {randomGame.highScore !== 0
                      ? getFormatTime(randomGame.highScore)
                      : "기록 없음"}
                  </ScoreStyle>
                </Score>
              </ScoreContainer>
              <DescriptionTitle>게임 설명</DescriptionTitle>
              <Description>
                {randomGame.gameType === "숫자 순서 게임" &&
                  "1부터 16까지 순서대로 \n 누르는 게임입니다 🤗"}
                {randomGame.gameType === "카드 뒤집기 게임" &&
                  "카드를 뒤집어 같은 \n 그림의 카드를 맞추는 \n 게임입니다 🃏"}
                {randomGame.gameType === "틀린 단어 찾기 게임" &&
                  "여러 개의 단어 중 \n 틀린 단어를 골라내는 \n 게임입니다 🔍"}
              </Description>
            </>
          )}
        </MainContent>
        <Button text={"게임 플레이!"} onClick={() => handleGameOpen()} />
      </Wrapper>

      <Footer>
        <NavigationBar />
      </Footer>

    </ContentsWrapper>
  );
};

const Wrapper = styled.div`
  Button {
    margin: 0px 80px;
    width: 150px;
    height: 40px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
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
  margin: 30px;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 30px;
  border-bottom: 2px dotted black;
  margin-bottom: 100px;
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
  line-height: 1.4;
`;

export default Game;
