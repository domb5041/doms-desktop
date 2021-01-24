import React, { useState } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
    padding: 10px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    & .app-inner {
        transition: 0.5s;
        width: 60px;
        height: 60px;
        border: 2px solid black;
        border-radius: 15px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        background-color: white;
        animation-name: ${props => (props.bouncing ? 'bounce' : 'none')};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
    @keyframes bounce {
        0% {
            transform: translateY(0);
            animation-timing-function: ease-out;
        }
        50% {
            transform: translateY(-50px);
            animation-timing-function: ease-in;
        }
        100% {
            transform: translateY(0);
            animation-timing-function: ease-out;
        }
    }
    & .app-tooltip {
        position: absolute;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 7px;
        padding: 6px 11px;
        background-color: black;
        color: white;
        top: -42px;
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
            opacity: ${props => (props.bouncing ? 0 : 1)};
            transform: translateY(0);
        }
    }
`;

export default function AppIcon({ name, open, onClick }) {
    const [bouncing, setBouncing] = useState(false);

    const handleClick = () => {
        setBouncing(true);
        setTimeout(() => onClick(), 2800);
        setTimeout(() => setBouncing(false), 3000);
    };

    return (
        <StyledApp onClick={handleClick} bouncing={bouncing}>
            <div className='app-tooltip'>{name}</div>
            <div className='app-inner'></div>
            {open && <div className='app-dot'></div>}
        </StyledApp>
    );
}
