import styled from "styled-components"
import Button from '../components/Button'
import NavigationBar from '../components/NavigationBar'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Home = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleGameNav = () => {
    nav('/game');
    setActiveTab(1);
  }

  return (
    <Wrapper>
      <ContentsWrapper>
        <TopSection>
          <Title>남은 미션</Title>
          <SecondTitle>오늘 진행 한 미션 수 </SecondTitle>
          <ButtonContainer>
            <Button text={"게임하러 가기"} onClick={() => handleGameNav()}/>
          </ButtonContainer>
        </TopSection>

        <MiddleSection>
          <Title>통계</Title>
          <SecondTitle>현재 기억의 나무 레벨 </SecondTitle>
        </MiddleSection>

        <BottomSection>
          <Title>게임별 최고기록</Title>
          <SecondTitle>숫자 순서 게임</SecondTitle>
          <SecondTitle>틀린 글자 찾기</SecondTitle>
          <SecondTitle>카드 뒤집기</SecondTitle>
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
  padding: 55px 30px;
  width: 100%;
  gap: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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
    margin-bottom: 20px;
`

const SecondTitle = styled.div`
    font-size: 14px;
    margin-bottom: 15px;
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