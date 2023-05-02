import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const AssistandBottom = ({ setActiveSection, activeSection }) => {
  const [searchText, setSearchText] = useState('')
  return (
    <Container>
      <LeftConatiner>
        <Left>
          <ViewCount>
            <AddButton value="30">
              <AddText>30</AddText>
            </AddButton>
            <AddButton value="60">
              <AddText>10</AddText>
            </AddButton>
            <AddButton value="60">
              <AddText>1000</AddText>
            </AddButton>
          </ViewCount>
        </Left>
        <TotalCount>of 19489 Results</TotalCount>
      </LeftConatiner>

      <Right></Right>
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${COLORS.light.white};
  padding: 10px 15px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`

const AddText = styled.p`
  ${TextStyle.body14}
  margin: 0px;
  padding: 0px;
  color: ${COLORS.dark[500]};
`
const Left = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${COLORS.light[300]};
  display: flex;
  width: max-content;
  flex-direction: row;
`
const LeftConatiner = styled.div`
  display: flex;
  width: max-content;
  flex-direction: row;
`
const ViewCount = styled.select`
  border: 0px;
  &:focus {
    outline: none;
  }
`
const AddButton = styled.option`
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
const Right = styled.div`
  display: flex;
  flex-direction: row;
`
const Menu = styled.div`
  padding: 10px;
  border: 1px solid ${COLORS.light[300]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 8px;
`
const SearchContainer = styled.form`
  padding: 10px;
  border: 1px solid ${COLORS.light[300]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`

const MenuIcon = styled.img``
const FilterText = styled.p`
  padding: 0px;
  margin: 0px;
  ${TextStyle.body14}
  color:${COLORS.dark[500]};
  margin-right:10px;
`
const Search = styled.input`
  ${TextStyle.body14}
  color:${COLORS.dark[500]};
  border: 0px;
  &:focus{
    outline: none;
  }
}
`
const SearchButton = styled.div`
  cursor: pointer;
  margin-left: 5px;
`
const TotalCount = styled.p`
  padding:0px;
  margin:0px;
${TextStyle.body14}
color:${COLORS.dark[200]};
align-self:center;
margin-left:10px;

`
export default AssistandBottom
