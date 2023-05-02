import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../context/constants'
import { Link } from 'react-router-dom'

const DrawerMenu = ({
  openMenu,
  setOpenMenu,
  itemChange,
  setItemActive,
  Itemactive,
  active,
  setActive,
  activeTeam,
}) => {
  const [teamActive, setTeamActive] = useState(activeTeam)
  const [locationActive, setLocationActive] = useState(false)
  return (
    <Container>
      <View>
        <Header
          style={{
            justifyContent:
              openMenu == false && itemChange == true ? 'center' : 'flex-start',
          }}
        >
          <LogoView>
            <Logo
              src={
                openMenu == false && itemChange == true
                  ? require('../../assets/icons/Logo-E.svg').default
                  : require('../../assets/icons/logo.svg').default
              }
              alt="Logo"
            />
          </LogoView>

          <MenuButton
            className={openMenu ? 'openMenu' : 'closeMenu'}
            onClick={() => {
              if (openMenu) {
                setOpenMenu(false)
                setLocationActive(false)
                setTeamActive(false)
              } else {
                setOpenMenu(true)
                setLocationActive(false)
                setTeamActive(false)
              }
            }}
          >
            <MenuIcon
              src={
                openMenu == false
                  ? require('../../assets/icons/menu-2.svg').default
                  : require('../../assets/icons/menu.svg').default
              }
              alt="Logo"
            />
          </MenuButton>
        </Header>
        <MenuItems>
          <ListContainer>
            <Link
              onClick={() => {
                setItemActive('')
                setActive('dashboard')
              }}
              to="/dashboard"
              style={{ textDecoration: 'none' }}
            >
              <ListItem
                onClick={() => {
                  setTeamActive(false)
                  setLocationActive(false)
                  setActive('dashboard')
                }}
                className={active == 'dashboard' ? 'active' : null}
              >
                <IconView className={openMenu ? 'openMenu' : 'closeMenu'}>
                  <Icon
                    className={openMenu ? 'openMenu' : 'closeMenu'}
                    src={
                      require('../../assets/icons/Menu-Icon/dashboard-icon.svg')
                        .default
                    }
                    alt="Logo"
                  />

                  <IconText
                    style={{
                      display:
                        openMenu == false && itemChange == true
                          ? 'none'
                          : 'flex',
                    }}
                  >
                    Dashboard
                  </IconText>
                </IconView>
              </ListItem>
            </Link>
            <Link
              onClick={() => {
                setItemActive('')
                setActive('winners')
              }}
              to="/winners"
              style={{ textDecoration: 'none' }}
            >
              <ListItem
                onClick={() => {
                  setTeamActive(false)
                  setLocationActive(false)
                  setActive('winners')
                }}
                className={active == 'winners' ? 'active' : null}
              >
                <IconView className={openMenu ? 'openMenu' : 'closeMenu'}>
                  <Icon
                    className={openMenu ? 'openMenu' : 'closeMenu'}
                    src={
                      require('../../assets/icons/Menu-Icon/winners-icon.svg')
                        .default
                    }
                    alt="Logo"
                  />
                  <IconText
                    style={{
                      display:
                        openMenu == false && itemChange == true
                          ? 'none'
                          : 'flex',
                    }}
                  >
                    Winners
                  </IconText>
                </IconView>
              </ListItem>
            </Link>
            <ListItem
              onClick={() => {
                setTeamActive(false)
                setLocationActive(false)
                setActive('participants')
              }}
              className={active == 'participants' ? 'active' : null}
            >
              <IconView className={openMenu ? 'openMenu' : 'closeMenu'}>
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={
                    require('../../assets/icons/Menu-Icon/participants-icon.svg')
                      .default
                  }
                  alt="Logo"
                />
                <IconText
                  style={{
                    display:
                      openMenu == false && itemChange == true ? 'none' : 'flex',
                  }}
                >
                  Participants
                </IconText>
              </IconView>
            </ListItem>
            <ListItem
              onClick={() => {
                setTeamActive(false)
                setLocationActive(false)
                setActive('appilication')
              }}
              className={active == 'appilication' ? 'active' : null}
            >
              <IconView className={openMenu ? 'openMenu' : 'closeMenu'}>
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={
                    require('../../assets/icons/Menu-Icon/applications-icon.svg')
                      .default
                  }
                  alt="Logo"
                />
                <IconText
                  style={{
                    display:
                      openMenu == false && itemChange == true ? 'none' : 'flex',
                  }}
                >
                  Applications
                </IconText>
              </IconView>
            </ListItem>
            <ListItem
              onClick={() => {
                setActive('team')
                setLocationActive(false)
                if (teamActive) {
                  setTeamActive(false)
                } else {
                  setTeamActive(true)
                  setOpenMenu(true)
                }
              }}
              className={active == 'team' ? 'active' : null}
            >
              <IconView className={openMenu ? 'openMenu' : 'closeMenu'}>
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={
                    require('../../assets/icons/Menu-Icon/team-icon.svg')
                      .default
                  }
                  alt="Logo"
                />
                <IconText
                  style={{
                    display:
                      openMenu == false && itemChange == true ? 'none' : 'flex',
                  }}
                >
                  Team
                </IconText>
              </IconView>
              <Arrow
                style={{
                  transform: teamActive ? 'rotate(-90deg)' : 'rotate(0deg)',
                  display: openMenu ? 'flex' : 'none',
                }}
                src={require('../../assets/icons/right-arrow.svg').default}
                alt="Logo"
              />
            </ListItem>
            <TeamList
              style={{
                display: teamActive ? 'flex' : 'none',
              }}
            >
              <Link
                style={{ textDecoration: 'none' }}
                onClick={() => {
                  setItemActive('assistants')
                }}
                to="/program-assistant"
              >
                <TeamListItem
                  onClick={() => {
                    setItemActive('assistants')
                  }}
                  className={Itemactive == 'assistants' ? 'active' : null}
                >
                  <Icon
                    className={openMenu ? 'openMenu' : 'closeMenu'}
                    src={require('../../assets/icons/dot.svg').default}
                    alt="Logo"
                  />
                  <ItemText>Program Assistants</ItemText>
                </TeamListItem>
              </Link>
              <TeamListItem
                onClick={() => {
                  setItemActive('associates')
                }}
                className={Itemactive == 'associates' ? 'active' : null}
              >
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={require('../../assets/icons/dot.svg').default}
                  alt="Logo"
                />
                <ItemText>Program Associates</ItemText>
              </TeamListItem>

              <TeamListItem
                onClick={() => {
                  setItemActive('executives')
                }}
                className={Itemactive == 'executives' ? 'active' : null}
              >
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={require('../../assets/icons/dot.svg').default}
                  alt="Logo"
                />
                <ItemText>Program Executives</ItemText>
              </TeamListItem>
              <TeamListItem
                onClick={() => {
                  setItemActive('managers')
                }}
                className={Itemactive == 'managers' ? 'active' : null}
              >
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={require('../../assets/icons/dot.svg').default}
                  alt="Logo"
                />
                <ItemText>Program Managers</ItemText>
              </TeamListItem>
            </TeamList>
            <ListItem
              onClick={() => {
                setTeamActive(false)
                setActive('location')
                if (locationActive) {
                  setLocationActive(false)
                } else {
                  setLocationActive(true)
                  setOpenMenu(true)
                }
              }}
              className={active == 'location' ? 'active' : null}
            >
              <IconView className={openMenu ? 'openMenu' : 'closeMenu'}>
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={
                    require('../../assets/icons/Menu-Icon/location-icon.svg')
                      .default
                  }
                  alt="Logo"
                />
                <IconText
                  style={{
                    display:
                      openMenu == false && itemChange == true ? 'none' : 'flex',
                  }}
                >
                  Locations
                </IconText>
              </IconView>
              <Arrow
                src={require('../../assets/icons/right-arrow.svg').default}
                alt="Logo"
                style={{
                  transform: locationActive ? 'rotate(-90deg)' : 'rotate(0deg)',
                  display: openMenu ? 'flex' : 'none',
                }}
              />
            </ListItem>
            <TeamList
              style={{
                display: locationActive ? 'flex' : 'none',
              }}
            >
              <TeamListItem
                onClick={() => {
                  setItemActive('wards')
                }}
                className={Itemactive == 'wards' ? 'active' : null}
              >
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={require('../../assets/icons/dot.svg').default}
                  alt="Logo"
                />
                <ItemText>Wards</ItemText>
              </TeamListItem>
              <TeamListItem
                onClick={() => {
                  setItemActive('panchayaths')
                }}
                className={Itemactive == 'panchayaths' ? 'active' : null}
              >
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={require('../../assets/icons/dot.svg').default}
                  alt="Logo"
                />
                <ItemText>Panchayaths</ItemText>
              </TeamListItem>

              <TeamListItem
                onClick={() => {
                  setItemActive('municipalities')
                }}
                className={Itemactive == 'municipalities' ? 'active' : null}
              >
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={require('../../assets/icons/dot.svg').default}
                  alt="Logo"
                />
                <ItemText>Municipalities</ItemText>
              </TeamListItem>
              <TeamListItem
                onClick={() => {
                  setItemActive('corporations')
                }}
                className={Itemactive == 'corporations' ? 'active' : null}
              >
                <Icon
                  className={openMenu ? 'openMenu' : 'closeMenu'}
                  src={require('../../assets/icons/dot.svg').default}
                  alt="Logo"
                />
                <ItemText>Corporations</ItemText>
              </TeamListItem>
            </TeamList>
          </ListContainer>
        </MenuItems>
      </View>

      <TalropLogoContainer>
        <TalropLogo
          src={
            openMenu == false && itemChange == true
              ? require('../../assets/icons/talrop-logo-2.svg').default
              : require('../../assets/icons/talrop-logo.svg').default
          }
          alt="Logo"
        />
      </TalropLogoContainer>
    </Container>
  )
}
const Container = styled.section`
  background: ${COLORS.light.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
`
const LogoView = styled.div`
  display: flex;
  overflow-x: hidden;
`
const MenuButton = styled.a`
  padding: 5px;
  border-radius: 50px;
  border: 1px solid ${COLORS.light[200]};
  display: flex;
  position: absolute;

  background: ${COLORS.light.white};
  z-index: 999px;
  &.openMenu {
    right: 0px;
  }
  &.closeMenu {
    right: -30px;
    @media all and (max-width: 480px) {
      top: -5px;
    }
    @media all and (max-width: 440px) {
      right: -25px;
    }
    @media all and (max-width: 350px) {
      right: -20px;
    }
  }
`
const Logo = styled.img`
  box-sizing: border-box;
`
const MenuIcon = styled.img`
  width: 18px;
`
const MenuItems = styled.div`
  overflow: hidden;
`
const View = styled.div`
  padding: 15px;
`
const ListContainer = styled.div`
  list-style: none;
`
const ListItem = styled.div`
  cursor: pointer;
  border-radius: 9px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-left: 3px solid ${COLORS.light.white};

  &.active {
    background: ${COLORS.talrop.background};
    border-left: 3px solid ${COLORS.steyp.primary};
  }
  &.location {
    justify-content: space-between;
  }
  justify-content: space-between;
`
const Icon = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  display: flex;

  &.closeMenu {
    margin-right: 0px;
  }
`
const IconText = styled.p`
  padding: 0px;
  margin: 0px;
  ${TextStyle.body16}
`
const Arrow = styled.img``
const IconView = styled.div`
  display: flex;
  flex-dircetion: row;
  align-items: center;
  &.closeMenu {
    margin: 0 auto;
  }
`
const TeamList = styled.div`
  flex-direction: column;
`
const TeamListItem = styled.div`
  cursor: pointer;
  border-radius: 9px;
  align-items: center;
  padding: 10px;
  display: flex;
  border-left: 3px solid ${COLORS.light.white};

  &.active {
    background: ${COLORS.talrop.background};
    border-left: 3px solid ${COLORS.steyp.primary};
  }
  &.location {
    justify-content: space-between;
  }
`
const ItemText = styled.p`
  ${TextStyle.body16}
  padding:0px;
  margin: 0px;
`
const TalropLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.steyp.background};
  border-top: 1px solid ${COLORS.steyp.border};
  padding: 10px;
`
const TalropLogo = styled.img``
export default DrawerMenu
