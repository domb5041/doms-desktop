import React from 'react';
import styled from 'styled-components';

const StyledTrafficLights = styled.div`
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
            background-color: black;
            position: absolute;
            top: 2px;
            bottom: 2px;
            width: 2px;
            left: 50%;
            opacity: 0;
        }
    }
    &:hover > div > div {
        opacity: 1;
    }
    & .close-symbol {
        & > div:first-of-type {
            transform: translateX(-50%) rotate(45deg);
        }
        & > div:last-of-type {
            transform: translateX(-50%) rotate(-45deg);
        }
    }
    & .minimize-symbol > div {
        transform: translateX(-50%) rotate(90deg);
    }
    & .maximize-symbol {
        & > div:first-of-type {
            transform: translateX(-50%);
        }
        & > div:last-of-type {
            transform: translateX(-50%) rotate(90deg);
        }
    }
`;

export default function Window({ close, maximizeWindow }) {
    return (
        <StyledTrafficLights>
            <div className='close-symbol' onClick={close}>
                <div></div>
                <div></div>
            </div>
            <div className='minimize-symbol'>
                <div></div>
            </div>
            <div className='maximize-symbol' onClick={maximizeWindow}>
                <div></div>
                <div></div>
            </div>
        </StyledTrafficLights>
    );
}
