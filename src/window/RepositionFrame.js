import React from 'react';
import styled from 'styled-components';

const borderWeight = 7;
const cornerWeight = 13;

const StyledFrame = styled.div`
    position: absolute;
    opacity: 0;
    background-color: red;
    &.frame-ww {
        cursor: ew-resize;
        width: ${borderWeight}px;
        top: ${borderWeight}px;
        left: 0;
        bottom: ${borderWeight}px;
    }
    &.frame-ee {
        cursor: ew-resize;
        width: ${borderWeight}px;
        top: ${borderWeight}px;
        right: 0;
        bottom: ${borderWeight}px;
    }
    &.frame-nn {
        cursor: ns-resize;
        height: ${borderWeight}px;
        top: 0;
        left: ${borderWeight}px;
        right: ${borderWeight}px;
    }
    &.frame-ss {
        cursor: ns-resize;
        height: ${borderWeight}px;
        bottom: 0;
        left: ${borderWeight}px;
        right: ${borderWeight}px;
    }
    &.frame-ne {
        cursor: nesw-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        top: 0;
        right: 0;
    }
    &.frame-se {
        cursor: nwse-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        bottom: 0;
        right: 0;
    }
    &.frame-sw {
        cursor: nesw-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        bottom: 0;
        left: 0;
    }
    &.frame-nw {
        cursor: nwse-resize;
        width: ${cornerWeight}px;
        height: ${cornerWeight}px;
        top: 0;
        left: 0;
    }
`;

export default function RepositionFrame({
    start,
    duringNN,
    duringNE,
    duringEE,
    duringSE,
    duringSS,
    duringSW,
    duringWW,
    duringNW,
}) {
    return (
        <>
            <StyledFrame
                className='frame-ww'
                onMouseDown={e => start(e, duringWW, 'ew-resize')}
            />
            <StyledFrame
                className='frame-nn'
                onMouseDown={e => start(e, duringNN, 'ns-resize')}
            />
            <StyledFrame
                className='frame-ss'
                onMouseDown={e => start(e, duringSS, 'ns-resize')}
            />
            <StyledFrame
                className='frame-ee'
                onMouseDown={e => start(e, duringEE, 'ew-resize')}
            />
            <StyledFrame
                className='frame-nw'
                onMouseDown={e => start(e, duringNW, 'nwse-resize')}
            />
            <StyledFrame
                className='frame-sw'
                onMouseDown={e => start(e, duringSW, 'nesw-resize')}
            />
            <StyledFrame
                className='frame-se'
                onMouseDown={e => start(e, duringSE, 'nwse-resize')}
            />
            <StyledFrame
                className='frame-ne'
                onMouseDown={e => start(e, duringNE, 'nesw-resize')}
            />
        </>
    );
}
