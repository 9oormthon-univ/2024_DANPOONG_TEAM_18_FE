import styled from "styled-components";
import check from "../assets/icons/check.svg";
import game from "../assets/icons/game.svg";
import diary from "../assets/icons/diary.svg";
import profile from "../assets/icons/profile.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItem = [
  { path: "/", icon: check, text: "남은 미션" },
  { path: "/game", icon: game, text: "게임" },
  { path: "/diary", icon: diary, text: "일상 기록" },
  { path: "/profile", icon: profile, text: "내 정보" },
];

const NavigationBar = ({ activeTab }) => {
  const [menuTab, setMenuTab] = useState(activeTab);

  return (
    <Wrapper>
      <Indicator selectedIndex={menuTab} />
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) => {
            if (isActive) setMenuTab(index);
            return isActive ? "active" : "";
          }}
        >
          <MenuItem>
            <img src={item.icon} alt={item.text} width={24} height={24} />
            <span>{item.text}</span>
          </MenuItem>
        </NavLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  width: 360px;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition:
    transform 0.2s,
    color 0.3s;

  img {
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
    color: ${(props) => (props.isActive ? props.theme.colors.main : "#333")};
  }

  &:hover {
    transform: scale(1.1);
    span {
      color: ${(props) => props.theme.colors.main};
    }
  }
`;

const Indicator = styled.div`
  position: absolute;
  top: 0px;
  left: calc(${(props) => props.selectedIndex * 25}% + 12.5%);
  width: 25%;
  height: 3px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 2px;
  transition:
    left 0.3s ease,
    width 0.3s ease;
  transform: translateX(-50%);
`;

export default NavigationBar;
