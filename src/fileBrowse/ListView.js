import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatDate, formatBytes } from '../utilities';
import MessageBox from '../window/MessageBox';

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
`;
const StyledHeadCol = styled.div`
    flex: 1;
    font-size: 14px;
    font-weight: bold;
    margin-right: 7px;
    padding: 10px 0;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    & .sort-arrow {
        position: absolute;
        right: 7px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 17px;
    }
    & .column-resize {
        position: absolute;
        right: 0;
        width: 1px;
        height: 25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 17px;
        font-weight: normal;
        background-color: black;
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
    user-select: none;
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
    const [openFile, setOpenFile] = useState(null);
    const [files2, setFiles2] = useState(files);
    const [sortBy, setSortBy] = useState([null, false]);

    useEffect(() => handleSortBy('name'), []);

    const handleSortBy = col => {
        const files2Copy = [...files2];
        const reverse = (sortBy[0] === col && !sortBy[1]) || false;

        const sortText = (a, b) =>
            a[col] === b[col] ? 0 : a[col] < b[col] ? -1 : 1;
        const sortTextR = (a, b) =>
            a[col] === b[col] ? 0 : b[col] < a[col] ? -1 : 1;
        const sortNumber = (a, b) => a[col] - b[col];
        const sortNumberR = (a, b) => b[col] - a[col];

        const sortFn = () => {
            switch (col) {
                case 'name':
                case 'type':
                    return reverse ? sortTextR : sortText;
                case 'size':
                case 'dateModified':
                    return reverse ? sortNumberR : sortNumber;
            }
        };

        setSortBy([col, reverse]);
        setFiles2(files2Copy.sort(sortFn()));
    };

    const returnSortSymbol = col => {
        if (sortBy[0] === col) {
            return <div className='sort-arrow'>{sortBy[1] ? '⋀' : '⋁'}</div>;
        }
        return null;
    };

    return (
        <StyledListView>
            <StyledListHeader>
                <StyledHeadCol onClick={() => handleSortBy('name')}>
                    Name
                    {returnSortSymbol('name')}
                    <div className='column-resize' />
                </StyledHeadCol>
                <StyledHeadCol onClick={() => handleSortBy('dateModified')}>
                    Date Modified
                    {returnSortSymbol('dateModified')}
                    <div className='column-resize' />
                </StyledHeadCol>
                <StyledHeadCol onClick={() => handleSortBy('size')}>
                    Size
                    {returnSortSymbol('size')}
                    <div className='column-resize' />
                </StyledHeadCol>
                <StyledHeadCol onClick={() => handleSortBy('type')}>
                    Kind
                    {returnSortSymbol('type')}
                </StyledHeadCol>
            </StyledListHeader>
            <StyledFiles>
                {files2.map((file, i) => (
                    <>
                        <StyledFile
                            evenRow={i % 2 === 0}
                            onClick={() => setActiveFile(file.id)}
                            onDoubleClick={() => setOpenFile(file.id)}
                            activeFile={file.id === activeFile}
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
                        <MessageBox
                            isOpen={openFile === file.id}
                            close={() => setOpenFile(null)}
                        />
                    </>
                ))}
            </StyledFiles>
        </StyledListView>
    );
}
