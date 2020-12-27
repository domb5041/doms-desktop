import React from 'react';
import styled from 'styled-components';
import Window from './Window';

const StyledDesktop = styled.div`
    background-color: whitesmoke;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export default function Desktop() {
    return (
        <StyledDesktop>
            <Window />
        </StyledDesktop>
    );
}
