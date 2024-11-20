import { useEffect, useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "../App";

const Timer = ({ isRunning }) => {
    const { seconds, setSeconds } = useContext(ScoreContext);

    useEffect(() => {
        if(!isRunning) return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev+1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <TimerContainer>
          <h1>{formatTime(seconds)}</h1>
        </TimerContainer>
    );
}

const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.main};
`

export default Timer