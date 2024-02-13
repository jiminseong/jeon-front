import React from 'react';
import styled from 'styled-components';
import background from '../../assets/img/GameBack.jpg'; 


const GamePage = () => {
    return (
        <Back src={background}>
        </Back>
    );
};

export default GamePage;

const Back = styled.img`
    width : 100%;
    height : 100%;
`;