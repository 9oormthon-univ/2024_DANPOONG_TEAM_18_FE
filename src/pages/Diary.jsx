import styled from "styled-components";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

const Diary = () => {

    const nav = useNavigate();

    const writeDiary = () => {

        nav("/diary/write");

    };


    const remindDiary = () => {

        nav("/diary/remind");

    };


    return (

        <>
            <Wrapper>
                <Title>오늘의 일기</Title>
                <MainContent>
                    <Text>오늘은 어떤 일이 있으셨나요? 🤔</Text>
                    <Button text={"일기 쓰기"} onClick={() => writeDiary()} />
                    <Text>지난 일을 다시 추억해볼까요? 😊</Text>
                    <Button text={"기억 되짚기"} onClick={() => remindDiary()} />
                </MainContent>
            </Wrapper>
            <Footer>
                <NavigationBar />
            </Footer>
        </>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 30px;
  width: 100%;
  margin-bottom: 84px;

Button {
    margin: 60px 75px 150px;
    width: 150px;
    height: 40px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 10px;
`;


const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

`;

const Text = styled.div`

  font-size: 20px;

`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;


export default Diary;