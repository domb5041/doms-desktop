import React, { useState } from 'react';
import styled from 'styled-components';
import Window from '../window/Window';
import { CSSTransition } from 'react-transition-group';

const StyledFolder = styled.div`
    cursor: pointer;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        font-weight: bold;
        font-size: 14px;
    }
`;

export default function Folder({ name, windowOrder, folder, setWindowOrder }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenFolder = () => {
        setIsOpen(true);
        setWindowOrder(folder.id);
    };
    return (
        <>
            <StyledFolder onDoubleClick={handleOpenFolder}>
                <div className='folder-icon'></div>
                <div className='folder-label'>{name}</div>
            </StyledFolder>
            <CSSTransition
                in={isOpen}
                unmountOnExit
                timeout={100}
                classNames='window'
            >
                <Window
                    close={() => setIsOpen(false)}
                    name={name}
                    windowOrder={windowOrder}
                    folder={folder}
                    setWindowOrder={setWindowOrder}
                />
            </CSSTransition>
        </>
    );
}
