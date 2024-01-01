import React, {useEffect} from 'react';
import {useTimeStore} from "./TimeDisplayStore";
import styled from "styled-components";

const TimeBlock = styled.div`
  text-align: right;
  padding: 4px 15px 4px 4px;
`;

function TimeDisplay() {

    const {time, setTime} = useTimeStore();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [setTime]);


    return (
        <TimeBlock>
            <div>{time.getFullYear()}. {time.getMonth()+1}. {time.getDate()}.</div>
            <div>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</div>
        </TimeBlock>
    );
}

export default TimeDisplay;