import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../context/constants'
import UserComponent from '../UserComponent'
import AssistandBottom from './AssistantBottom'
import AssistandTop from './AssistantTop'

const ProgramAssistantContainer = ({ setActivePage }) => {
  const [activeSection, setActiveSection] = useState('all')
  const content = [
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/application-badge.svg').default,
      title: 'Applicantions',
      count: '2,34,000',
    },
    {
      id: 1,
      icon: require('../../../assets/icons/winners-badge.svg').default,
      title: 'Winners',
      count: '19,489',
    },
    {
      id: 2,
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '86,000',
    },
  ]
  return (
    <Container>
      <AssistandTop
        setActivePage={setActivePage}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Middle>
        {content.map((item, index) => {
          return <UserComponent data={item} type={'programAssistant'} />
        })}
      </Middle>
      <AssistandBottom
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${COLORS.light.white};
  border-radius: 16px;
  border: 1px solid ${COLORS.light[300]};
`

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 15px;
  justify-content: space-evenly;
`
export default ProgramAssistantContainer
