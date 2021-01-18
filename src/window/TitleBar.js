import React from 'react';
import TrafficLights from './TrafficLights';
import styled from 'styled-components';

const StyledTitleBar = styled.div`
    border-bottom: 2px solid black;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
`;

const StyledWindowTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
`;

export default function TitleBar({
    close,
    name,
    maximizeWindow,
    duringRepositionALL,
    startReposition,
}) {
    return (
        <StyledTitleBar
            onMouseDown={e =>
                startReposition(e, duringRepositionALL, 'default')
            }
        >
            <TrafficLights close={close} maximizeWindow={maximizeWindow} />
            <StyledWindowTitle>{name}</StyledWindowTitle>
        </StyledTitleBar>
    );
}
