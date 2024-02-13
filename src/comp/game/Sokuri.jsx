import React from 'react';
import styled from 'styled-components';
import sokuri from '../../assets/img/sokuri.jpg';

const Sokuri = () => {
    return <StyledSokuri />;
};

export default Sokuri;

const StyledSokuri = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    height: 550px;
    border-radius: 50%;
    background: url(${sokuri});
    background-color: yellow;
`;