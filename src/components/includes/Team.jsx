import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../context/constants'
import OverviewBox from './OverviewBox'
import TeamBox from './TeamBox'

const Team = ({ content, title, width }) => {
  return (
    <Container>
      <View>
        <Heading>{title}</Heading>
        <Line style={{ width: width }} />
      </View>
      <BottomView>
        {content.map((item) => {
          return <TeamBox data={item} />
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

  border: 1px solid ${COLORS.light[300]};
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
  background: ${COLORS.light[300]};
  border-radius: 50px;
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

export default Team
