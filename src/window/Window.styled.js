import styled from 'styled-components';

export const StyledWindow = styled.div`
    position: absolute;
    min-width: 200px;
    min-height: 100px;
    z-index: ${props => (props.activeWindow === props.folderId ? 3000 : 1)};
    & .window-inner {
        box-shadow: ${props =>
            props.activeWindow === props.folderId
                ? '0 5px 20px rgba(0, 0, 0, 0.2)'
                : 'none'};
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid black;
        background: white;
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;
        display: flex;
        flex-direction: column;
    }
`;

export const StyledTitleBar = styled.div`
    border-bottom: 2px solid black;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
`;

export const StyledWindowTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
`;
