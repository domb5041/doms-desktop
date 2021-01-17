import React from 'react';
import styled from 'styled-components';

const StyledTrafficLights = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        width: 12px;
        height: 12px;
        border: 2px solid black;
        border-radius: 100%;
        margin-right: 4px;
        position: relative;
        cursor: pointer;
        & > div {
            position: absolute;
            top: 3px;
            left: 3px;
            right: 3px;
            bottom: 3px;
            background-color: black;
            border-radius: 100%;
            opacity: 0;
        }
        &:hover > div {
            opacity: 1;
        }
    }
`;

export default function Window({ close }) {
    return (
        <StyledTrafficLights>
            <div onClick={close}>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
        </StyledTrafficLights>
    );
}
