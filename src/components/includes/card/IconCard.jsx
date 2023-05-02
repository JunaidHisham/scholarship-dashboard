import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const IconCard = ({ data, winnerPost }) => {
  return (
    <Container>
      <View>
        <IconContainer>
          <Icon src={data.icon} alt="Icon" />
        </IconContainer>

        <Title>{data.title}</Title>
      </View>
      <View>
        <Count>
          {winnerPost == false && data.title == 'Participants' ? (
            '--'
          ) : (
            <>{data.count}</>
          )}
        </Count>
        <Arrow src={require('../../../assets/icons/right-arrow.svg').default} />
      </View>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
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
  &:nth-child(1) {
    margin-top: 0px !important;
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

const Icon = styled.img`
  width: 100%;

  box-sizing: border-box;
`

const IconContainer = styled.div`
  padding: 8px;
  border-radius: 30px;
  background: ${COLORS.light.white};
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
`
export default IconCard
