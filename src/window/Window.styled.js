import styled from 'styled-components';

const borderWeight = 7;
const cornerWeight = 13;

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
        top: ${borderWeight / 2 - 2}px;
        left: ${borderWeight / 2 - 2}px;
        right: ${borderWeight / 2 - 2}px;
        bottom: ${borderWeight / 2 - 2}px;
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

export const StyledRepositionBorder = styled.div`
    position: absolute;
    opacity: 0;
    background-color: red;
    &#reposition-ww {
        cursor: ew-resize;
        width: ${borderWeight}px;
        top: ${borderWeight}px;
        left: 0;
        bottom: ${borderWeight}px;
    }
    &#reposition-ee {
        cursor: ew-resize;
        width: ${borderWeight}px;
        top: ${borderWeight}px;
        right: 0;
        bottom: ${borderWeight}px;
    }
    &#reposition-nn {
        cursor: ns-resize;
        height: ${borderWeight}px;
        top: 0;
        left: ${borderWeight}px;
        right: ${borderWeight}px;
    }
    &#reposition-ss {
        cursor: ns-resize;
        height: ${borderWeight}px;
        bottom: 0;
        left: ${borderWeight}px;
        right: ${borderWeight}px;
    }
    &#reposition-ne {
        cursor: nesw-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        top: 0;
        right: 0;
    }
    &#reposition-se {
        cursor: nwse-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        bottom: 0;
        right: 0;
    }
    &#reposition-sw {
        cursor: nesw-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        bottom: 0;
        left: 0;
    }
    &#reposition-nw {
        cursor: nwse-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        top: 0;
        left: 0;
    }
`;
