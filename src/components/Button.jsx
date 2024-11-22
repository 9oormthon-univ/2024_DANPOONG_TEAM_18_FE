import styled from "styled-components"

const Button = ({ text, onClick }) => {
  return (
    <ButtonStyle 
      onClick={onClick} 
      isCompleted={text === "게임 완료" || text === "일기 완료"}
    >
      {text}
      </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
    color: ${(props) =>
    props.isCompleted ? "#FFFFFF" : `${props.theme.colors.main}`};
    background-color: ${(props) =>
    props.isCompleted ? `${props.theme.colors.main}` : "#FFFFFF"};
    border-radius: 20px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 25px;
    box-shadow: 0px 1px 3px 2px rgba(0,0,0,0.1);
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.main};
        color: #FFFFFF;
    }

    &:active {
      transform: scale()(0.8);
      box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.4);
    }
`

export default Button