import styled from 'styled-components';

const borderWeight = 8;

export const StyledWindow = styled.div`
    position: absolute;
    min-width: 200px;
    min-height: 100px;
    & .window-inner {
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid black;
        background: white;
        position: absolute;
        top: ${borderWeight / 2 - 2}px;
        left: ${borderWeight / 2 - 2}px;
        right: ${borderWeight / 2 - 2}px;
        bottom: ${borderWeight / 2 - 2}px;
    }
`;

export const StyledTitleBar = styled.div`
    border-bottom: 2px solid black;
    width: 100%;
    height: 30px;
`;

export const StyledRepositionBorder = styled.div`
    position: absolute;
    opacity: 0;
    background-color: red;
    &.direction-ww {
        cursor: ew-resize;
        width: ${borderWeight}px;
        top: ${borderWeight}px;
        left: 0;
        bottom: ${borderWeight}px;
    }
    &.direction-ee {
        cursor: ew-resize;
        width: ${borderWeight}px;
        top: ${borderWeight}px;
        right: 0;
        bottom: ${borderWeight}px;
    }
    &.direction-nn {
        cursor: ns-resize;
        height: ${borderWeight}px;
        top: 0;
        left: ${borderWeight}px;
        right: ${borderWeight}px;
    }
    &.direction-ss {
        cursor: ns-resize;
        height: ${borderWeight}px;
        bottom: 0;
        left: ${borderWeight}px;
        right: ${borderWeight}px;
    }
    &.direction-ne {
        cursor: nesw-resize;
        width: ${borderWeight}px;
        height: ${borderWeight}px;
        top: 0;
        right: 0;
    }
    &.direction-se {
        cursor: nwse-resize;
        width: ${borderWeight}px;
        height: ${borderWeight}px;
        bottom: 0;
        right: 0;
    }
    &.direction-sw {
        cursor: nesw-resize;
        width: ${borderWeight}px;
        height: ${borderWeight}px;
        bottom: 0;
        left: 0;
    }
    &.direction-nw {
        cursor: nwse-resize;
        width: ${borderWeight}px;
        height: ${borderWeight}px;
        top: 0;
        left: 0;
    }
`;
