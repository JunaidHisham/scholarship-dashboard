import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../context/constants'

const ProgramAssistantBExam = () => {
  return <Container></Container>
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${COLORS.light.white};
  border-radius: 16px;
  border: 1px solid ${COLORS.light[300]};
`

export default ProgramAssistantBExam
