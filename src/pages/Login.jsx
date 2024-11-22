import styled from "styled-components"
import logo from '../assets/icons/logo.svg'
import kakaoLogo from '../assets/icons/kakao-logo.svg'

const KAKAO_LOGIN_URL = import.meta.env.VITE_KAKAO_LOGIN_URL;

const Login = () => {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL; // 카카오 로그인 URL로 이동
  };

  return (
    <MainWrapper>
        <SecondTitle>잊고 싶지 않은 순간들을 함께합니다.</SecondTitle>
        <Title>기억의 나무</Title>
        <MainContainer>
            <img src={logo} alt="Logo" width={155} height={400} />
        </MainContainer>
        <LoginButton onClick={handleKakaoLogin}>
                <img src={kakaoLogo} alt="kakaoLogo" width={20} height={20} />
                <span>카카오 로그인</span>
        </LoginButton>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 120px 40px;
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
    margin-bottom: 10px;
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
    margin-top: 40px;
    cursor: pointer;

    img {
        margin-right: 10px;
    }

    span {
        margin-top: 3px;
    }
`

export default Login