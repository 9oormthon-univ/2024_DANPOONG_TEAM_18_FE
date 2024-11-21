import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const WriteDiary = () => {
    const handleButtonClick = () => {
        // 버튼 클릭 시 실행될 액션
    };

    return (

        <Wrapper>
            <Title>일기 쓰기</Title>
            <MainContent>
                <Text>어디서 시간을 보내셨나요?</Text>
                <Input type="text" placeholder="오늘 어디서 시간을 보냈는지 적어주세요 :)" />
                <Text>무엇을 하셨나요?</Text>
                <Input type="text" placeholder="오늘 무엇을 했는지 적어주세요 :)" />
                <Text>누구와 함께 했나요?</Text>
                <Input type="text" placeholder="오늘 누구와 함께였는지 적어주세요 :)" />
            </MainContent>
            <FloatingButton onClick={handleButtonClick}> <FontAwesomeIcon icon={faMicrophone} style={{ fontSize: '40px' }} /></FloatingButton>
        </Wrapper>
    )
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


const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const Text = styled.div`
  font-size: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column; /* 질문과 입력창을 세로로 배치 */
  align-items: flex-start; /* 텍스트와 입력창을 왼쪽 정렬 */
`;

const Input = styled.textarea`
  padding: 10px;
  width : 400px;
  height : 150px;
  color: #674188;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 15px;
  outline: none;
  resize: none; /* 사용자가 크기 조정하지 못하도록 설정 */
  overflow-y: auto; /* 텍스트가 넘칠 경우 스크롤 추가 */
  &:focus {
    border-color: #674188; /* 선택 시 테두리 색상 */
  }
`;
const FloatingButton = styled.button`
  position: fixed;
  top: 600px;
  width: 120px;
  height: 120px;
  background-color: #FAF8F8; 
  color: #674188;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 50%; /* 원형 버튼 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #512f6d; /* 호버 시 버튼 색상 */
    color: #FAF8F8;
    // transform: scale(1.1); 
  }

  &:active {
    // transform: scale(0.95); /* 클릭 시 살짝 축소 */
  }
`;



export default WriteDiary;