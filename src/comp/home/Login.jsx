import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
 
    return (
        <>
        <Container>
            <TopSection>
            <HomeLink to='/'>🔙</HomeLink>
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
            <Footer>
                <StartLink to='/game'>화면을 터치하면 게임을 시작합니다</StartLink>
            </Footer>
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

const HomeLink = styled(Link)`
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
const StartLink = styled(HomeLink)`
    background-color:transparent;
    font-size: 50px;
    height : 70px;
`;

const Footer = styled.div`
    width: 1366px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items : top;
    gap: 10px;
`;