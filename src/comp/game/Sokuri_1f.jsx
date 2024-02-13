import React, { useState } from 'react';
import styled from 'styled-components';
import sokuri from '../../assets/img/sokuri.jpg'
import Beef from './jeon/Beef';
import Kkochi from './jeon/Kkochi';
import Perilla from './jeon/Perilla';
import Zucchini from './jeon/Zucchini';

const Sokuri_1f = () => {
    // 요소 배열
    const jeonArr = [
        <Beef />,<Beef />, 
        <Kkochi />, 
        <Perilla />,<Perilla />,<Perilla/>, 
        <Zucchini/>,<Zucchini/>,<Zucchini/>];
    
        // 요소 수 배열
        const elementCounts = [2,4,5,5,4,2];
    
        // 요소 출력
        const renderElements = () => {
            const result = [];
            elementCounts.forEach(count => {
                const elements = getRandomElements(jeonArr, count);
                result.push(
                    <Jeon key={result.length}>
                        {elements}
                    </Jeon>
                );
            });
            return result;
        };
    
        // 랜덤 요소 선택 함수
        const getRandomElements = (arr, count) => {
            const shuffledArray = arr.sort(() => 0.5 - Math.random()); // 배열 섞기
            return shuffledArray.slice(0, count); // 지정된 개수만큼 잘라내기
        };
    return (
        <Sokuri>
            {/* 선택된 요소 출력 */}
            {renderElements()}
        </Sokuri>
    );
};

export default Sokuri_1f;

const Sokuri = styled.div`
    position: absolute;
    z-index : 1;
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items : center;
    margin-top : 150px;
    width : 550px;
    height : 550px;
    border-radius : 50%;
    padding : 3em;
    background: url(${sokuri});
    background-size: cover;
`;

const Jeon = styled.div`
    display:flex;
    flex-wrap: wrap;
`;