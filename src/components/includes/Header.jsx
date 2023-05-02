import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../context/constants'

const DashboardHeader = () => {
  return (
    <Container>
      <Heading>Program Officer Dashboard</Heading>
      <View>
        <SearchNav>
          <Search src={require('../../assets/icons/search.svg').default} />
        </SearchNav>
        <NotificationNav>
          <Notification
            src={require('../../assets/icons/notification.svg').default}
          />
        </NotificationNav>
        <Avatar>
          <AvatarConatiiner>
            <AvatarIcon
              src={require('../../assets/images/avatar.png')}
              alt="Icon"
            />
          </AvatarConatiiner>
          <AvatarName>Akshay Raj</AvatarName>
          <DownArrow src={require('../../assets/icons/down.svg').default} />
        </Avatar>
      </View>
    </Container>
  )
}
const Container = styled.section`
  padding: 20px 25px;
  background: ${COLORS.light.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2vh;
`
const Heading = styled.p`
  ${TextStyle.title14}
  text-transform: uppercase;
  margin: 0px;
`
const View = styled.div`
  display: flex;
  flex-direction: row;
`
const SearchNav = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
  border-radius: 100px;
  display: flex;
  &:hover {
    background: ${COLORS.light[300]};
  }
  background: ${COLORS.light[200]};
  margin-right: 15px;
`
const Search = styled.img``
const NotificationNav = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
  border-radius: 100px;
  display: flex;
  &:hover {
    background: ${COLORS.light[300]};
  }
  background: ${COLORS.light[200]};
  margin-right: 16px;
`
const Notification = styled.img``
const AvatarConatiiner = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 14px;
`
const AvatarIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`

const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const AvatarName = styled.p`
  @media all and (max-width: 768px) {
    display: none;
  }

  ${TextStyle.body16}
  padding:0px;
  margin: 0;
  margin-right: 14px;
`
const DownArrow = styled.img`
  cursor: pointer;
`
export default DashboardHeader
