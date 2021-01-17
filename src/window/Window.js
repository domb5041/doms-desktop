import React, { useState, useEffect } from 'react';
import {
    StyledWindow,
    StyledTitleBar,
    StyledRepositionBorder,
    StyledTrafficLights,
    StyledWindowTitle,
} from './Window.styled';
import ListView from '../fileBrowse/ListView';

export default function Window({
    close,
    name,
    activeWindow,
    folder,
    setActiveWindow,
}) {
    const [winPosition, setWinPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

    useEffect(() => handleInitialPosition(), []);

    let duringRepositionListener, stopRepositionListener;

    const handleInitialPosition = () => {
        const initialWidth = window.innerWidth * 0.7;
        const initialHeight = window.innerHeight * 0.7;
        const initialLeft = window.innerWidth / 2 - initialWidth / 2;
        const initialTop = window.innerHeight / 2 - initialHeight / 2;
        setWinPosition({
            top: initialTop,
            left: initialLeft,
            width: initialWidth + initialLeft,
            height: initialHeight + initialTop,
        });
    };

    const startReposition = (e, duringFn, cursor) => {
        if (e.button === 0) {
            setActiveWindow(folder.id);
            const relX = e.pageX - winPosition.left;
            const relY = e.pageY - winPosition.top;
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
        handleSetReposition(e, newPosition);
    };

    const duringRepositionSE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        newPosition.height = e.pageY;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionNW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.top = e.pageY;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionNE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        newPosition.top = e.pageY;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionSW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.height = e.pageY;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionNN = e => {
        const newPosition = { ...winPosition };
        newPosition.top = e.pageY;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionSS = e => {
        const newPosition = { ...winPosition };
        newPosition.height = e.pageY;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionEE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionWW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        handleSetReposition(e, newPosition);
    };

    const handleSetReposition = (e, newPosition) => {
        const insideWindowX = e.pageX < window.innerWidth && e.pageX > 0;
        const insideWindowY = e.pageY < window.innerHeight && e.pageY > 0;
        if (insideWindowX && insideWindowY) {
            setWinPosition(newPosition);
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const stopReposition = () => {
        window.removeEventListener('mousemove', duringRepositionListener);
        window.removeEventListener('mouseup', stopRepositionListener);
        document.body.style.cursor = 'default';
    };

    const winPositionStyle = {
        left: winPosition.left,
        top: winPosition.top,
        right: `calc(100% - ${winPosition.width}px)`,
        bottom: `calc(100% - ${winPosition.height}px)`,
    };

    return (
        <StyledWindow
            style={winPositionStyle}
            id='window-container'
            activeWindow={activeWindow}
            folderId={folder.id}
            onClick={() => setActiveWindow(folder.id)}
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
                >
                    <StyledTrafficLights>
                        <div onClick={close}></div>
                        <div></div>
                        <div></div>
                    </StyledTrafficLights>
                    <StyledWindowTitle>{name}</StyledWindowTitle>
                </StyledTitleBar>
                <ListView files={folder.files} />
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
        </StyledWindow>
    );
}
