import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ReactComponent as BackIcon} from '../../assets/icon/back.svg';
const Home = () => {
    
    return (
        <TodoBack>
            <BackIcon onClick={() => window.location.replace("/")} />
            <BackMain>
                <Ranking></Ranking>
            </BackMain>
        </TodoBack>
    );
};

export default Home;

const TodoBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5); 
    padding: 30px;
    `;

const BackMain = styled.div`
    display: flex; /* Flexbox 사용 */
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center;
`;

const Ranking = styled.div`
    margin: 10px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    width: 1000px;
    height: 850px;
`;