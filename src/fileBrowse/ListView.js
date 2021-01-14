import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatDate, formatBytes } from '../utilities';

const StyledListView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
`;

const StyledListHeader = styled.div`
    padding: 0 10px;
    margin: 0 13px 2px 13px;
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
        padding: 10px 0;
        cursor: pointer;
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
        props.activeFile
            ? 'black'
            : props.evenRow
            ? 'transparent'
            : 'whitesmoke'};
    color: ${props => (props.activeFile ? 'white' : 'black')};
    display: flex;
    cursor: pointer;
    & > div {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 7px;
    }
`;

export default function ListView({ files }) {
    const [activeFile, setActiveFile] = useState(null);
    const [files2, setFiles2] = useState(files);
    const [sortBy, setSortBy] = useState(null);

    useEffect(() => handleSortBy('name', 'text'), []);

    const handleSortBy = (col, type) => {
        const files2Copy = [...files2];
        const sortMap = {
            text: (a, b) => (a[col] === b[col] ? 0 : a[col] < b[col] ? -1 : 1),
            number: (a, b) => a[col] - b[col],
        };
        setSortBy(col);
        setFiles2(files2Copy.sort(sortMap[type]));
    };

    return (
        <StyledListView>
            <StyledListHeader>
                <div onClick={() => handleSortBy('name', 'text')}>
                    Name {sortBy === 'name' && 'v'}
                </div>
                <div onClick={() => handleSortBy('dateModified', 'number')}>
                    Date Modified {sortBy === 'dateModified' && 'v'}
                </div>
                <div onClick={() => handleSortBy('size', 'number')}>
                    Size {sortBy === 'size' && 'v'}
                </div>
                <div onClick={() => handleSortBy('type', 'text')}>
                    Kind {sortBy === 'type' && 'v'}
                </div>
            </StyledListHeader>
            <StyledFiles>
                {files2.map((file, i) => (
                    <StyledFile
                        evenRow={i % 2 === 0}
                        onClick={() => setActiveFile(i)}
                        activeFile={i === activeFile}
                    >
                        <div>{file.name}</div>
                        <div>
                            {formatDate(
                                file.dateModified,
                                'dd mmm yyyy at hh:mm'
                            )}
                        </div>
                        <div>{formatBytes(file.size)}</div>
                        <div>{file.type}</div>
                    </StyledFile>
                ))}
            </StyledFiles>
        </StyledListView>
    );
}
