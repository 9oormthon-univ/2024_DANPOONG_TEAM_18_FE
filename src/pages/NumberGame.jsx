import styled from "styled-components";
import backArrow from "../assets/back-arrow.svg";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

const NumberGame = () => {
    const nav = useNavigate();

  return (
    <Wrapper>
      <Header>
        <img src={backArrow} alt="back" width={25} height={25} onClick={() => nav(-1)}/>
      </Header>
      <Title>숫자 순서 게임</Title>
      <Timer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  width: 100%;
  margin-bottom: 84px;
`;

const Header = styled.div`
  width: 100%;
  margin: 20px 0px;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 20px;
`

export default NumberGame;
