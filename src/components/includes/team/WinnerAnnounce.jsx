import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const WinnerAnnounce = () => {
  return (
    <Container>
      <View className="Container">
        <View className="Badge-conatiner">
          <Image
            className="Badge"
            src={require('../../../assets/icons/badge.svg').default}
          />
        </View>
        <Text className="subText">The winner will be announced on</Text>
        <Text className="Title">15, January 2023</Text>
      </View>
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  flex-direction: row;
  background: ${COLORS.light.white};
  border-radius: 16px;
  padding: 45px;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
`
const View = styled.div`
  &.Container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &.Badge-conatiner {
    display: flex;
    width: 140px;
    height: 150px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Text = styled.p`
  padding: 0px;
  margin: 0px;
  text-align: center;
  &.subText{
    ${TextStyle.body14}
    color:${COLORS.dark[300]};
    margin:20px 0 8px;
  }
  &.Title{
    ${TextStyle.heading20}
    color:${COLORS.steyp.primary};
  }
`
export default WinnerAnnounce
