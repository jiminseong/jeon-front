import React from 'react';
import styled from 'styled-components';
import Sokuri from './Sokuri';
import RedDish from './dish/RedDish';
import BlueDish from './dish/BlueDish';

const GamePage = () => {
    return (
        <>
        <Back>
            <RedDish/>
            <Sokuri/>
            <BlueDish/>
        </Back>
        </>
    );
};

export default GamePage;

const Back = styled.div`
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    width : 100%;
    height : 100%;
    background-size: cover;
    display: flex;
    justify-content: space-between;

`;
/*background: url(${background});*/