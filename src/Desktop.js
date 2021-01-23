import React, { useState } from 'react';
import styled from 'styled-components';
import Folder from './fileBrowse/Folder';
import fileStructure from './data/fileStructure';
import MenuBar from './menuBar/MenuBar';
import Dock from './dock/DockContainer';
import MessageBox from './window/MessageBoxContainer';

const StyledDesktop = styled.div`
    background-color: whitesmoke;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    & #desktop-area {
        padding: 10px;
        flex: 1;
        position: relative;
    }
`;

export default function Desktop() {
    const [windowOrder, setWindowOrder] = useState(
        fileStructure.map(folder => folder.id)
    );

    const handleSetWindowOrder = id => {
        const windows = [...windowOrder];
        const idToMove = windows.indexOf(id);
        windows.splice(idToMove, 1);
        windows.unshift(id);
        setWindowOrder(windows);
    };

    return (
        <StyledDesktop>
            <MenuBar />
            <div id='desktop-area'>
                {fileStructure.map((folder, i) => (
                    <Folder
                        key={i}
                        index={i}
                        name={folder.name}
                        windowOrder={windowOrder}
                        setWindowOrder={id => handleSetWindowOrder(id)}
                        folder={folder}
                    />
                ))}
            </div>
            <Dock />
            <MessageBox />
        </StyledDesktop>
    );
}
