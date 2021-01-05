import React, { useState } from 'react';
import styled from 'styled-components';
import Folder from './Folder';
import fileStructure from './fileStructure';

const StyledDesktop = styled.div`
    background-color: whitesmoke;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: 20px;
`;

export default function Desktop() {
    const [activeWindow, setActiveWindow] = useState('2');
    return (
        <StyledDesktop>
            {fileStructure.map(folder => (
                <Folder
                    name={folder.name}
                    activeWindow={activeWindow}
                    setActiveWindow={id => setActiveWindow(id)}
                    folderId={folder.id}
                />
            ))}
        </StyledDesktop>
    );
}
