import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../App";
import { ContentsWrapper, Footer } from "../styles/CommonStyles";

const Profile = () => {
  const nav = useNavigate();
  const SERVER_URL = import.meta.env.VITE_API_BASE_URL + "/api/vi/setting"; // 서버 URL
  const { id } = useContext(ScoreContext);
  const userId = id; // 사용자 ID
  const [username, setUsername] = useState(""); // 사용자 이름 상태
  const [coinBalance, setCoinBalance] = useState(0); // 코인 잔액 상태

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
        // 서버 응답 데이터에서 username과 coin_balance를 상태에 저장
        setUsername(responseData.data.username);
        setCoinBalance(responseData.data.coin_balance);
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

  const Mart = () => {
    nav("/profile/mart", { state: { coinBalance } }); // state로 코인 잔액 전달
  };

  return (
    <ContentsWrapper>
      <Wrapper>
        <Title>내 정보</Title>
        <MainContent>
          {/* 서버에서 가져온 데이터 렌더링 */}
          <Name>{username}</Name>
          <TextRow>
            <Text>내가 보유 중인 코인</Text>
            <Coin>C {coinBalance.toLocaleString()}</Coin>
          </TextRow>
          <Button text={"마트 구경하기"} onClick={() => Mart()} />
          <UserTab>내 정보 수정</UserTab>
          <UserTab>글자 크기 수정</UserTab>
          <UserTab>로그아웃</UserTab>
          <UserTab>탈퇴하기</UserTab>
        </MainContent>
      </Wrapper>
      <Footer>
        <NavigationBar />
      </Footer>
    </ContentsWrapper>
  );
};

const Wrapper = styled.div`
  Button {
      margin: 10px 80px;
      margin-bottom: 40px;
      width: 146px;
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

export default Profile;