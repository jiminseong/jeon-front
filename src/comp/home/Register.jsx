import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleHomeClick = () => {
        console.log("goto Home Button Click");
    };
    const handleRegisterClick = () => {
        console.log("Game Start Button Click");
    };

    return (
        <>
        <Link to='/'>
            <Button onClick={handleHomeClick}>🔙</Button>
        </Link>
        <Container>
            <BackForm>
                <FormStyle>
                    <Input type="text" placeholder="NickName" />
                    <Input type="text" placeholder="ID" />
                    <Input type="password" placeholder="PW" />
                </FormStyle>
                <Button onClick={handleRegisterClick}>회원가입</Button>
            </BackForm>
        </Container>
        </>
    );
};

export default Register;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
    width: 1366px;
`;
/* 1024 */

const BackForm = styled.div`
    width: 600px;
    height: 800px;
    background-color: #b8d6f4;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 500px;
    height: 100px;
    margin-bottom: 60px;
    border-radius: 10px;
    border: none;
`;