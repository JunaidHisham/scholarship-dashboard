import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../context/constants'
import UserComponent from './UserComponent'

const ProgramManager = () => {
  const content = [
    {
      id: 1,
      icon: require('../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 2,
      icon: require('../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
  ]
  return (
    <Container>
      <View>
        <Heading>Program Managers</Heading>
        <Line />
      </View>
      <BottomView>
        {content.map((item, index) => {
          return <UserComponent data={(item, index)} />
        })}
      </BottomView>
    </Container>
  )
}
const Container = styled.section`
  padding: 18px;
  background: ${COLORS.light.white};
  border-radius: 15px;

  margin-bottom: 25px;
`
const Heading = styled.p`
  margin: 0px;
  ${TextStyle.heading16}
  width: max-content;

  box-sizing: border-box;
`
const Line = styled.div`
  text-decoration-line: overline;
  height: 1px;
  width: 76%;
  background: ${COLORS.light[300]};
  border-radius: 50px;

  box-sizing: border-box;
`

const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`
const BottomView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default ProgramManager
