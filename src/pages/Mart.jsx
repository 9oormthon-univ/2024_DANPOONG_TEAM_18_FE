import styled from "styled-components";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";

const Mart = () => {

  return (
    <>
      <Wrapper>
        <Title>마트</Title>
        <MainContent>

          <Spacing />
          <TextRow>
            <Text>내가 보유 중인 코인</Text>
            <Coin>C 5,000</Coin>
          </TextRow>

          <Text2>광고를 보면 코인을 더 모을 수 있어요!</Text2>

          <ButtonContainer>
            <Button text={"광고 보러가기"} onClick={() => { }} />
          </ButtonContainer>
          <CardContainer>
            <CardGrid>
              <CardItem>편의점</CardItem>
              <CardItem>카페</CardItem>
              <CardItem>외식</CardItem>
              <CardItem>상품권</CardItem>
            </CardGrid>
          </CardContainer>

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

Button {
    margin: 30px 130px 150px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 30px;
`;

const Spacing = styled.div`

    height: 50px;
`;
const TextRow = styled.div`
  display: flex; /* 가로 배치를 위해 Flexbox 사용 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  gap: 10px; /* 두 텍스트 사이 간격 설정 */
  margin-bottom: 10px; /* 아래 여백 */
`;
const CardContainer = styled.div`
  display: flex;
  height: 120px;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  width: 100%; /* 부모 요소 너비 */

`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 배치 */
  gap: 20px; /* 카드 간의 간격 */
  justify-content: center; /* 그리드 내부 가로 정렬 */
  align-items: center; /* 그리드 내부 세로 정렬 */
`;

const CardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  background-color: "#FFFFFF";
  color: "black";
  border: 1px solid gray;
  font-size: 2rem;
  font-weight: bold;
`
const Text = styled.div`

  font-size: 20px;
  margin-bottom: 10px;
`;

const Coin = styled.div`

  font-size: 20px;
  color: #674188;
  font-weight: 600;

`;

const Text2 = styled.div`

  font-size: 16px;

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  width: 100%; /* 부모 요소의 전체 너비 */

`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 세로 방향으로 상단 정렬 */
  align-items: flex-start; /* 가로 방향으로 왼쪽 정렬 */
  width: 100%; /* 부모 요소 너비 */
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

export default Mart;