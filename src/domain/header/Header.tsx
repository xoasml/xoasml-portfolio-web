import React from 'react';
import TimeDisplay from "./timedisplay/TimeDisplay";
import Navigation from "./navigation/Navigation";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`


function Header() {
    return (
        <HeaderBlock>
            <Navigation/>
            <TimeDisplay/>
        </HeaderBlock>
    );
}

export default Header;