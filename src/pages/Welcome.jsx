import styled from 'styled-components'
import TreeIcon1 from '../assets/tree-icon-1.svg'

const Welcome = () => {

  return (
    <Wrapper>
        <MainContent>
            <div>환영합니다 :)</div>
            <div>1일째 이용중이시네요!</div>
        </MainContent>
        <div>오늘도 나무를 키워볼까요?</div>
        <img src={TreeIcon1} alt='메인캐릭터' width={100} height={160} />
        <Comment>반가워요!</Comment>
        <TouchText>화면을 터치해주세요</TouchText>
    </Wrapper>
  )
}

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
`

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.main};
    gap: 10px;
    margin-bottom: 20px;
`

const Comment = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.main};
    margin-top: 10px;
`

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
`

export default Welcome