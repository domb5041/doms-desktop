import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFile = styled.div`
    padding: 20px;
`;

export default function File({ name }) {
    return <StyledFile>{name}</StyledFile>;
}
