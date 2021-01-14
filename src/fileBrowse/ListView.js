import React, { useState } from 'react';
import styled from 'styled-components';
import { formatDate } from '../utilities';

const StyledListView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
`;

const StyledListHeader = styled.div`
    padding: 10px 10px;
    margin: 0 13px;
    display: flex;
    border-bottom: 1px solid black;
    & > div {
        flex: 1;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 7px;
    }
`;

const StyledFiles = styled.div`
    padding: 0 10px 10px 10px;
    overflow: auto;
    flex: 1;
`;

const StyledFile = styled.div`
    padding: 10px 13px;
    border-radius: 8px;
    background-color: ${props =>
        props.evenRow ? 'transparent' : 'whitesmoke'};
    display: flex;
    & > div {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 7px;
    }
`;

export default function ListView({ files }) {
    return (
        <StyledListView>
            <StyledListHeader>
                <div>Name</div>
                <div>Date Modified</div>
                <div>Size</div>
                <div>Kind</div>
            </StyledListHeader>
            <StyledFiles>
                {files.map((file, i) => (
                    <StyledFile evenRow={i % 2 === 0}>
                        <div>{file.name}</div>
                        <div>
                            {formatDate(
                                file.dateModified,
                                'dd mmm yyyy at hh:mm'
                            )}
                        </div>
                        <div>{file.size}</div>
                        <div>{file.type}</div>
                    </StyledFile>
                ))}
            </StyledFiles>
        </StyledListView>
    );
}
