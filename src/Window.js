import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWindow = styled.div`
    border: 2px solid black;
    background: white;
    position: absolute;
    width: 400px;
    height: 300px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

export default function Desktop() {
    const [winPosition, setWinPosition] = useState([10, 10]);
    const [relPosition, setRelPosition] = useState([0, 0]);
    const [moving, setMoving] = useState(false);

    const onMouseDown = e => {
        if (e.button === 0) {
            setMoving(true);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const onMouseMove = e => {
        const x = e.pageX - relPosition[0];
        const y = e.pageY - relPosition[1];
        setWinPosition([x, y]);
        e.stopPropagation();
        e.preventDefault();
    };

    const updateRelPosition = e => {
        if (!moving) {
            const relX = e.pageX - winPosition[0];
            const relY = e.pageY - winPosition[1];
            setRelPosition([relX, relY]);
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const onMouseUp = e => {
        setMoving(false);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <StyledWindow
            id='window'
            style={{ left: winPosition[0], top: winPosition[1] }}
            onMouseDown={e => onMouseDown(e)}
            onMouseMove={e => updateRelPosition(e)}
        ></StyledWindow>
    );
}
