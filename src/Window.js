import React, { useState } from 'react';
import {
    StyledWindow,
    StyledTitleBar,
    StyledRepositionBorder,
} from './Window.styled';

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

    const duringRepositionSE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        newPosition.height = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const duringRepositionNW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.top = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const duringRepositionNE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        newPosition.top = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const duringRepositionSW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.height = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const duringRepositionNN = e => {
        const newPosition = { ...winPosition };
        newPosition.top = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const duringRepositionSS = e => {
        const newPosition = { ...winPosition };
        newPosition.height = e.pageY;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const duringRepositionEE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    const duringRepositionWW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
    };

    let duringRepositionListener, stopRepositionListener;

    const startReposition = (e, duringFn, cursor) => {
        if (e.button === 0) {
            stopRepositionListener = () => {
                stopReposition(duringFn);
            };
            duringRepositionListener = e => {
                duringFn(e);
            };
            window.addEventListener('mousemove', duringRepositionListener);
            window.addEventListener('mouseup', stopRepositionListener);
            document.body.style.cursor = cursor;
        }
    };

    const stopReposition = () => {
        window.removeEventListener('mousemove', duringRepositionListener);
        window.removeEventListener('mouseup', stopRepositionListener);
        document.body.style.cursor = 'default';
        console.log('jkdghakshd');
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
            <StyledRepositionBorder
                className='direction-ww'
                onMouseDown={e =>
                    startReposition(e, duringRepositionWW, 'ew-resize')
                }
            />
            <StyledRepositionBorder
                className='direction-nw'
                onMouseDown={e =>
                    startReposition(e, duringRepositionNW, 'nwse-resize')
                }
            />
            <StyledRepositionBorder
                className='direction-nn'
                onMouseDown={e =>
                    startReposition(e, duringRepositionNN, 'ns-resize')
                }
            />
            <StyledRepositionBorder
                className='direction-ne'
                onMouseDown={e =>
                    startReposition(e, duringRepositionNE, 'nesw-resize')
                }
            />
            <StyledRepositionBorder
                className='direction-sw'
                onMouseDown={e =>
                    startReposition(e, duringRepositionSW, 'nesw-resize')
                }
            />
            <StyledRepositionBorder
                className='direction-ss'
                onMouseDown={e =>
                    startReposition(e, duringRepositionSS, 'ns-resize')
                }
            />
            <StyledRepositionBorder
                className='direction-se'
                onMouseDown={e =>
                    startReposition(e, duringRepositionSE, 'nwse-resize')
                }
            />
            <StyledRepositionBorder
                className='direction-ee'
                onMouseDown={e =>
                    startReposition(e, duringRepositionEE, 'ew-resize')
                }
            />
        </StyledWindow>
    );
}
