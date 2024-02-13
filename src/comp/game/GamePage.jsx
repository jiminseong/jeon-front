import React from 'react';
import styled from 'styled-components';
import background from '../../assets/img/gameback.jpg';
import sokuri from '../../assets/img/sokuri.jpg';
import plate from '../../assets/img/plate.jpg';



const GamePage = () => {
    return (
        <>
        <Back>
            <Red/>
            <Sokuri/>
            <Blue/>
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
    background: url(${background});
    background-size: cover;
`;

const Sokuri = styled.div`
    width : 550px;
    height : 550px;
    border-radius : 50%;
    background: url(${sokuri});
`;


const Red = styled.div`
    width : 300px;
    height : 300px;
    border-radius : 50%;
    background : url(${plate});
`;

const Blue = styled.div`
    width : 300px;
    height : 300px;
    border-radius : 50%;
    background : url(${plate});
`;