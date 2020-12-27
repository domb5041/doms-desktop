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
    const [winSize, setWinSize] = useState([400, 300]);
    const [winPosition, setWinPosition] = useState([10, 10]);
    const [relPosition, setRelPosition] = useState([0, 0]);
    const [moving, setMoving] = useState(false);

    const updateRelPosition = e => {
        if (!moving) {
            const relX = e.pageX - winPosition[0];
            const relY = e.pageY - winPosition[1];
            setRelPosition([relX, relY]);
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const startMove = e => {
        if (e.button === 0) {
            setMoving(true);
            document.addEventListener('mousemove', duringMove);
            document.addEventListener('mouseup', stopMove);
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const duringMove = e => {
        const left = e.pageX - relPosition[0];
        const top = e.pageY - relPosition[1];
        const width = e.pageX - relPosition[0] + winSize[0] - winPosition[0];
        const height = e.pageY - relPosition[1] + winSize[1] - winPosition[1];
        setWinPosition([left, top]);
        setWinSize([width, height]);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopMove = () => {
        setMoving(false);
        document.removeEventListener('mousemove', duringMove);
        document.removeEventListener('mouseup', stopMove);
    };

    const startResizeSE = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringResizeSE);
            window.addEventListener('mouseup', stopResizeSE);
            document.body.style.cursor = 'nwse-resize';
        }
    };

    const duringResizeSE = e => {
        const width = e.pageX;
        const height = e.pageY;
        setWinSize([width, height]);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopResizeSE = () => {
        window.removeEventListener('mousemove', duringResizeSE);
        window.removeEventListener('mouseup', stopResizeSE);
        document.body.style.cursor = 'default';
    };

    const startResizeNW = e => {
        if (e.button === 0) {
            window.addEventListener('mousemove', duringResizeNW);
            window.addEventListener('mouseup', stopResizeNW);
            document.body.style.cursor = 'nwse-resize';
        }
    };

    const duringResizeNW = e => {
        setWinPosition([e.pageX, e.pageY]);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopResizeNW = () => {
        window.removeEventListener('mousemove', duringResizeNW);
        window.removeEventListener('mouseup', stopResizeNW);
        document.body.style.cursor = 'default';
    };

    return (
        <StyledWindow
            style={{
                left: winPosition[0],
                top: winPosition[1],
                right: `calc(100% - ${winSize[0]}px)`,
                bottom: `calc(100% - ${winSize[1]}px)`,
            }}
        >
            <div className='window-inner'>
                <StyledTitleBar
                    onMouseDown={e => startMove(e)}
                    onMouseMove={e => updateRelPosition(e)}
                ></StyledTitleBar>
            </div>
            <StyledResizeNW onMouseDown={e => startResizeNW(e)} />
            {/* <StyledResizeNE onMouseDown={e => startResizeNE(e)} /> */}
            {/* <StyledResizeSW onMouseDown={e => startResizeSW(e)} /> */}
            <StyledResizeSE onMouseDown={e => startResizeSE(e)} />
        </StyledWindow>
    );
}
