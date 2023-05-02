import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Course = () => {
  return (
    <View>
      <View className="Wrapper">
        <View className="courseConatiner">
          {/* <View className="Left"> */}
          <AnimationOnScroll
            style={{
              background: "#ecf4ea",
              borderRadius: "30px",
              width: "30%",
              display: "flex",
              position: "relative",
              aspectRatio: 1,
            }}
            animateIn="animate__fadeInBottomLeft"
            animateOnce={true}
          >
            <View className="LeftImageConatiner">
              <Image
                className="Left"
                src={require("../assets/images/course.svg").default}
              />
            </View>
          </AnimationOnScroll>
          {/* </View> */}
          <View className="Right">
            <AnimationOnScroll
              animateIn="animate__slideInUp"
              animateOnce={true}
            >
              <Text className="Title">
                Become a <Span>Creator by Computer Engineer</Span> Through This
                Scholarship with Absolutely Free
              </Text>
              <View className="one-year">
                <View className="left-box">
                  <Text className="course-Title">
                    <Span>1 Year</Span> Foundation Course
                  </Text>
                  <Text className="description">
                    The one-year foundation course will enable students to
                    become capable self-learners who can be passionate to
                    extract information from the best minds in the world. Learn
                    Website Development, Web Application Development, and Mobile
                    Application Development to start your coding journey from
                    the basics to become an expert in the field.
                  </Text>
                </View>
                <View className="right-box">
                  <Image
                    className="Icon"
                    src={require("../assets/icons/one-year.svg").default}
                  />
                </View>
              </View>
              <View className="four-year">
                <View className="left-box">
                  <Text className="course-Title">
                    <Span>4 Year</Span> Community Program
                  </Text>
                  <Text className="description">
                    Learn, interact, and connect with real engineering
                    professionals by working with them on innovative projects.
                    Get real-world experiences and a chance to work on your
                    projects in technology-based and like-minded communities.
                  </Text>
                </View>
                <View className="right-box">
                  <Image
                    className="Icon"
                    src={require("../assets/icons/four-year.svg").default}
                  />
                </View>
              </View>
            </AnimationOnScroll>
          </View>
        </View>
      </View>
    </View>
  );
};
const View = styled.div`
  &.Wrapper {
    ${Styles.wrapper}
  }
  &.courseConatiner {
    display: flex;
    position: relative;
    padding: 100px 74px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  &.Left {
    background: #ecf4ea;
    border-radius: 30px;
    width: 30%;
    display: flex;
    position: relative;
    aspect-ratio: 1;
  }
  &.Right {
    display: flex;
    width: 65%;
    flex-direction: column;
  }
  &.LeftImageConatiner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
  }
  &.one-year {
    display: flex;
    background: #f9f9f9;
    box-shadow: -18px 74px 100px rgb(0 0 0 / 9%);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    border: 1px solid #f9f9f9;
    &:hover {
      border: 1px solid #0ca3ac;
      background: #fff;
    }
  }
  &.four-year {
    display: flex;
    background: #f9f9f9;
    box-shadow: -18px 74px 100px rgb(0 0 0 / 9%);
    border-radius: 15px;
    padding: 20px;
    justify-content: space-between;

    border: 1px solid #f9f9f9;
    &:hover {
      border: 1px solid #0ca3ac;
      background: #fff;
    }
  }
  &.left-box {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  &.right-box {
    display: flex;
    align-self: center;
    background: #ecf4ea;
    border-radius: 10px;
    padding: 15px;
  }
`;
const Text = styled.p`
  padding: 0px;
  margin: 0px;
  &.Title {
    font-size: 22px;
    font-family: "Gordita-Medium";
    margin-bottom: 25px;
  }
  &.course-Title {
    font-size: 18px;
    font-family: "Gordita-Medium";
  }
  &.description {
    font-size: 14px;
    font-family: "Gordita-Regular";
    color: #747474;
    margin-top: 5px;
  }
`;
const Image = styled.img`
  &.Left {
    width: 100%;
  }
  &.Icon {
    display: flex;
    width: 40px;
    height: 40px;
  }
`;
const Span = styled.p`
  padding: 0px;
  margin: 0px;
  display: inline-flex;
  background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export default Course;
