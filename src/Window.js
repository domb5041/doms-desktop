import React, { useState } from 'react';
import {
    StyledWindow,
    StyledTitleBar,
    StyledRepositionBorder,
} from './Window.styled';

export default function Desktop() {
    const [winPosition, setWinPosition] = useState({
        top: 10,
        left: 10,
        width: 400,
        height: 300,
    });

    let duringRepositionListener, stopRepositionListener;

    const startReposition = (e, duringFn, cursor, id) => {
        if (e.button === 0) {
            const element = document.getElementById(id);
            const relX = e.pageX - element.getBoundingClientRect().left;
            const relY = e.pageY - element.getBoundingClientRect().top;
            stopRepositionListener = () => {
                stopReposition(duringFn);
            };
            duringRepositionListener = e => {
                duringFn(e, relX, relY);
            };
            window.addEventListener('mousemove', duringRepositionListener);
            window.addEventListener('mouseup', stopRepositionListener);
            document.body.style.cursor = cursor;
        }
    };

    const duringRepositionALL = (e, relX, relY) => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX - relX;
        newPosition.top = e.pageY - relY;
        newPosition.width =
            e.pageX - relX + winPosition.width - winPosition.left;
        newPosition.height =
            e.pageY - relY + winPosition.height - winPosition.top;
        setWinPosition(newPosition);
        e.stopPropagation();
        e.preventDefault();
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

    const stopReposition = () => {
        window.removeEventListener('mousemove', duringRepositionListener);
        window.removeEventListener('mouseup', stopRepositionListener);
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
            id='window-container'
        >
            <div className='window-inner'>
                <StyledTitleBar
                    id='reposition-all'
                    onMouseDown={e =>
                        startReposition(
                            e,
                            duringRepositionALL,
                            'default',
                            'window-container'
                        )
                    }
                ></StyledTitleBar>
            </div>
            <StyledRepositionBorder
                id='reposition-ww'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionWW,
                        'ew-resize',
                        'reposition-ww'
                    )
                }
            />
            <StyledRepositionBorder
                id='reposition-nw'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionNW,
                        'nwse-resize',
                        'reposition-nw'
                    )
                }
            />
            <StyledRepositionBorder
                id='reposition-nn'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionNN,
                        'ns-resize',
                        'reposition-nn'
                    )
                }
            />
            <StyledRepositionBorder
                id='reposition-ne'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionNE,
                        'nesw-resize',
                        'reposition-ne'
                    )
                }
            />
            <StyledRepositionBorder
                id='reposition-sw'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionSW,
                        'nesw-resize',
                        'reposition-sw'
                    )
                }
            />
            <StyledRepositionBorder
                id='reposition-ss'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionSS,
                        'ns-resize',
                        'reposition-ss'
                    )
                }
            />
            <StyledRepositionBorder
                id='reposition-se'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionSE,
                        'nwse-resize',
                        'reposition-se'
                    )
                }
            />
            <StyledRepositionBorder
                id='reposition-ee'
                onMouseDown={e =>
                    startReposition(
                        e,
                        duringRepositionEE,
                        'ew-resize',
                        'reposition-ee'
                    )
                }
            />
        </StyledWindow>
    );
}
