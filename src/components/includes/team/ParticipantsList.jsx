import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const ParticipantsList = () => {
  const [activeSection, setActiveSection] = useState('option-one')
  const data = [
    {
      no: 1,
      name: 'Ananya Raj',
      school: 'Ghss Koramkod',
      class: '10',
      div: 'B',
      date: '12-01-23, 09:11',
    },
    {
      no: 2,
      name: 'Sharukh Sha',
      school: 'Ghss Koramkod',
      class: '12',
      div: 'A',
      date: '12-01-23, 09:11',
    },
    {
      no: 3,
      name: 'Athira M',
      school: 'Ghss Koramkod',
      class: '10',
      div: 'B',
      date: '12-01-23, 09:11',
    },
    {
      no: 4,
      name: 'Hafnas K',
      school: 'Ghss Koramkod',
      class: '10',
      div: 'B',
      date: '12-01-23, 09:11',
    },
    {
      no: 5,
      name: 'Joshua John',
      school: 'Ghss Koramkod',
      class: '10',
      div: 'B',
      date: '12-01-23, 09:11',
    },
    {
      no: 6,
      name: 'Amithabh Kumar',
      school: 'Ghss Koramkod',
      class: '10',
      div: 'B',
      date: '12-01-23, 09:11',
    },
    {
      no: 7,
      name: 'Jyothisha',
      school: 'Ghss Koramkod',
      class: '10',
      div: 'B',
      date: '12-01-23, 09:11',
    },
    {
      no: 8,
      name: 'Mrithul Raj',
      school: 'Ghss Koramkod',
      class: '10',
      div: 'B',
      date: '12-01-23, 09:11',
    },
  ]
  return (
    <Container>
      <View className="Top">
        <Left>
          <AddButton
            onClick={() => {
              setActiveSection('option-one')
            }}
            style={{ marginRight: '4px' }}
            className={activeSection == 'option-one' ? 'active' : null}
          >
            <AddText>Applications</AddText>
          </AddButton>
          <AddButton
            onClick={() => {
              setActiveSection('option-two')
            }}
            className={activeSection == 'option-two' ? 'active' : null}
          >
            <AddText>Participants</AddText>
          </AddButton>
        </Left>
        <Right>
          <View className="Button">
            <Text className="ViewMore">View All</Text>
            <Button>
              <Icon
                src={
                  require('../../../assets/icons/active-right-circle.svg')
                    .default
                }
              />
            </Button>
          </View>
        </Right>
      </View>
      <View className="Bottom">
        <TableConatiner>
          <Table className="Head">
            <TableH className="marginL">No</TableH>
            <TableH>Name</TableH>
            <TableH>School</TableH>
            <TableH>Class</TableH>
            <TableH>Division</TableH>
            <TableH>Date & Time</TableH>
            <TableH className="marginR">
              <Option
                src={require('../../../assets/icons/three-dot.svg').default}
              />
            </TableH>
          </Table>

          {data.map((item, index) => {
            return (
              <Table key={index} className>
                <TableD
                  className={
                    data.length == index + 1 ? 'last marginL' : 'marginL'
                  }
                >
                  {item.no}
                </TableD>
                <TableD className={data.length == index + 1 ? 'last' : null}>
                  {item.name}
                </TableD>
                <TableD className={data.length == index + 1 ? 'last' : null}>
                  {item.school}
                </TableD>
                <TableD className={data.length == index + 1 ? 'last' : null}>
                  {item.class}
                </TableD>
                <TableD className={data.length == index + 1 ? 'last' : null}>
                  {item.div}
                </TableD>
                <TableD className={data.length == index + 1 ? 'last' : null}>
                  {item.date}
                </TableD>
                <TableD
                  className={
                    data.length == index + 1 ? 'last marginR' : 'marginR'
                  }
                >
                  {' '}
                  <Option
                    src={require('../../../assets/icons/three-dot.svg').default}
                  />
                </TableD>
              </Table>
            )
          })}
        </TableConatiner>
      </View>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  background: ${COLORS.light.white};
  border-radius: 16px;
  border: 1px solid ${COLORS.light[300]};
  justify-content: space-between;
  margin-bottom: 24px;
  flex-direction: column;
`

const AddText = styled.p`
  ${TextStyle.body14}
  margin: 0px;
  padding: 0px;
  color: ${COLORS.dark[500]};
`
const Left = styled.div`
  padding: 6px;
  border-radius: 10px;
  border: 1px solid ${COLORS.light[300]};
  display: flex;
  width: max-content;
  flex-direction: row;
`
const AddButton = styled.div`
  padding: 6px 10px;

  border-radius: 8px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: max-content;
  &.all {
    margin-left: 4px;
  }
  &:hover {
    background: ${COLORS.light[200]};
  }
  &.active {
    background: ${COLORS.steyp.primary};
    box-shadow: 0px 8px 9px rgba(15, 167, 111, 0.29);
    ${AddText} {
      color: ${COLORS.light.white};
    }
  }
`
const View = styled.div`
  display: flex;
  &.Top {
    padding: 11px 16px;
    border-bottom: 1px solid ${COLORS.light[300]};
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    align-items: center;
  }
  &.Button {
    align-items: center;
    cursor: pointer;
  }
`
const Right = styled.div``
const Text = styled.p`
    padding:0px;
    margin:0px;
    display:flex;
  &.ViewMore {
    ${TextStyle.label14}
    color:${COLORS.steyp.primary};
    align-self:center;
    margin-right:10px;
    font-weight:600;

  }
`
const Button = styled.div`
  display: flex;
`
const Icon = styled.img``
const TableConatiner = styled.table`
  border-collapse: collapse;
  width: 100%;
`
const Table = styled.tr``
const TableD = styled.td`
  padding:15px 0px;
  border-bottom: 1px solid ${COLORS.light[200]};
  &.marginL{
    padding-left:15px;
  }
  &.marginR{
    // padding-left:10px;
  }
&.last{
  border-bottom: 0px solid #fff;

}
  ${TextStyle.body14}
  color:${COLORS.dark.black}`
const TableH = styled.th`
  text-align: start;
  border-bottom: 1px solid ${COLORS.light[200]};
  padding: 15px 0px;
  &.marginL {
    padding-left: 15px;
  }
  &.marginR {
    // padding-left: 10px;
  }
  ${TextStyle.body14}
  color:${COLORS.dark[200]}
`
const Option = styled.img`
  width: 18px;
  height: 18px;
  display: flex;
  align-self: center;
  margin-left: 10px;
  cursor: pointer;
`
export default ParticipantsList
