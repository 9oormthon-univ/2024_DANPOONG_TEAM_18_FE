import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button"
import Retry from "./Retry";

const RemindDiary = () => {
  const nav = useNavigate();
  const option = ["편의점", "카페", "계곡", "바다"];
  const answer = 2;

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const initializeGame = () => {


  };

  const remindClick = (index) => {
    if (index === answer) {
      alert("축하합니다! 제대로 기억을 되짚으셨습니다!");

    } else {
      setIsOverlayOpen(true);
    }
  };
  const handleRetry = () => {

    setIsOverlayOpen(false);
    initializeGame();
  };

  return (
    <>
      <Wrapper>

        <Title>기억 되짚기</Title>
        <MainContent>
          <Text>어제 재혁이와 어디를 갔나요?</Text>
          <CardContainer>
            <CardGrid>

              {option.map((item, index) => (
                <CardItem onClick={() => remindClick(index)}>{item}</CardItem>
              ))}
            </CardGrid>
          </CardContainer>
          <Button text={"나가기"} onClick={() => nav(-1)} />
        </MainContent>

      </Wrapper>
      {isOverlayOpen && <Retry handleRetry={handleRetry} />}
    </>
  );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 30px;
  width: 100%;
  margin-bottom: 84px;

  Button {
    margin: 60px 130px 150px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 10px;  


`;


const CardContainer = styled.div`
  display: flex;
  height: 400px;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  width: 100%; /* 부모 요소 너비 */

`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 배치 */
  gap: 20px; /* 카드 간의 간격 */
  justify-content: center; /* 그리드 내부 가로 정렬 */
  align-items: center; /* 그리드 내부 세로 정렬 */
`;

const CardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background-color: #FFFFFF;
  color: "black";
  border: 1px solid gray;
  font-size: 2rem;
  font-weight: bold;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const Text = styled.div`

  font-size: 20px;
  margin-bottom: 10px;
`;


export default RemindDiary;