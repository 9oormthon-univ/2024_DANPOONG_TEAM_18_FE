import styled from "styled-components";
import TreeIcon1 from "../assets/tree-icon-1.svg";
import TreeIcon2 from "../assets/tree-icon-2.svg"
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [day, setDay] = useState(1);

  useEffect(() => {
    const now = new Date();

    const nextMidnight = new Date();
    nextMidnight.setHours(24,0,0,0);

    const timeUntilMidnight = nextMidnight - now;

    const midnightTimeout = setTimeout(() => {
      setDay((prevDay) => prevDay + 1);

      setInterval(() => {
        setDay((prevDay) => prevDay + 1);
      }, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  },[])

  const handleClickNextModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <Modal />
      ) : (
        <Wrapper onClick={() => handleClickNextModal()}>
          <MainContent>
            <div>환영합니다 :)</div>
            <div>{day}일째 이용중이시네요!</div>
          </MainContent>
          <div>오늘도 나무를 키워볼까요?</div>
          {
            day < 3 ? (
              <img src={TreeIcon1} alt="tree-icon-1" width={100} height={160} />
            ) : (
              <img src={TreeIcon2} alt="tree-icon-2" width={100} height={180} />
            )
          }
          <Comment>반가워요!</Comment>
          <TouchText>화면을 터치해주세요</TouchText>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px 30px;
  width: 100%;
  height: 100vh;

  img {
    margin-top: 60px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
  gap: 10px;
  margin-bottom: 20px;
`;

const Comment = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.main};
  margin-top: 10px;
`;

const TouchText = styled.div`
  font-size: 25px;
  font-weight: 400;
  margin-top: 80px;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: blink 1.5s infinite;
`;

export default Welcome;
