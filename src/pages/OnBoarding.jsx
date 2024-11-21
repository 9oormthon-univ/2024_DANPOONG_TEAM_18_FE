import styled from "styled-components"
import logo from '../assets/logo.svg'
import kakaoLogo from '../assets/kakao-logo.svg'
import { useNavigate } from "react-router-dom"

const OnBoarding = () => {
    const nav = useNavigate();

  return (
    <MainWrapper>
        <SecondTitle>잊고 싶지 않은 순간들을 함께합니다.</SecondTitle>
        <Title>기억의 나무</Title>
        <MainContainer>
            <img src={logo} alt="Logo" width={155} height={400} />
            <LoginButton>
                <img src={kakaoLogo} alt="kakaoLogo" width={20} height={20} />
                <span onClick={() => nav('/welcome')}>카카오 로그인</span>
            </LoginButton>
        </MainContainer>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 140px 30px;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
    font-size: 28px;
`

const SecondTitle = styled.div`
    color: ${(props) => props.theme.colors.main};
    font-size: 14px;
    margin-bottom: 15px;
`

const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    background-color: #ffe100;
    padding: 0px 30px;
    width: 100%;    
    height: 55px;
    font-size: 15px;
    margin-top: 20px;
    cursor: pointer;

    img {
        margin-right: 20px;
    }

    span {
        margin-top: 3px;
    }
`

export default OnBoarding