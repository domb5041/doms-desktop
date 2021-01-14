import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
    padding: 10px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    & .app-inner {
        transition: 0.7s;
        width: 60px;
        height: 60px;
        border: 2px solid black;
        border-radius: 15px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        background-color: white;
    }
    & .app-tooltip {
        position: absolute;
        border: 2px solid black;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 7px;
        padding: 5px 10px;
        background-color: white;
        top: -45px;
        opacity: 0;
        font-weight: bold;
        pointer-events: none;
        user-select: none;
    }
    & .app-dot {
        background-color: black;
        width: 7px;
        height: 7px;
        border-radius: 100%;
        margin-top: 7px;
    }
    &:hover {
        & .app-inner {
            transform: translateY(-15px);
            transition: 0.1s;
            box-shadow: 0 20px 15px rgba(0, 0, 0, 0.1);
        }
        & .app-tooltip {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export default function AppIcon({ name, open }) {
    return (
        <StyledApp>
            <div className='app-tooltip'>{name}</div>
            <div className='app-inner'></div>
            {open && <div className='app-dot'></div>}
        </StyledApp>
    );
}
