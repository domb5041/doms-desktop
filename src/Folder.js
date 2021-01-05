import React, { useState } from 'react';
import styled from 'styled-components';
import Window from './Window';

const StyledFolder = styled.div`
    cursor: pointer;
    margin-right: 20px;
    & .folder-icon {
        width: 60px;
        height: 50px;
        border: 2px solid black;
        border-radius: 7px;
        background-color: white;
    }
    & .folder-label {
        text-align: center;
        margin-top: 3px;
    }
`;

export default function Desktop({
    name,
    activeWindow,
    folderId,
    setActiveWindow,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenFolder = () => {
        setIsOpen(true);
        setActiveWindow(folderId);
    };
    return (
        <>
            <StyledFolder onDoubleClick={handleOpenFolder}>
                <div className='folder-icon'></div>
                <div className='folder-label'>{name}</div>
            </StyledFolder>
            {isOpen && (
                <Window
                    close={() => setIsOpen(false)}
                    name={name}
                    activeWindow={activeWindow}
                    folderId={folderId}
                    setActiveWindow={setActiveWindow}
                />
            )}
        </>
    );
}
