import React from 'react'
import styled from 'styled-components'
import { COLORS, TextStyle } from '../../context/constants'

const ContactCard = () => {
  return (
    <Container>
      <Left>
        <ProfileCard>
          <ProfilePicContainer>
            <ProfilePic src={require('../../../assets/images/profile.png')} />
          </ProfilePicContainer>
          <ProfileRight>
            <Name>Akshaya R</Name>
            <Phone>+91 6228 322 223</Phone>
          </ProfileRight>
        </ProfileCard>
        <Division>
          <Top>District</Top>
          <Bottom>Malappuram</Bottom>
        </Division>
        <Division>
          <Top>Panchayath</Top>
          <Bottom>Chaliyar</Bottom>
        </Division>
        <Division>
          <Top>Ward</Top>
          <Bottom>Akampadam</Bottom>
        </Division>
      </Left>
      <Right>
        <WhatsappButton>
          <WhatsappLogo
            src={require('../../../assets/icons/whatsapp.svg').default}
          />
          <WhatsappButtonText>Chat Now</WhatsappButtonText>
        </WhatsappButton>
        <Option src={require('../../../assets/icons/three-dot.svg').default} />
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 16px;
  background: ${COLORS.light.white};
  border-radius: 16px;
  border: 1px solid ${COLORS.light[300]};
  justify-content: space-between;
  margin-bottom: 24px;
`

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ProfilePicContainer = styled.div`
  width: 64px;
  height: 64px;
`
const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`
const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
const Name = styled.p`
  ${TextStyle.title18}
  padding:0px;
  margin: 0px;
  color: ${COLORS.dark[500]};
  margin-bottom: 5px;
`
const Phone = styled.p`
  ${TextStyle.body14}
  padding:0px;
  margin: 0px;
  color: ${COLORS.dark[300]};
`
const Division = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  border-left: 1px solid ${COLORS.light[400]};

  margin-left: 45px;
`
const Top = styled.p`
  padding: 0px;
  margin: 0px;

  ${TextStyle.body14};
  color: ${COLORS.dark[300]};
`
const Bottom = styled.p`
  ${TextStyle.body14};
  padding: 0px;
  margin: 0px;
  color: ${COLORS.dark[500]};
`

const Right = styled.div`
  display: flex;
  flex-direction: row;
`
const WhatsappButton = styled.div`
  cursor: pointer;

  padding: 8px;
  border: 2px solid ${COLORS.steyp.primary};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  height: max-content;
  align-items: center;
  align-self: center;
`
const WhatsappLogo = styled.img`
  width: 20px;
  height: 20px;
`
const Option = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  align-self: center;
  margin-left: 10px;
  cursor: pointer;
`
const WhatsappButtonText = styled.p`
  padding: 0px;
  margin: 0px;
  ${TextStyle.body14}
  margin-left:10px;
  font-weight: 600;
  color: ${COLORS.steyp.primary};
`

export default ContactCard
