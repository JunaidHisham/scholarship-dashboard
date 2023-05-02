import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const WinnerSection = () => {
  return (
    <Container>
      <BackgroundImage
        src={require('../../../assets/images/winnerposter.svg').default}
      />
      <View className="ProfileImage">
        <Image src={require('../../../assets/images/user1.png')} />
      </View>
      <View className="Bottom">
        <Text className="Name">Darshana Suresh</Text>
        <View className="BottomBoxContainer">
          <Text className="BottomBoxText">Akampadam ward</Text>
        </View>
      </View>
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${COLORS.light.white};

  border-radius: 16px;
  aspect-ratio: 1;
  position: relative;
  margin-bottom: 24px;
`
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 16px;
`
const View = styled.div`
  &.ProfileImage {
    position: absolute;

    width: 110px;
    height: 110px;
    box-sizing: border-box;
    margin: auto auto;
    left: 0;
    right: 0px;
    top: -13%;
    bottom: 0;
    border: 8px solid #ac3c23;
    border-radius: 50%;
  }
  &.Bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: max-content;
    padding: 25px;
    align-items: center;
  }
  &.BottomBoxContainer {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid #fff;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    padding: 6px 10px;
    border-radius: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 50%;
`
const Text = styled.p`
  padding: 0px;
  margin: 0px;
  color: ${COLORS.light.white};
  &.Name {
    font-family: 'Inter-Regular';
    font-weight: 600;
    font-size: 18px;
  }
  &.BottomBoxText {
    font-family: 'Inter-Regular';
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
  }
`
export default WinnerSection
