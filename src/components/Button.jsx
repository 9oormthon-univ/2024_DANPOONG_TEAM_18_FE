import styled from "styled-components"

const Button = ({ text }) => {
  return (
    <ButtonStyle>{text}</ButtonStyle>
  )
}

const ButtonStyle = styled.button`
    color: ${(props) => props.theme.colors.main};
    background-color: #FFFFFF;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 25px;
    box-shadow: 0px 1px 3px 2px rgba(0,0,0,0.1);

    &:hover {
        background-color: ${(props) => props.theme.colors.main};
        color: #FFFFFF;
    }
`

export default Button