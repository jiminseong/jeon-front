import React from 'react';
import styled from 'styled-components';
import redplate from '../../../assets/img/redplate.png';

const RedDish = () => {
    return <StyledPlate src={redplate}/>;
};

export default RedDish;

const StyledPlate= styled.img`
height: 340px;
width: 340px;
z-index : 3
`;