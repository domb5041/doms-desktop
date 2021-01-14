import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFiles = styled.div`
    padding: 10px;
`;

const StyledFile = styled.div`
    padding: 10px 13px;
    border-radius: 8px;
    background-color: ${props =>
        props.evenRow ? 'whitesmoke' : 'transparent'};
    display: flex;
    & > div {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default function ListView({ files }) {
    return (
        <StyledFiles>
            {files.map((file, i) => (
                <StyledFile evenRow={i % 2 === 0}>
                    <div>{file.name}</div>
                    <div>{file.dateModified}</div>
                    <div>{file.size}</div>
                    <div>{file.type}</div>
                </StyledFile>
            ))}
        </StyledFiles>
    );
}
