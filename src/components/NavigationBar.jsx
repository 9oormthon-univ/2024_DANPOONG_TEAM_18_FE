import styled from "styled-components"
import check from "../assets/check.svg"
import game from "../assets/game.svg"
import diary from "../assets/diary.svg"
import profile from "../assets/profile.svg"
import { useState } from "react"

const menuItem = [
    { path: check, text: '남은 미션' },
    { path: game, text: '게임' },
    { path: diary, text: '일상 기록' },
    { path: profile, text: '내 정보' }
];

const NavigationBar = () => {
    const [menuTab, setMenuTab] = useState(0);

    const handleMenuClick = (index) => {
        setMenuTab(index);
    }

  return (
    <Wrapper>
        <Indicator selectedIndex={menuTab} />
        {
            menuItem.map((item, index) => (
                <MenuItem key={index} onClick={() => handleMenuClick(index)}>
                    <img src={item.path} alt={item.text} width={24} height={24} />
                    {<span>{item.text}</span>}
                </MenuItem>
            ))
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    width: 100%;
    height: 60px;
`

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;

  img {
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
  }
`;

const Indicator = styled.div`
  position: absolute;
  top: -5px;
  left: calc(${(props) => props.selectedIndex * 25}% + 12.5%);
  width: 25%;
  height: 3px;
  background-color: ${(props) => props.theme.colors.main};
  transition: 0.3s ease;
  transform: translateX(-50%);
`;

export default NavigationBar