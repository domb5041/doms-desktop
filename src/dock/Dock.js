import React from 'react';
import styled from 'styled-components';
import AppIcon from './AppIcon';

const StyledDock = styled.div`
    position: absolute;
    bottom: 5px;
    border: 2px solid black;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
    display: flex;
    padding: 0 5px;
    z-index: 5000;
    background-color: white;
    transition: 0.5s;
    &:hover {
        padding: 0 10px;
        transition: 0.1s;
    }
`;

export default function Dock({ openMessageBox, setMessageBoxText }) {
    const handleOpenMessageBox = app => {
        const text = app + ' is not installed';
        openMessageBox();
        setMessageBoxText(text);
    };

    return (
        <StyledDock>
            <AppIcon name='Finder' open letter='F' />
            <AppIcon
                name='GarageBand'
                onClick={() => handleOpenMessageBox('GarageBand')}
                letter='G'
            />
            <AppIcon
                name='Mail'
                onClick={() => handleOpenMessageBox('Mail')}
                letter='M'
            />
            <AppIcon
                name='Safari'
                onClick={() => handleOpenMessageBox('Safari')}
                letter='S'
            />
            <AppIcon
                name='Notes'
                onClick={() => handleOpenMessageBox('Notes')}
                letter='N'
            />
        </StyledDock>
    );
}
