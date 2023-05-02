import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";
import RegModal from "./RegModal/RegModal";
import $ from "jquery";
import SuccessModal from "./modals/SuccessModal";

const Spotlight = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);

  useEffect(() => {
    if (toggleModal || isSuccessModal) {
      $("html").addClass("modal-enabled");
    } else {
      $("html").removeClass("modal-enabled");
    }
  }, [toggleModal, isSuccessModal]);

  return (
    <View className="Container">
      <RegModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        setSuccessModal={setSuccessModal}
      />
      <SuccessModal
        isSuccessModal={isSuccessModal}
        setSuccessModal={setSuccessModal}
      />
      <View className="Top">
        <View className="Wrapper">
          <View className="HeaderConatiner">
            <LogoConatiner>
              <Logo src={require("../assets/icons/logo.svg").default} />
            </LogoConatiner>
            <Button className="applyButton" to="/?action=phone">
              <View
                className="whiteApplyButton"
                onClick={() => {
                  setToggleModal(true);
                }}
              >
                <Text className="applyButtonText">Apply for Scholarship</Text>
              </View>
            </Button>
          </View>
        </View>
      </View>
      <View className="Spotlight">
        <View className="Wrapper">
          <View className="Content">
            <View className="Heading">
              <Image
                className="SpotlightImage"
                src={require("../assets/images/spotlight-head.png")}
              />{" "}
            </View>
            <Text className="Paragraph">
              <Span className="text-1">Steyp </Span> is introducing a{" "}
              <Span className="text-2">₹40 Crores</Span> Scholarship Programme
              to transform Kerala from a{" "}
              <Span className="text-3">Consumer State to Creator State.</Span>{" "}<br/>
              One student from each ward of Kerala is selected and a total of
              <Span className="text-4">19,498</Span> students will be benefited
              from this programme.
            </Text>

            <CardContainer>
              <View className="spotlightButtonContainer">
                <View className="buttonLeft">
                  <Text className="titleBtn">Are you a school student ?</Text>
                  <Text className="subTitleBtn">
                    5th standard to 12th standard
                  </Text>
                </View>
                <View className="buttonRight">
                  <Text className="btnTxt">Apply for Scholarship</Text>
                </View>
              </View>
              <Hr />
              <ExamTime>
                <p>Exam on</p>
                <DateDiv>
                  <span>
                    <img
                      src={require("../assets/images/calendar.svg").default}
                      alt="Calendar"
                    />
                  </span>
                  <p>10th April 2023</p>
                </DateDiv>
                <TimeDiv>
                  <span>
                    <img
                      src={require("../assets/images/clock.svg").default}
                      alt="Clock"
                    />
                  </span>
                  <p>5:00 PM - 5:30 PM</p>
                </TimeDiv>
              </ExamTime>
            </CardContainer>
          </View>
        </View>
        <View className="SpotlightImageContainer">
          <Image
            className="SpotlightImage"
            src={require("../assets/images/spotlight.svg").default}
          />
        </View>
      </View>
    </View>
  );
};
const View = styled.div`
  display: flex;
  &.Container {
    background: linear-gradient(
      180deg,
      #edf5eb 0%,
      rgba(237, 245, 235, 0) 100%
    );
    flex-direction: column;
  }

  &.Wrapper {
    ${Styles.wrapper}
  }
  &.HeaderConatiner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
  &.Top {
    width: 100%;
    padding: 25px 0;
  }
  &.whiteApplyButton {
    background: #fff;
    border-radius: 6px;
    padding: 13px 20px;
    cursor: pointer;
  }
  &.Spotlight {
    padding: 100px 0 160px;
    position: relative;
  }
  &.Content {
    width: 40%;
    flex-direction: column;
  }
  &.SpotlightImageContainer {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
  }
  &.spotlightButtonContainer {
    display: flex;
    justify-content: space-between;
  }

  &.buttonLeft {
    flex-direction: column;
  }
  &.buttonRight {
    background: #0fa290;
    padding: 15px 25px;
    border-radius: 6px;
    align-items: center;

    cursor: pointer;
  }
  &.ExamDate {
    display: flex;
    width: max-content;
    height: max-content;
    align-self: center;
    margin-left: 40px;
  }
  &.leftDate {
    background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
    border-radius: 10px 0px 0px 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &.rightDate {
    border-radius: 0px 10px 10px 0px;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    background: #fff;
    z-index: 999;
    border-width: 1px, 1px, 1px, 0px;
    border: 1px solid #78bc6d;
    padding-right: 40px;
  }
  &.Heading {
    width: 100%;
  }
  @media all and (max-width: 1280px) {
    &.Content {
      width: 500px;
    }
  }
`;
const CardContainer = styled.div`
  box-shadow: 0px 51px 94px rgb(0 0 0 / 8%);
  background: #fff;
  padding: 20px;
  border-radius: 10px;
`;
const Hr = styled.hr`
  width: 100%;
  /* background-color: #D4D4D4; */
  border: 1px solid #d4d4d4;
  margin: 5px 0 ;
`;
const ExamTime = styled.div`
  display: flex;
  p {
    color: #000;
    font-weight: 600;
    font-size: 16px;
  }
`;
const DateDiv = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 15px;
    display: inline-block;
    img {
      width: 100%;
      display: block;
    }
  }
  p {
    background: linear-gradient(180deg, #0FA76F 0%, #0B6846 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;
const TimeDiv = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 15px;
    img {
      display: block;
      width: 100%;
    }
  }
`;
const Text = styled.p`
  padding: 0px;
  margin: 0px;
  &.applyButtonText {
    font-family: Gordita-Medium;
    font-size: 15px;
    background: linear-gradient(127.01deg, #0fa76f -9.18%, #0f9ea7 129.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  &.Heading {
    font-family: Gordita-Bold;
    background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 45px;
  }
  &.Paragraph {
    font-family: Gordita-Regular;
    font-size: 16px;
    color: #747474;
    margin: 10px 0px 35px;
  }
  &.titleBtn {
    font-family: "Gordita-Medium";
    font-size: 16px;
  }
  &.subTitleBtn {
    font-family: "Gordita-Regular";
    font-size: 14px;
  }
  &.btnTxt {
    font-family: "Gordita-Medium";
    font-size: 15px;
    color: #fff;
  }
  &.ExamTime {
    color: #f1fbf8;
    font-size: 14px;
    font-family: "Gordita-Medium";
  }
  &.dateText {
    color: #009262;
    font-family: "Gordita-Medium";
    font-size: 15px;
    &:nth-child(1) {
      margin-bottom: 5px;
    }
  }
  @media all and (max-width: 1280px) {
    &.Paragraph {
      font-size: 16px;
      line-height: 1.4rem;
    }
  }
`;
const Span = styled.p`
  padding: 0px;
  display: inline-flex;
  margin: 0px;
  &.text-1 {
    font-family: Gordita-Medium;
  }
  &.text-2 {
    background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-family: Gordita-Medium;
    font-size: 18px;
  }
  &.text-3 {
    color: #000;
    font-family: "Gordita-Medium";
  }
  &.text-4 {
    background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-family: Gordita-Medium;
  }
`;
const Button = styled(Link)`
  cursor: pointer;
  &.applyButton {
    padding: 2px;
    border-radius: 8px;
    background: linear-gradient(127.01deg, #0fa76f -9.18%, #0f9ea7 129.96%);
    cursor: pointer;
    z-index: 999;
    text-decoration: none;
  }
`;
const LogoConatiner = styled.div``;
const Logo = styled.img`
  width: 100%;
`;
const Image = styled.img`
  &.SpotlightImage {
    width: 100%;
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  margin-top: 5px;
`;
export default Spotlight;
