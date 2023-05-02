import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../context/constants'

const TeamBox = ({ data }) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <View>
        <Count>{data.count}</Count>
        <Arrow src={require('../../assets/icons/right-arrow.svg').default} />
      </View>
    </Container>
  )
}
const Container = styled.div`
  padding: 15px;
  background: ${COLORS.light[100]};
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${COLORS.talrop.background};
  margin-top: 10px;
  transition: 0.2s;
  transition-timing-function: ease-out;
  &:hover {
    background: ${COLORS.steyp.background};
    border: 1px solid rgba(15, 167, 111, 0.24);
  }
  &:nth-child(3n) {
    margin-right: 0px !important;
  }
  cursor: pointer;

  box-sizing: border-box;
`
const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Arrow = styled.img``
const Title = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.dark[500]};
  margin-left: 10px;
  font-family: Inter-Regular;
`

const Count = styled.h3`
  margin: 0px;
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`
export default TeamBox
