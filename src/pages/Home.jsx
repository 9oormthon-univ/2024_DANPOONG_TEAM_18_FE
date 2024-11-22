import styled from "styled-components"
import Button from '../components/Button'
import NavigationBar from '../components/NavigationBar'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { ScoreContext } from "../App"
import getFormatTime from "../utils/getFormatTime"

const Home = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const { level, statistics } = useContext(ScoreContext);

  const handleGameNav = () => {
    nav('/game');
    setActiveTab(1);
  }

  const handleDiaryNav = () => {
    nav('/diary');
    setActiveTab(2);
  }

  return (
    <Wrapper>
      <ContentsWrapper>
        <TopSection>
          <Title>남은 미션</Title>
          <ButtonContainer>
            <Button text={"게임하러 가기"} onClick={() => handleGameNav()}/>
            <Button text={"일기 쓰기"} onClick={() => handleDiaryNav()}/>
          </ButtonContainer>
        </TopSection>

        <MiddleSection>
          <Title>통계</Title>
          <SecondTitle>
            현재 기억의 나무 레벨
            <ScoreContent>{level} Level</ScoreContent>
          </SecondTitle>
        </MiddleSection>

        <BottomSection>
        <Title>게임별 최고기록</Title>
          {statistics.map((stat, index) => (
            <SecondTitle key={index}>
              {stat.gameType}
              <ScoreContent>{getFormatTime(stat.highScore)}</ScoreContent>
            </SecondTitle>
          ))}
        </BottomSection>
      </ContentsWrapper>
      <Footer>
        <NavigationBar activeTab={activeTab} />
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 40px;
  width: 100%;
  gap: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 30px;
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;

  Button {
    width: 160px;
    height: 40px;
  }
`

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
`

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 30px;
`

const SecondTitle = styled.div`
    display: flex;
    gap: 30px;
    font-size: 18px;
    margin-bottom: 15px;
`

const ScoreContent = styled.div`
  color: ${(props) => props.theme.colors.main};
  font-weight: bold;
  font-size: 19px;
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

export default Home