import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const GameComplete = () => {
  const nav = useNavigate(-1);

  return (
    <Overlay>
      <OverlayContent>
        <Content>축하합니다 🥳</Content>
        <BoldContent>정답을 맞추셨습니다!</BoldContent>
        <ButtonContainer>
          <Button text={"확인"} onClick={() => nav('/')} />
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
  gap: 50px;
  margin-top: 60px;
`;

export default GameComplete;
