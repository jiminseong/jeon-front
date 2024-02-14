import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/gameback.png'
import Sokuri_1f from './sokuri/Sokuri_1f';
import Sokuri_2f from './sokuri/Sokuri_2f';
import Sokuri_3f from './sokuri/Sokuri_3f';
import RedDish from './dish/RedDish';
import BlueDish from './dish/BlueDish';
import lefthand from '../../assets/img/lefthand.png';
import righthand from '../../assets/img/righthand.png';


const GamePage = () => {

    return (
        <Back>
            <RedDish/>
            <LeftHand src={lefthand}/>
            <Sokuri_1f/>
            {/* <Sokuri_2f/>
            <Sokuri_3f/>          */}
            <RightHand src={righthand}/>
            <BlueDish/>
        </Back>
    );
};

export default GamePage;

const Back = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 100%;
    height : 100%;
    background : url(${background});
    background-size: cover;
`;

const LeftHand = styled.img`
    margin-top : -210px;
    margin-left : 368px;
    height: 131px;
    width: 131px;
    position :absolute;
    z-index : 3
`;

const RightHand = styled.img`
    margin-top : -210px;
    margin-left : 868px;
    height: 131px;
    width: 131px;
    position :absolute;
    z-index : 3
`;
