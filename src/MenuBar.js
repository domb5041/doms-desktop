import React, { useState } from 'react';
import styled from 'styled-components';
import menuItems from './menuItems';

const StyledMenuBar = styled.div`
    height: 30px;
    border-bottom: 2px solid black;
    background-color: white;
    display: flex;
    align-items: stretch;
    padding: 0 5px;
    & .menu-item {
        padding: 0 10px;
        display: flex;
        align-items: center;
        font-weight: bold;
    }
`;

const StyledContextMenu = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    border: 2px solid black;
`;

const StyledHiddenClose = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export default function MenuBar() {
    const [contextMenu, setContextMenu] = useState({
        visible: false,
        top: 0,
        left: 0,
    });

    const openMenu = id => {
        const position = document.getElementById(id).getBoundingClientRect();
        setContextMenu({
            top: position.bottom,
            left: position.left,
            visible: true,
        });
    };

    const closeMenu = () => {
        setContextMenu({
            top: 0,
            left: 0,
            visible: false,
        });
    };

    return (
        <>
            <StyledMenuBar>
                {menuItems.map(menuItem => (
                    <div
                        id={menuItem.id}
                        onClick={() => openMenu(menuItem.id)}
                        onMouseOver={
                            contextMenu.visible
                                ? () => openMenu(menuItem.id)
                                : null
                        }
                        className='menu-item'
                    >
                        {menuItem.name}
                    </div>
                ))}
                <div
                    style={{ flex: 1 }}
                    onMouseOver={contextMenu.visible ? closeMenu : null}
                ></div>
            </StyledMenuBar>
            {contextMenu.visible && (
                <>
                    <StyledHiddenClose onClick={closeMenu} />
                    <StyledContextMenu
                        id='context-menu'
                        style={{ top: contextMenu.top, left: contextMenu.left }}
                    >
                        <div>x</div>
                        <div>x</div>
                        <div>x</div>
                    </StyledContextMenu>
                </>
            )}
        </>
    );
}
