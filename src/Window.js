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
            <StyledResizeNW onMouseDown={e => startRepositionNW(e)} />
            <StyledResizeNE onMouseDown={e => startRepositionNE(e)} />
            <StyledResizeSW onMouseDown={e => startRepositionSW(e)} />
            <StyledResizeSE onMouseDown={e => startRepositionSE(e)} />
        </StyledWindow>
    );
}
