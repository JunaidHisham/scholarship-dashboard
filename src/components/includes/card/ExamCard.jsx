import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const ExamCard = ({ winnerPost }) => {
  return (
    <Container>
      <View className="Conatiner">
        <View className="Top">
          <IconContainer>
            <Icon
              className="TopIcon"
              src={require('../../../assets/icons/document.svg').default}
              alt="Icon"
            />
          </IconContainer>
          <Text className="Heading">Examination Completed</Text>
        </View>
        <View className="Bottom">
          <View className="Left">
            <Icon
              className="Bottom"
              src={require('../../../assets/icons/date.svg').default}
            />
            <Text className="BottomText">10, April 2023</Text>
          </View>
          <View className="Right">
            <Icon
              className="Bottom"
              src={require('../../../assets/icons/time.svg').default}
            />
            <Text className="BottomText">5:00 to 6:00 pm</Text>
          </View>
        </View>
      </View>
      {winnerPost == false ? (
        <View className="Download">
          <Download>
            <Icon
              className="Icon-Download"
              src={require('../../../assets/icons/download.svg').default}
            />
            <Text className="Download">Download Poster</Text>
          </Download>
          <Share>
            <Icon
              className="Icon"
              src={require('../../../assets/icons/share.svg').default}
            />
          </Share>
        </View>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  background: ${COLORS.light.white};
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${COLORS.light[400]};
`
const View = styled.div`
  &.Top {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  }
  &.Conatiner {
    padding: 15px;
    background: ${COLORS.light[200]};
    border-radius: 12px;
  }
  &.Bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &.Left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &.Right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &.Download {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }
`
const Text = styled.p`
  padding: 0px;
  margin: 0px;
  &.Heading {
    ${TextStyle.heading16}
    color:${COLORS.dark[500]};
    margin-left:15px;
  }
  &.BottomText{
    ${TextStyle.body16}
    color:${COLORS.dark[500]};
    margin-left:8px;
  }
  &.Download{
    color:${COLORS.steyp.primary};
    font-family: 'Inter-Regular';
    font-weight: 600;
    font-size: 14px;
    margin-left:10px;
  }
`

const Icon = styled.img`
  &.TopIcon {
    width: 100%;
    box-sizing: border-box;
  }
  &.Bottom {
    width: 20px;
    height: 20px;
  }
  &.Icon {
    display: flex;
    width: 100%;
  }
  &.Icon-Download {
    display: flex;
  }
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

const Download = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
  background: ${COLORS.light.white};
  border-radius: 8px;
  border: 1px solid ${COLORS.steyp.primary};
  margin-right:8px;
  width:100%;
  flex-direction:row;
  align-items: center;
  justify-content: center;
}
`
const Share = styled.div`
  display: flex;
  padding: 5px 6px;
  cursor: pointer;
  background: ${COLORS.steyp.primary};
  border-radius: 8px;
  box-shadow: 0px 8px 9px rgba(15, 167, 111, 0.29);
`
export default ExamCard
