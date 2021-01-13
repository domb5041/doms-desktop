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
`;

const StyledMenuItem = styled.div`
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
    border-radius: 4px;
    background-color: ${props => (props.active ? 'black' : 'transparent')};
    color: ${props => (props.active ? 'white' : 'black')};
    cursor: pointer;
    user-select: none;
`;

const StyledContextMenu = styled.div`
    position: absolute;
    min-width: 200px;
    background-color: white;
    border-radius: 7px;
    border: 2px solid black;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    padding: 5px;
`;

const StyledContextMenuItem = styled.div`
    border-radius: 4px;
    padding: 7px 10px;
    cursor: pointer;
    &:hover {
        background-color: black;
        color: white;
    }
`;

const StyledContextMenuSpacer = styled.div`
    border-bottom: 1px solid black;
    margin: 5px;
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
        id: '',
        top: 0,
        left: 0,
    });

    const openMenu = id => {
        const position = document.getElementById(id).getBoundingClientRect();
        setContextMenu({
            top: position.bottom,
            left: position.left,
            id: id,
        });
    };

    const closeMenu = () => {
        setContextMenu({
            top: 0,
            left: 0,
            id: '',
        });
    };

    return (
        <>
            <StyledMenuBar>
                {menuItems.map(menuItem => (
                    <StyledMenuItem
                        id={menuItem.id}
                        onClick={
                            contextMenu.id
                                ? closeMenu
                                : () => openMenu(menuItem.id)
                        }
                        onMouseOver={
                            contextMenu.id ? () => openMenu(menuItem.id) : null
                        }
                        active={menuItem.id === contextMenu.id}
                    >
                        {menuItem.name}
                    </StyledMenuItem>
                ))}
                <div
                    style={{ flex: 1 }}
                    onMouseOver={contextMenu.id ? closeMenu : null}
                ></div>
            </StyledMenuBar>
            {contextMenu.id && (
                <>
                    <StyledHiddenClose onClick={closeMenu} />
                    <StyledContextMenu
                        id='context-menu'
                        style={{ top: contextMenu.top, left: contextMenu.left }}
                    >
                        {menuItems[
                            menuItems.findIndex(n => n.id === contextMenu.id)
                        ].items.map(item => (
                            <>
                                {item.type === 'button' && (
                                    <StyledContextMenuItem>
                                        {item.name}
                                    </StyledContextMenuItem>
                                )}
                                {item.type === 'spacer' && (
                                    <StyledContextMenuSpacer />
                                )}
                            </>
                        ))}
                    </StyledContextMenu>
                </>
            )}
        </>
    );
}
