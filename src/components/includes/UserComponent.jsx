import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../context/constants'

const UserComponent = ({ data, index, type }) => {
  return (
    <Container
      className={type == 'programAssistant' ? 'assistand' : 'container'}
    >
      <TopView>
        <ImageContainer>
          <Profile src={require('../../assets/images/profile.png')} />
        </ImageContainer>
      </TopView>
      <BottomView>
        <Name>Akshaya</Name>
      </BottomView>
      <Link
        style={{ textDecoration: 'none' }}
        to={{
          pathname: `/program-assistant-single/${data.id}`,
        }}
      >
        <RightArrow
          src={require('../../assets/icons/right-arrow-circle.svg').default}
        />
      </Link>
      <Edit src={require('../../assets/icons/edit.svg').default} />
    </Container>
  )
}
const RightArrow = styled.img`
  position: absolute;
  right: -25px;
  top: 25px;
  transition: 0.4s;
  transition-timing-function: ease-out;
  cursor: pointer;
`
const Edit = styled.img`
  position: absolute;
  left: -25px;
  top: 25px;
  transition: 0.4s;
  transition-timing-function: ease-out;
  cursor: pointer;
`
const Container = styled.div`
  padding: 10px;
  background: ${COLORS.light.white};
  width: 23.5%;
  margin-right: 13px;
  border-radius: 12px;
  border: 1px solid ${COLORS.light[300]};
  margin-top: 13px;
  transition: 0.2s;
  transition-timing-function: ease-out;
  &:hover {
    border: 1px solid ${COLORS.steyp.primary};
    ${RightArrow} {
      right: 10px;
    }
    ${Edit} {
      left: 10px;
    }
  }
  &.container {
    &:nth-child(4n) {
      margin-right: 0px !important;
    }
  }

  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  &.assistand {
    width: 15.65%;
    &:nth-child(6n) {
      margin-right: 0px !important;
    }
  }
`
const BottomView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const TopView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Profile = styled.img`
  width: 100%;
  height: 100%;
`
const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`
const Arrow = styled.img``
const Name = styled.p`
  ${TextStyle.body14}
  margin:0px;
  padding: 0px;
  margin-top: 8px;
`
export default UserComponent
