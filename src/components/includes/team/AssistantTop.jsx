import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const AssistandTop = ({ setActiveSection, activeSection, setActivePage }) => {
  const [searchText, setSearchText] = useState('')
  return (
    <Container>
      <Left>
        <AddButton
          onClick={() => {
            setActiveSection('all')
            setActivePage('All')
          }}
          style={{ marginRight: '4px' }}
          className={activeSection == 'all' ? 'active' : null}
        >
          <AddText>All</AddText>
        </AddButton>
        <AddButton
          onClick={() => {
            setActivePage('New')
            setActiveSection('new')
          }}
          className={activeSection == 'new' ? 'active' : null}
        >
          <AddText>New</AddText>
        </AddButton>
      </Left>
      <Right>
        <SearchContainer>
          <Search placeholder="Search" type="text" />
          <SearchButton>
            <MenuIcon
              src={require('../../../assets/icons/search-button.svg').default}
            />
          </SearchButton>
        </SearchContainer>
        <Menu>
          <FilterText>District</FilterText>
          <MenuIcon src={require('../../../assets/icons/down.svg').default} />
        </Menu>
        <Menu>
          <FilterText>Municipality</FilterText>
          <MenuIcon src={require('../../../assets/icons/down.svg').default} />
        </Menu>
        <Menu>
          <FilterText>Ward</FilterText>
          <MenuIcon src={require('../../../assets/icons/down.svg').default} />
        </Menu>
        <Menu>
          <FilterText>Filter</FilterText>
          <MenuIcon src={require('../../../assets/icons/filter.svg').default} />
        </Menu>
        <Menu>
          <MenuIcon
            src={require('../../../assets/icons/three-dot.svg').default}
          />
        </Menu>
      </Right>
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${COLORS.light.white};
  padding: 10px 15px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 1px solid ${COLORS.light[300]};
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

export default AssistandTop
