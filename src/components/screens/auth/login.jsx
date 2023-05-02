import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Title className="g-medium">Login to your account</Title>
      <Description className="g-medium">
        Enter your registered phone number
      </Description>
      <InputContainer
        className="b-medium"
        style={{
          borderColor: '#2f3337',
          fontFamily: 'inherit',
        }}
      >
        Username
        <InputField
          autoFocus
          className="b-medium"
          placeholder="Enter your username"
        />
      </InputContainer>
      <InputContainer
        className="b-medium"
        style={{
          borderColor: '#2f3337',
          margin: '15px 0px',
          fontFamily: 'inherit',
        }}
      >
        Password
        <InputField
          autoFocus
          className="b-medium"
          placeholder="Enter your password"
        />
      </InputContainer>
      <BottomButton to="/dashboard" style={{ textDecoration: 'none' }}>
        {' '}
        <Text className="Button">Login</Text>
      </BottomButton>
    </Container>
  )
}
const Container = styled.section`
  width: 100%;
  padding: 200px 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
const Title = styled.h4`
  font-family: 'Gordita-Medium';
  padding: 0px;
  font-size: 25px;
  line-height: 1.4em;
  margin: 0px;
}
  @media (max-width: 640px) {
    font-size: 23px;
    margin-top: 0;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`
const Description = styled.p`
  font-family: 'Gordita-Regular';
  padding: 0px;
  width: max-content;
  font-size: 14px;
  @media (max-width: 480px) {
    font-size: 13px;
  }
`

const BottomButton = styled(Link)`
  cursor: pointer;
  background: #5cc66a;
  display: block;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  width: max-content;
  padding: 12px 60px;
`
const Text = styled.p`
  &.Button {
    padding: 0px;
    margin: 0px;
    font-family: 'Gordita-Medium';
    font-size: 18px;
  }
`

const InputContainer = styled.div`
  position: relative;
  border: 1px solid;
  border-radius: 7px;
  padding: 15px 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-size: 17px;
  width: max-content;
  @media (max-width: 640px) {
    padding: 8px 13px;
  }
  @media (max-width: 480px) {
    padding: 8px 8px;
    border-color: #5f6367;
    font-size: 15px;
  }
  @media (max-width: 380px) {
    font-size: 14px;
    min-height: 40px;
  }
  &:focus-within {
    border-color: #5cc66a;
  }
`
const Icon = styled.img`
  max-width: 17px;
  max-height: 17px;
  margin-right: 12px;
  display: block;
  @media (max-width: 480px) {
    display: none;
  }
`
const InputField = styled.input`
  width: 81%;
  color: #000;
  font-size: 17px;
  padding-left: 5px;
  caret-color: #5cc66a;
  border: 0px;
  margin-left: 10px;
  font-family: inherit;
  @media (max-width: 640px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 80%;
    // padding-left: 10.66667px;
    font-size: 16px;
    // transform: scale(0.9375);
    // transform-origin: left top;
  }
  @media (max-width: 380px) {
    font-size: 14px;
  }
  &:focus {
    outline: none;
  }
`
export default Login
