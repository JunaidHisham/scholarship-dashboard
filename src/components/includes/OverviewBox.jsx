import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../context/constants'

const OverviewBox = ({ data }) => {
  return (
    <Container>
      <TopView>
        <IconContainer>
          <Icon src={data.icon} alt="Icon" />
        </IconContainer>
        <Heading>{data.title}</Heading>
      </TopView>
      <BottomView>
        <Count>{data.count}</Count>
        <Arrow src={require('../../assets/icons/right-arrow.svg').default} />
      </BottomView>
    </Container>
  )
}
const Container = styled.div`
  padding: 15px;
  background: ${COLORS.light[100]};
  width: 32%;
  border-radius: 12px;
  border: 1px solid ${COLORS.talrop.background};
  margin-top: 16px;
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
  @media all and (max-width: 1550px) {
    width: 32%;
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
  margin-bottom: 10px;
`
const Icon = styled.img`
  width: 100%;

  box-sizing: border-box;
`
const Arrow = styled.img``

const IconContainer = styled.div`
  padding: 8px;
  border-radius: 30px;
  background: ${COLORS.light.white};
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
`
const Heading = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: 500;
  color: ${COLORS.dark[400]};
  margin-left: 10px;
  font-family: Inter-Regular;
`
const Count = styled.h3`
  margin: 0px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  font-family: Inter-Regular;
`
export default OverviewBox
