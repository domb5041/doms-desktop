import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWindow = styled.div`
    position: absolute;
    width: 400px;
    height: 300px;
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

const StyledResize = styled.div`
    background: red;
    width: 6px;
    height: 6px;
    bottom: 0;
    right: 0;
    position: absolute;
    cursor: nwse-resize;
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
        const x = e.pageX - relPosition[0];
        const y = e.pageY - relPosition[1];
        setWinPosition([x, y]);
        e.stopPropagation();
        e.preventDefault();
    };

    const stopMove = e => {
        setMoving(false);
        document.removeEventListener('mousemove', duringMove);
        document.removeEventListener('mouseup', stopMove);
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <StyledWindow
            style={{
                left: winPosition[0],
                top: winPosition[1],
                width: winSize[0],
                height: winSize[1],
            }}
        >
            <div className='window-inner'>
                <StyledTitleBar
                    onMouseDown={e => startMove(e)}
                    onMouseMove={e => updateRelPosition(e)}
                ></StyledTitleBar>
            </div>
            <StyledResize></StyledResize>
        </StyledWindow>
    );
}
