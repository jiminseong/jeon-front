import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ServerRank from '../rank/ServerRank';

const Home = () => {

    const handleStartClick = () => {
        console.log("Game Start Button Click");
    };

  
    const [setRank, setServerRank] = useState(null);

    const handleRank = (Component) => {
        setServerRank(Component);
      };

     const renderRank= () => {
        return setRank;
      };


    return (
        <>
        <BackImg>
        {renderRank()}
            <Header>
                <RegisterLink to='/register'>회원가입</RegisterLink>
                <RankLink onClick={() => handleRank(<ServerRank/>)}>
                🏆 랭킹
                </RankLink>
            </Header>
            <Container>
             <StartLink to='/login'>화면을 터치하면 게임을 시작합니다</StartLink>
            </Container>
        </BackImg>
        </>
    );
};

export default Home;

const BackImg= styled.div`

`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const Container = styled.div`
    position: absolute;
    bottom: 250px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const  RegisterLink = styled(Link)`
    padding: 10px 20px;
    font-size: 30px;
    background-color: #f2f2f2;
    color: black;
    border: none;
    text-decoration-line: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
`;

const StartLink = styled(RegisterLink)`
    background-color: #ffffff;
    color: black;
    font-size: 50px;
`;

const RankLink = styled(RegisterLink)`

`;