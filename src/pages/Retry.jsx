import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Retry = ({ handleRetry }) => {
  const nav = useNavigate(-1);

  return (
    <Overlay>
      <OverlayContent>
        <Content>아쉬워요 정답이 아니네요 😢</Content>
        <BoldContent>다시 도전해보시겠어요?</BoldContent>
        <ButtonContainer>
          <Button text={"다시 도전"} onClick={() => handleRetry()} />
          <Button text={"나가기"} onClick={() => nav(-1)} />
        </ButtonContainer>
      </OverlayContent>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Content = styled.div`
  font-size: 18px;
`;

const BoldContent = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 60px;

  Button {
    margin: 10px 0;
      margin-bottom: 40px;
      width: 90px;
  }
`;

export default Retry;
