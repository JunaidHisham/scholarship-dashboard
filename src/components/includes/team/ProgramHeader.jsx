import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const ProgramHeader = ({ name, page, Title, Dir, activePage }) => {
  return (
    <Container>
      <View>
        <Heading>{Title}</Heading>

        <PageContainer>
          <Page>{Dir}</Page>
          <Page className="activePage">{activePage}</Page>
        </PageContainer>
      </View>
      {page !== 'program-assistant-before-exam' ? (
        <AddButton>
          <AddIcon src={require('../../../assets/icons/plus.svg').default} />
          <AddText>Add Program Assistant</AddText>
        </AddButton>
      ) : null}
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`
const Heading = styled.p`
  ${TextStyle.heading20}
  padding:0px;
  margin: 0px;
  margin-bottom: 5px;
`
const View = styled.div``
const Page = styled.p`
  ${TextStyle.body14}
  padding:0px;
  margin: 0px;
  opacity: 50%;
  margin-right: 6px;
  &.activePage {
    opacity: 100%;
  }
  color: ${COLORS.dark[500]};
`
const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const AddButton = styled.div`
  padding: 6px 10px;
  background: ${COLORS.steyp.primary};
  border-radius: 8px;
  box-shadow: 0px 8px 9px rgba(15, 167, 111, 0.29);
  display: flex;
  flex-direction: row;
  cursor: pointer;
`
const AddIcon = styled.img`
  margin-right: 8px;
`
const AddText = styled.p`
  color: ${COLORS.light.white};
  font-family: Inter-Regular;
  font-weight: 600;
  font-size: 14px;
  margin: 0px;
  padding: 0px;
`
export default ProgramHeader
