import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Modal = () => {
  return (
    <Wrapper>
        <Container>
            <img src={logo} alt='logo' width={70} height={70} />
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
    width: 80%;
    height: 300px;
    background-color: white;
    border-radius: 5px;
`

export default Modal