import React from 'react'
import { COLORS, TextStyle } from '../../context/constants'
import styled from 'styled-components'

const Posters = () => {
  const posters = [
    {
      id: 1,
      image: require('../../../assets/images/poster.png'),
    },
    {
      id: 2,
      image: require('../../../assets/images/poster2.jpeg'),
    },
    {
      id: 3,
      image: require('../../../assets/images/poster.png'),
    },
    {
      id: 4,
      image: require('../../../assets/images/poster.png'),
    },
  ]
  return (
    <Container>
      <Top>
        <Title>Share Scholarship Detalis</Title>
      </Top>
      <Bottom>
        {posters.map((item) => {
          return (
            <PosterContainer>
              <Poster src={item.image} />
              <ButtonContainer>
                <Download>
                  <Icon
                    src={require('../../../assets/icons/download.svg').default}
                  />
                </Download>
                <Share>
                  <Icon
                    src={require('../../../assets/icons/share.svg').default}
                  />
                </Share>
              </ButtonContainer>
            </PosterContainer>
          )
        })}
      </Bottom>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.light.white};
  border-radius: 8px;
  border: 1px solid ${COLORS.light[300]};
  margin-bottom: 24px;
`
const Top = styled.div`
  padding: 11px 16px;
  border-bottom: 1px solid ${COLORS.light[300]};
`
const Title = styled.p`
  ${TextStyle.heading16}
  padding:0px;
  margin: 0px;
`
const Bottom = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const PosterContainer = styled.div`
  width: 24%;
  border: 1px solid ${COLORS.light[400]};
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
`
const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 100%;
`
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: row;
`
const Download = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
  background: ${COLORS.light.white};
  border-radius: 8px;
  border: 1px solid ${COLORS.steyp.primary};
  margin-right:8px;
}
`
const Share = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
  background: ${COLORS.steyp.primary};
  border-radius: 8px;
  box-shadow: 0px 8px 9px rgba(15, 167, 111, 0.29);
`
const Icon = styled.img`
  display: flex;
  width: 100%;
`
export default Posters
