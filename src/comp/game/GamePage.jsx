import React from 'react';
import styled from 'styled-components';
import Beef from './jeon/Beef';
import Kkochi from './jeon/Kkochi';
import Perilla from './jeon/Perilla';
import Zucchini from './jeon/Zucchini';

const GamePage = () => {
    return (
        <Back>
            <Beef/>
            <Kkochi/>
            <Perilla/>
            <Zucchini/>
        </Back>
    );
};

export default GamePage;

const Back = styled.div`
    width : 100%;
    height : 100%;
    background-image: url('../../assets/img/gameback.jpg');
    background-size: 100%;
`;