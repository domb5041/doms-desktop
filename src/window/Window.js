import React, { useState, useEffect } from 'react';
import {
    StyledWindow,
    StyledTitleBar,
    StyledWindowTitle,
} from './Window.styled';
import ListView from '../fileBrowse/ListView';
import TrafficLights from './TrafficLights';
import RepositionFrame from './RepositionFrame';

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

    const desktopArea = document
        .getElementById('desktop-area')
        .getBoundingClientRect();

    const handleInitialPosition = () => {
        const width = desktopArea.width * 0.7;
        const height = desktopArea.height * 0.7;
        const left = desktopArea.width / 2 - width / 2;
        const top = desktopArea.height / 2 - height / 2;
        setWinPosition({
            top: top,
            left: left,
            width: width + left,
            height: height + top,
        });
    };

    const maximizeWindow = () => {
        const width = desktopArea.width;
        const height = desktopArea.height - 102;
        const left = 0;
        const top = 0;
        setWinPosition({
            top: top,
            left: left,
            width: width,
            height: height,
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
        newPosition.height = e.pageY - desktopArea.top;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionNW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.top = e.pageY - desktopArea.top;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionNE = e => {
        const newPosition = { ...winPosition };
        newPosition.width = e.pageX;
        newPosition.top = e.pageY - desktopArea.top;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionSW = e => {
        const newPosition = { ...winPosition };
        newPosition.left = e.pageX;
        newPosition.height = e.pageY - desktopArea.top;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionNN = e => {
        const newPosition = { ...winPosition };
        newPosition.top = e.pageY - desktopArea.top;
        handleSetReposition(e, newPosition);
    };

    const duringRepositionSS = e => {
        const newPosition = { ...winPosition };
        newPosition.height = e.pageY - desktopArea.top;
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
        const insideWindowX =
            e.pageX < desktopArea.right && e.pageX > desktopArea.left;
        const insideWindowY =
            e.pageY < desktopArea.bottom && e.pageY > desktopArea.top;
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
        right: desktopArea.width - winPosition.width,
        bottom: desktopArea.height - winPosition.height,
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
                    <TrafficLights
                        close={close}
                        maximizeWindow={maximizeWindow}
                    />
                    <StyledWindowTitle>{name}</StyledWindowTitle>
                </StyledTitleBar>
                <ListView files={folder.files} />
            </div>
            <RepositionFrame
                start={startReposition}
                duringNN={duringRepositionNN}
                duringNE={duringRepositionNE}
                duringEE={duringRepositionEE}
                duringSE={duringRepositionSE}
                duringSS={duringRepositionSS}
                duringSW={duringRepositionSW}
                duringWW={duringRepositionWW}
                duringNW={duringRepositionNW}
            />
        </StyledWindow>
    );
}
