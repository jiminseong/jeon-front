import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
    const handleStartClick = () => {
        console.log("Game Start Button Click");
    };
    const handleHomeClick = () => {
        console.log("goto Home Button Click");
    };
    const handleRegisterClick = () => {
        console.log("goto Register Button Click");
    }
    return (
        <>
        <Container>
            <TopSection>
                <Link to='/'>
                    <Button onClick={handleHomeClick}>🔙</Button>
                </Link>
            </TopSection>
            <BottomSection>
                <LeftSection style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <FormStyle>
                    <p>1p</p>
                        <Input type="text" placeholder="ID" />
                        <Input type="password" placeholder="PW" />
                    </FormStyle>
                </LeftSection>
                <RightSection style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <FormStyle>
                        <p>2p</p>
                        <Input type="text" placeholder="ID" />
                        <Input type="password" placeholder="PW" />
                    </FormStyle>
                </RightSection>
            </BottomSection>
            <Putter>
                <Link to='/game'>
                    <StartButton onClick={handleStartClick}>Game Start</StartButton>
                </Link>
            </Putter>
        </Container>
        </>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 1024px;
`;

const TopSection = styled.div`
    flex: 1;
`;

const BottomSection = styled.div`
    flex: 1;
    display: flex;
`;

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    font-size: 30px;
`;

const RightSection = styled.div`
    flex: 1;
    display: flex;
    font-size: 30px;
`;

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    height: 200px;
`;

const Input = styled.input`
    width: 250px;
    height: 30px;
    margin-bottom: 10px; 
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 30px;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
`;

const StartButton = styled(Button)`
    color: black;
    font-size: 50px;
`;

const Putter = styled.div`
    width: 1366px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items : top;
    gap: 10px;
`;