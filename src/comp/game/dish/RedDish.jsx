import React from 'react';
import styled from 'styled-components';
import plate from '../../../assets/img/plate.jpg';

const RedDish = () => {
    return <StyledPlate />;
};

export default RedDish;

const StyledPlate= styled.div`
    width : 300px;
    height : 300px;
    border-radius : 50%;
    background : url(${plate});
`;