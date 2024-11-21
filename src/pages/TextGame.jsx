import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import Timer from "../components/Timer";
import Button from "../components/Button";
import { ScoreContext } from "../App";
import Retry from "./Retry";

const correctWord = [
    "사과", "바나나", "딸기", "수박", "키위", "오렌지", "레몬", "체리", "토마토", "빵",
    "포도", "복숭아", "자두", "망고", "물티슈", "화장지", "설탕", "소금", "후추", "피망",
    "양파", "마늘", "생강", "당근", "감자", "고구마", "양배추", "와사비", "콩나물", "시금치",
    "깻잎"
];

const wrongWord = [
    "시과", "바니나", "띨기", "수빅", "키워", "오랜지", "래몬", "채리", "토미토", "삥",
    "포드", "복숭어", "지두", "밍고", "물터슈", "회장지", "설팅", "소굼", "후주", "피밍",
    "양피", "미늘", "생깅", "딩근", "김자", "고구미", "양베추", "외시비", "콩나믈", "시굼치",
    "꺳잎"
];

const TextGame = () => {
    const nav = useNavigate();
    const { bestScore, setGameScore, seconds, setSeconds } = useContext(ScoreContext);

    const [todayWordIndex, setTodayWordIndex] = useState(null);
    const [todayWrongWordPosition, setTodayWrongWordPosition] = useState(null);
    const [isRunning, setIsRunning] = useState(true);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const initializeGame = () => {
        setTodayWordIndex(Math.floor(Math.random() * correctWord.length));
        setTodayWrongWordPosition(Math.floor(Math.random() * 9));
    };

    useEffect(() => {
        initializeGame();
    }, []);

    const wrongWordClick = (index) => {
        if (index === todayWrongWordPosition) {
            alert("축하합니다! 틀린 단어를 찾았습니다!");
            setIsRunning(false);

            if (bestScore.textGame === "-" || bestScore.textGame > seconds) {
                setGameScore("textGame", seconds);
            }
        } else {
            setIsRunning(false);
            setIsOverlayOpen(true);
        }
    };

    const handleRetry = () => {
        setIsRunning(true);
        setIsOverlayOpen(false);
        setSeconds(0);
        initializeGame();
    };

    if (todayWordIndex === null || todayWrongWordPosition === null) {
        return <div>로딩 중...</div>;
    }

    return (
        <>
            <Wrapper>
                <Title>틀린 단어 찾기</Title>
                <Timer isRunning={isRunning} />

                <WordGrid>
                    {Array(9)
                        .fill(0)
                        .map((_, index) => {
                            const isWrongCard = index === todayWrongWordPosition;
                            const word = isWrongCard
                                ? wrongWord[todayWordIndex]
                                : correctWord[todayWordIndex];
                            return (
                                <WordItem key={index} onClick={() => wrongWordClick(index)}>
                                    {word}
                                </WordItem>
                            );
                        })}
                </WordGrid>
                <Button text={"나가기"} onClick={() => nav(-1)} />
            </Wrapper>

            {isOverlayOpen && <Retry handleRetry={handleRetry} />}
        </>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 30px;

  Button {
    margin: 10px 130px;
    margin-bottom: 40px;
    width: 146px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 26px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const WordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  width: fit-content; /* 그리드의 너비를 콘텐츠에 맞춤 */
  height: fit-content; /* 그리드의 높이를 콘텐츠에 맞춤 */
`;

const WordItem = styled.div`
  width: 90px;
  height: 130px;
  display: flex; /* 내부 요소를 정렬하기 위해 Flexbox 사용 */
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  position: relative;
  perspective: 1000px;
  font-size: 25px; /* 텍스트 크기 (옵션) */
  font-weight: bold; /* 텍스트 강조 (옵션) */
  cursor: pointer;
`;

export default TextGame;