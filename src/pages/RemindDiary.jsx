import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Button from "../components/Button";
import Retry from "./Retry";
import GameComplete from "./GameComplete";
import { ScoreContext } from "../App";

const RemindDiary = () => {
  const nav = useNavigate();
  const { id } = useContext(ScoreContext);
  const SERVER_URL = import.meta.env.VITE_API_BASE_URL + "/api/vi/diary/quiz"; // 서버 URL
  const userId = id; // 사용자 ID

  // 상태 관리
  const [option, setOption] = useState([]); // 선택지 상태
  const [answer, setAnswer] = useState(null); // 정답 인덱스 상태
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  // 서버 데이터 요청 함수
  const fetchData = async () => {
    try {
      const response = await fetch(`${SERVER_URL}?id=${userId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("데이터를 가져오는데 실패했습니다.");
      }

      const responseData = await response.json(); // JSON 응답 데이터 파싱

      if (responseData.success) {
        const { choices, correctAnswer } = responseData.data;

        // 상태 업데이트
        setOption(choices); // 선택지 상태 업데이트
        setAnswer(choices.indexOf(correctAnswer)); // 정답 인덱스 상태 업데이트
      } else {
        console.error("서버 오류:", responseData.error?.message);
        alert("데이터를 가져오는 중 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("데이터를 가져오는 중 문제가 발생했습니다.");
    }
  };

  // GET 요청으로 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  const initializeGame = () => {
    // 초기화 로직이 필요하다면 작성
  };

  // 선택지 클릭 이벤트
  const remindClick = (index) => {
    if (index === answer) {
      setIsCompleteOpen(true);
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
                <CardItem key={index} onClick={() => remindClick(index)}>
                  {item}
                </CardItem>
              ))}
            </CardGrid>
          </CardContainer>
          <Button text={"나가기"} onClick={() => nav(-1)} />
        </MainContent>
      </Wrapper>
      {isCompleteOpen && <GameComplete />}
      {isOverlayOpen && <Retry handleRetry={handleRetry} />}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px;
  width: 100%;
  margin-bottom: 84px;

  Button {
    margin: 60px 130px 150px;
    width: 150px;
    height: 40px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  height: 300px;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  width: 100%; /* 부모 요소 너비 */
  margin-top: 50px;
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
  background-color: #ffffff;
  color: black;
  border: 1px solid gray;
  font-size: 2rem;
  font-weight: bold;
  z-index: 10;
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