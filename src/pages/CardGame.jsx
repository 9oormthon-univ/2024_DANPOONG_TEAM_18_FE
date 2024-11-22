import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

import Timer from "../components/Timer";
import Button from "../components/Button"
import { ScoreContext } from "../App"
import Retry from "./Retry";
import Card from "../assets/icons/card.svg"
import flower1 from '../assets/images/flower-1.png'
import flower2 from '../assets/images/flower-2.png'
import flower3 from '../assets/images/flower-3.png'
import flower4 from '../assets/images/flower-4.png'
import flower5 from '../assets/images/flower-5.png'
import flower6 from '../assets/images/flower-6.png'

const keys = [flower1, flower2, flower3, flower4, flower5, flower6];

const NumberGame = () => {
    const nav = useNavigate();
    const { seconds, setSeconds } = useContext(ScoreContext);
    const [isRunning, setIsRunning] = useState(true);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [cards, setCards] = useState(() => 
      [...keys, ...keys]
        .map((key) => ({key, id: Math.random() }))
        .sort(() => Math.random() - 0.5)
    );

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    const handleCardClick = (index) => {
      if(flippedCards.includes(index) || matchedCards.includes(cards[index].key)) {
        return;
      }

      if(flippedCards.length === 2) {
        return;
      }

      const updatedFlippedCards = [...flippedCards, index];
      setFlippedCards(updatedFlippedCards);

      // 카드가 2개 선택되었을 때 매칭 확인
      if(updatedFlippedCards.length === 2) {
        const [firstIndex, secondIndex] = updatedFlippedCards;
        const isMatch = cards[firstIndex].key === cards[secondIndex].key;

        setTimeout(() => {
          if(isMatch) {
            setMatchedCards((prev) => [...prev, cards[firstIndex].key]);
          }
          setFlippedCards([]);
        }, 1000);

        if (matchedCards.length + 1 === keys.length) {
          alert('축하합니다! 모든 카드를 맞추셨습니다!');
          setIsRunning(false);
          
          const payload = {
            result: seconds, 
            gameType: "카드 뒤집기 게임"
          };

          axios.patch(`${apiBaseUrl}/api/vi/game/play`, payload)
            .then((response) => {
              console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
      }
    }

    const handleRetry = () => {
      setMatchedCards([]);
      setFlippedCards([]);
      setIsRunning(true);
      setIsOverlayOpen(false);
      setSeconds(0);
      setCards(
        [...keys, ...keys]
          .map((key) => ({ key, id: Math.random() }))
          .sort(() => Math.random() - 0.5)
      );
    };

  return (
    <>
      <Wrapper>
        <Title>카드 뒤집기</Title>
        <Timer isRunning={isRunning} />

        <CardGrid>
      {cards.map((card, index) => (
        <CardItem key={card.id} onClick={() => handleCardClick(index)}>
          <CardInner flipped={flippedCards.includes(index) || matchedCards.includes(card.key)}>
            <CardFront><img src={Card} alt="card" width={100} height={130}/></CardFront> {/* 앞면에 키 표시 */}
            <CardBack>
              <img
                src={card.key}
                alt="flower"
              />
            </CardBack>
          </CardInner>
        </CardItem>
      ))}
    </CardGrid>
    <Button text={"나가기"} onClick={() => nav(-1)}/>
      </Wrapper>

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
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  padding: 20px;
  margin-top: 5px;
`;

const CardItem = styled.div`
  width: 90px;
  height: 130px;
  position: relative;
  perspective: 1000px;
  overflow: hidden;
  border-radius: 20px;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  transition: transform 0.5s;
`;

const CardFront = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;

const CardBack = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;

export default NumberGame;
