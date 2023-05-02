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
import ProgramAssistantBExam from '../../includes/team/ProgramAssistantBExam'
import ContactCard from '../../includes/team/ContactCard'
import Posters from '../../includes/team/Posters'
import ParticipantsList from '../../includes/team/ParticipantsList'
import WinnerSection from '../../includes/team/WinnerSection'
import IconCard from '../../includes/card/IconCard'
import ExamCard from '../../includes/card/ExamCard'
import WinnerAnnounce from '../../includes/team/WinnerAnnounce'

const ProgramAssistantSinglePage = () => {
  const [openMenu, setOpenMenu] = useState(
    window.innerWidth <= 980 ? false : true,
  )
  const [itemChange, setItemChange] = useState(
    window.innerWidth <= 980 ? true : false,
  )
  const [Itemactive, setItemActive] = useState('assistants')
  const [active, setActive] = useState('team')
  const [data, setData] = useState('Akshaya R')
  const [WinnerAnnounced, setWinnerAnnounced] = useState(false)
  const [winnerPost, setWinnerPost] = useState(true)

  const cardData = [
    {
      icon: require('../../../assets/icons/member-badge.svg').default,
      title: 'Participants',
      count: '12',
    },
    {
      icon: require('../../../assets/icons/application-badge.svg').default,
      title: 'Applications',
      count: '16',
    },
  ]
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
  // const data = {
  //   name: 'Akshaya R',
  // }
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
          <ProgramHeader
            page="program-assistant-before-exam"
            Title="Akshaya R"
          />
          <ContactCard />
          {/* <ProgramAssistantBExam /> */}
          <BottomContainer>
            <LeftSection>
              <Posters />
              <ParticipantsList />
            </LeftSection>
            <RightSection>
              {winnerPost ? (
                <>
                  {WinnerAnnounced == true ? (
                    <WinnerSection />
                  ) : (
                    <WinnerAnnounce />
                  )}
                </>
              ) : null}

              <ParticipantsBox>
                {cardData.map((item) => {
                  return <IconCard winnerPost={winnerPost} data={item} />
                })}
              </ParticipantsBox>
              <ExamCard winnerPost={winnerPost} />
            </RightSection>
          </BottomContainer>
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
  background: ${COLORS.talrop.background};
  height: 93vh;
  overflow-y: scroll;
  box-sizing: border-box;
`
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
const ParticipantsBox = styled.div`
  display: flex;
  border: 1px solid ${COLORS.light[400]};
  padding: 10px;
  border-radius: 16px;
  flex-direction: column;
  background: ${COLORS.light.white};

  margin-bottom: 24px;
`
export default ProgramAssistantSinglePage
