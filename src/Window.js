import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWindow = styled.div`
    position: absolute;
    min-width: 100px;
    min-height: 80px;
    & .window-inner {
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid black;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

const StyledTitleBar = styled.div`
    border-bottom: 2px solid black;
    width: 100%;
    height: 30px;
`;

const StyledResizeNN = styled.div`
    background: blue;
    position: absolute;
    cursor: ns-resize;
    height: 6px;
    top: 0;
    left: 6px;
    right: 6px;
`;

const StyledResizeWW = styled.div`
    background: blue;
    position: absolute;
    cursor: ew-resize;
    width: 6px;
    top: 6px;
    left: 0;
    bottom: 6px;
`;

const StyledResizeEE = styled.div`
    background: blue;
    position: absolute;
    cursor: ew-resize;
    width: 6px;
    top: 6px;
    right: 0;
    bottom: 6px;
`;

const StyledResizeSS = styled.div`
    background: blue;
    position: absolute;
    cursor: ns-resize;
    height: 6px;
    bottom: 0;
    left: 6px;
    right: 6px;
`;

const StyledResizeNW = styled.div`
    background: red;
    position: absolute;
    cursor: nwse-resize;
    width: 6px;
    height: 6px;
    top: 0;
    left: 0;
`;
const StyledResizeNE = styled.div`
    background: red;
    position: absolute;
    cursor: nesw-resize;
    width: 6px;
    height: 6px;
    top: 0;
    right: 0;
`;
const StyledResizeSW = styled.div`
    background: red;
    position: absolute;
    cursor: nesw-resize;
    width: 6px;
    height: 6px;
    bottom: 0;
    left: 0;
`;
const StyledResizeSE = styled.div`
    background: red;
    position: absolute;
    cursor: nwse-resize;
    width: 6px;
    height: 6px;
    bottom: 0;
    right: 0;
`;

export default function Desktop() {
    const [relPosition, setRelPosition] = useState([0, 0]);
    const [moving, setMoving] = useState(false);
    const [winPosition, setWinPosition] = useState({
        top: 10,
        left: 10,
        width: 400,
        height: 300,
    });

    const updateRelPosition = e => {
        if (!moving) {
            const relX = e.pageX - winPosition.left;
            const relY = e.pageY - winPosition.top;
            setRelPosition([relX, relY]);
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const startRepositionALL = e => {
        if (e.button === 0) {
            setMoving(true);
            document.addEventListener('mousemove', duringRepositionALL);
            document.addEventListener('mouseup', stopRepositionALL);
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const duringRepositionALL = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX - relPosition[0];
        newPosition.top = e.pageY - relPosition[1];
        newPosition.width =
            e.pageX - relPosition[0] + winPosition.width - winPosition.left;
        newPosition.height =
            e.pageY - relPosition[1] + winPosition.height - winPosition.top;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionALL = () => {
        setMoving(false);
        document.removeEventListener('mousemove', duringRepositionALL);
        document.removeEventListener('mouseup', stopRepositionALL);
    };

    const startRepositionSE = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionSE);
            window.addEventListener('mouseup', stopRepositionSE);
            document.body.style.cursor = 'nwse-resize';
        }
    };

    const duringRepositionSE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        newPosition.height = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionSE = () => {
        window.removeEventListener('mousemove', duringRepositionSE);
        window.removeEventListener('mouseup', stopRepositionSE);
        document.body.style.cursor = 'default';
    };

    const startRepositionNW = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionNW);
            window.addEventListener('mouseup', stopRepositionNW);
            document.body.style.cursor = 'nwse-resize';
        }
    };

    const duringRepositionNW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.top = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionNW = () => {
        window.removeEventListener('mousemove', duringRepositionNW);
        window.removeEventListener('mouseup', stopRepositionNW);
        document.body.style.cursor = 'default';
    };

    const startRepositionNE = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionNE);
            window.addEventListener('mouseup', stopRepositionNE);
            document.body.style.cursor = 'nesw-resize';
        }
    };

    const duringRepositionNE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        newPosition.top = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionNE = () => {
        window.removeEventListener('mousemove', duringRepositionNE);
        window.removeEventListener('mouseup', stopRepositionNE);
        document.body.style.cursor = 'default';
    };

    const startRepositionSW = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionSW);
            window.addEventListener('mouseup', stopRepositionSW);
            document.body.style.cursor = 'nesw-resize';
        }
    };

    const duringRepositionSW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.height = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionSW = () => {
        window.removeEventListener('mousemove', duringRepositionSW);
        window.removeEventListener('mouseup', stopRepositionSW);
        document.body.style.cursor = 'default';
    };

    const startRepositionNN = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionNN);
            window.addEventListener('mouseup', stopRepositionNN);
            document.body.style.cursor = 'ns-resize';
        }
    };

    const duringRepositionNN = e => {
        const newPosition = { ...winPosition };
        newPosition.top = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionNN = () => {
        window.removeEventListener('mousemove', duringRepositionNN);
        window.removeEventListener('mouseup', stopRepositionNN);
        document.body.style.cursor = 'default';
    };

    const startRepositionSS = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionSS);
            window.addEventListener('mouseup', stopRepositionSS);
            document.body.style.cursor = 'ns-resize';
        }
    };

    const duringRepositionSS = e => {
        const newPosition = { ...winPosition };
        newPosition.height = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionSS = () => {
        window.removeEventListener('mousemove', duringRepositionSS);
        window.removeEventListener('mouseup', stopRepositionSS);
        document.body.style.cursor = 'default';
    };

    const startRepositionEE = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionEE);
            window.addEventListener('mouseup', stopRepositionEE);
            document.body.style.cursor = 'ew-resize';
        }
    };

    const duringRepositionEE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionEE = () => {
        window.removeEventListener('mousemove', duringRepositionEE);
        window.removeEventListener('mouseup', stopRepositionEE);
        document.body.style.cursor = 'default';
    };

    const startRepositionWW = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringRepositionWW);
            window.addEventListener('mouseup', stopRepositionWW);
            document.body.style.cursor = 'ew-resize';
        }
    };

    const duringRepositionWW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopRepositionWW = () => {
        window.removeEventListener('mousemove', duringRepositionWW);
        window.removeEventListener('mouseup', stopRepositionWW);
        document.body.style.cursor = 'default';
    };

    return (
        <StyledWindow
            style={{
                left: winPosition.left,
                top: winPosition.top,
                right: `calc(100% - ${winPosition.width}px)`,
                bottom: `calc(100% - ${winPosition.height}px)`,
            }}
        >
            <div className='window-inner'>
                <StyledTitleBar
                    onMouseDown={e => startRepositionALL(e)}
                    onMouseMove={e => updateRelPosition(e)}
                ></StyledTitleBar>
            </div>
            <StyledResizeWW onMouseDown={e => startRepositionWW(e)} />
            <StyledResizeNW onMouseDown={e => startRepositionNW(e)} />
            <StyledResizeNN onMouseDown={e => startRepositionNN(e)} />
            <StyledResizeNE onMouseDown={e => startRepositionNE(e)} />
            <StyledResizeSW onMouseDown={e => startRepositionSW(e)} />
            <StyledResizeSS onMouseDown={e => startRepositionSS(e)} />
            <StyledResizeSE onMouseDown={e => startRepositionSE(e)} />
            <StyledResizeEE onMouseDown={e => startRepositionEE(e)} />
        </StyledWindow>
    );
}
