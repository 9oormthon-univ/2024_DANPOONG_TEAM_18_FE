import styled from "styled-components";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const nav = useNavigate();

  const Mart = () => {

    nav("/profile/mart");

  };

  return (
    <>
      <Wrapper>
        <Title>내 정보</Title>
        <MainContent>
          <Name>최재혁</Name>
          <TextRow>
            <Text>내가 보유 중인 코인</Text>
            <Coin>C 5,000</Coin>
          </TextRow>

          <Button text={"마트 구경하기"} onClick={() => Mart()} />
          <Spacing />
          <UserTab>내 정보 수정</UserTab>
          <UserTab>글자 크기 수정</UserTab>
          <UserTab>로그아웃</UserTab>
          <UserTab>탈퇴하기</UserTab>

        </MainContent>
      </Wrapper>
      <Footer>
        <NavigationBar />
      </Footer>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 30px;
  width: 100%;
  margin-bottom: 84px;

Button {
    margin: 30px 130px 150px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 30px;
`;
const TextRow = styled.div`
  display: flex; /* 가로 배치를 위해 Flexbox 사용 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  gap: 10px; /* 두 텍스트 사이 간격 설정 */
  margin-bottom: 10px; /* 아래 여백 */
`;
const Name = styled.div`

    height: 50px;
    font-size: 20px;
    font-weight: 600;

`;

const Text = styled.div`

  font-size: 20px;


`;

const Coin = styled.div`

  font-size: 20px;
  color: #674188;
  font-weight: 600;


`;

const Spacing = styled.div`
  margin-top: 60px;
`;

const UserTab = styled.div`
    background-color: white;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 15px;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

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

export default Profile;