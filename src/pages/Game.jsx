import styled from "styled-components"
import Button from "../components/Button"
import NavigationBar from "../components/NavigationBar"
import { useNavigate } from "react-router-dom"

const Game = () => {
  const nav = useNavigate();

  const handleGameOpen = () => {
    nav('/game/number-game');
  }

  return (
    <>
      <Wrapper>
        <Title>오늘의 게임</Title>
        <MainContent>
          <GameTitle>숫자 순서 게임</GameTitle>
          <ScoreContainer>
            <Score>
              <span>최고 기록</span>
              <span>1분 20초</span>
            </Score>
          </ScoreContainer>

          <DescriptionTitle>게임 설명</DescriptionTitle>
          <Description>1부터 16까지 순서대로 누르는 게임입니다 😊</Description>
        </MainContent>
        <Button text={"게임 플레이!"} onClick={() => handleGameOpen()}/>
      </Wrapper>
      <Footer>
        <NavigationBar />
      </Footer>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 30px;
  width: 100%;
  margin-bottom: 84px;

  Button {
    margin: 0px 120px;
  }
`

const Title = styled.div`
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 30px;
`

const GameTitle = styled.div`
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.main};
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 30px;
  border-bottom: 2px dotted black;
  margin-bottom: 130px;
`

const Score = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`

const DescriptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`

export default Game