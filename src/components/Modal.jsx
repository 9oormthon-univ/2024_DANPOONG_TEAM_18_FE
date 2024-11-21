import styled from 'styled-components'
import logo from '../assets/icons/logo.svg'
import { useNavigate } from 'react-router-dom'

const Modal = () => {
  const nav = useNavigate();

  return (
    <Wrapper>
        <Container>
            <img src={logo} alt='logo' width={70} height={70} />
            <span>기억의 나무에 어서오세요 :)</span>
            <span className='highlight'>하루 치 미션은</span>
            <span className='highlight'>게임 1번, 일상 기록 1번 입니다.</span>
            <ConfirmButton onClick={() => nav('/')}>확인했습니다</ConfirmButton>
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 320px;
    background-color: white;
    border-radius: 5px;
    padding: 30px;

    img {
      margin-bottom: 25px;
    }

    span {
      margin-bottom: 7px;
    }

    .highlight {
      font-size: 18px;
      font-weight: 600;
    }
`

const ConfirmButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.main};
  color: white;
  margin-top: 20px;
  font-weight: 600;
`

export default Modal