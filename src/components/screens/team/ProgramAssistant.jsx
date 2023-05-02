import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import DrawerMenu from '../../includes/DrawerMenu'
import DashboardHeader from '../../includes/Header'
import Overview from '../../includes/Overview'
import Team from '../../includes/Team'
import { COLORS } from '../../context/constants'
import ProgramManager from '../../includes/ProgramManager'
import ProgramHeader from '../../includes/team/ProgramHeader'
import ProgramAssistantContainer from '../../includes/team/ProgramAssistantContainer'

const ProgramAssistant = () => {
  const [openMenu, setOpenMenu] = useState(
    window.innerWidth <= 980 ? false : true,
  )
  const [itemChange, setItemChange] = useState(
    window.innerWidth <= 980 ? true : false,
  )
  const [Itemactive, setItemActive] = useState('assistants')
  const [active, setActive] = useState('team')

  const team = [
    {
      id: 1,
      title: 'Program Assistants',
      count: '19,489',
    },
    {
      id: 2,
      title: 'Program Associates',
      count: '1,034',
    },
    {
      id: 3,
      title: 'Program Executives',
      count: '206',
    },
    {
      id: 4,
      title: 'Program Managers',
      count: '18',
    },
  ]
  const location = [
    {
      id: 1,
      title: 'Wards',
      count: '19,489',
    },
    {
      id: 2,
      title: 'Panchayats',
      count: '941',
    },
    {
      id: 3,
      title: 'Muncipality',
      count: '87',
    },
    {
      id: 4,
      title: 'Corporations',
      count: '6',
    },
  ]
  return (
    <Container>
      <Left
        className={openMenu ? 'openMenu' : 'closeMenu'}
        onTransitionEnd={() => {
          if (itemChange) {
            setItemChange(false)
          } else {
            setItemChange(true)
          }
        }}
      >
        <DrawerMenu
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          setItemChange={setItemChange}
          itemChange={itemChange}
          Itemactive={Itemactive}
          setItemActive={setItemActive}
          active={active}
          setActive={setActive}
          activeTeam={true}
        />
      </Left>
      <Right>
        <DashboardHeader />

        <View>
          <ProgramHeader Title="Program Assistants (19489)" />
          <ProgramAssistantContainer />
        </View>
      </Right>
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  box-sizing: border-box;
`
const Title = styled.div`
  font-size: 14px;
`
const Left = styled.div`
  height: 100vh;
  // padding: 15px;
  border-right: 1px solid ${COLORS.light[300]};
  background: ${COLORS.light.white};
  transition: 0.8s;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.2, 1.21);

  &.openMenu {
    width: 20%;
    @media all and (max-width: 1440px) {
      width: 19%;
    }
    @media all and (max-width: 1280px) {
      width: 22%;
    }
    @media all and (max-width: 1080px) {
      width: 25%;
    }
    @media all and (max-width: 980px) {
      width: 32%;
      position: absolute;
      z-index: 999;
    }

    @media all and (max-width: 768px) {
      z-index: 999;
      width: 40%;
    }
    @media all and (max-width: 640px) {
      width: 60%;
    }
    @media all and (max-width: 420px) {
      width: 100%;
    }
  }
  &.closeMenu {
    width: 5.5%;
    @media all and (max-width: 1550px) {
      width: 5%;
    }
    @media all and (max-width: 1440px) {
      width: 6%;
    }
    @media all and (max-width: 1280px) {
      width: 7%;
    }
    @media all and (max-width: 1080px) {
      width: 8%;
    }
    @media all and (max-width: 980px) {
      width: 10%;
    }
    @media all and (max-width: 768px) {
      width: 12%;
    }
    @media all and (max-width: 640px) {
      width: 16%;
    }
    @media all and (max-width: 480px) {
      width: 6%;
    }
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const BorderBottom = styled.div`
  // padding: 15px;
`
const Right = styled.div`
  flex: 1;
  height: 100vh;
`
const View = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;
  background: ${COLORS.talrop.background};
  height: 93vh;
  overflow-y: scroll;
  box-sizing: border-box;
`
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
`
export default ProgramAssistant
