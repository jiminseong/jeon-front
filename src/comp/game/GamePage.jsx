import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/gameback.jpg';
import plate from '../../assets/img/plate.jpg';
import Sokuri_1f from './Sokuri_1f';
import Sokuri_2f from './Sokuri_2f';
import Sokuri_3f from './Sokuri_3f';


const GamePage = () => {

    return (
        <Back>
            <Sokuri_1f/>
            <Sokuri_2f/>
            <Sokuri_3f/>         
        </Back>
    );
};

export default GamePage;

const Back = styled.div`
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    width : 100%;
    height : 100%;
    background: url(${background});
    background-size: cover;
`;

