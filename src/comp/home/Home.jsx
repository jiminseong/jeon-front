import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ServerRank from '../rank/ServerRank';

const Home = () => {

    const handleStartClick = () => {
        console.log("Game Start Button Click");
    };

    const handleLoginClick = () => {
        console.log("Login Button Click");
    }

  
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
            <TopContainer>
                <Link to='/register'>
                    <Button onClick={handleLoginClick}>회원가입</Button>
                </Link>
                
                <Button onClick={() => handleRank(<ServerRank/>)}>
                    <p>🏆 랭킹</p>
                </Button>

            </TopContainer>
            <Container>
                <Link to='/login'>
                    <StartButton onClick={handleStartClick}>Game Start</StartButton>
                </Link>
            </Container>
        </BackImg>
        </>
    );
};

export default Home;

const BackImg= styled.div`

`;

const TopContainer = styled.div`
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

const Button = styled.button`
    padding: 10px 20px;
    font-size: 30px;
    background-color: #ffff00;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
`;

const StartButton = styled(Button)`
    background-color: #ffffff;
    color: black;
    font-size: 50px;
`;