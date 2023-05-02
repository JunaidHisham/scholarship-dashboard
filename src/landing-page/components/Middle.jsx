import React, { useContext, useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";

const Middle = () => {
    return (
        <View id="Middle">
            <View className="Wrapper">
                <AnimationOnScroll
                    animateIn="animate__slideInUp"
                    animateOnce={true}
                >
                    <View className="Container">
                        <View className="Left">
                            <View className="Top">
                                <Text className="Title">
                                    Are you a school student ?
                                </Text>
                                <View className="std">
                                    <Icon
                                        src={
                                            require("../assets/icons/tick.svg")
                                                .default
                                        }
                                    />
                                    <Text className="subTitle">
                                        5th standard to 12th standard
                                    </Text>
                                </View>
                            </View>
                            <View className="buttonLeft">
                                <Text className="btnTxt">
                                    Apply for Scholarship
                                </Text>
                            </View>
                        </View>
                        <View className="Right">
                            <View className="firstImage">
                                <Image
                                    src={
                                        require("../assets/images/ad.svg")
                                            .default
                                    }
                                />
                            </View>
                            <View className="secondImage">
                                <Image
                                    src={
                                        require("../assets/images/mammootty.svg")
                                            .default
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </AnimationOnScroll>
            </View>
        </View>
    );
};
const View = styled.div`
    &.Wrapper {
        ${Styles.wrapper}
    }
    &.buttonLeft {
        background: #0fa290;
        padding: 15px 25px;
        border-radius: 6px;
        box-sizing: border-box;
        align-items: center;
        display: flex;
        width: max-content;
        cursor: pointer;
    }
    &#Middle {
        background: linear-gradient(92.08deg, #0b1e13 1.15%, #123a38 99.3%);
        padding: 60px;
    }
    &.Container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &.Left {
        display: flex;
        flex-direction: column;
    }
    &.Right {
        display: flex;
        position: relative;
        width: 50%;
    }
    &.firstImage {
        display: flex;
        position: absolute;
        bottom: -60px;
        right: 115px;
        z-index: 10;
        width: 75%;
    }
    &.secondImage {
        display: flex;
        position: absolute;
        bottom: -60px;
        right: 0;
        z-index: 11;
        width: 40%;
    }
    &.Top {
        display: flex;
        flex-direction: column;
        margin-bottom: 35px;
    }
    &.std {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;
const Text = styled.p`
    padding: 0px;
    margin: 0px;
    &.btnTxt {
        font-family: "Gordita-Medium";
        font-size: 15px;
        color: #fff;
    }
    &.Title {
        font-family: "Gordita-Medium";
        color: #eeeeee;
        font-size: 25px;
        margin-bottom: 5px;
    }
    &.subTitle {
        color: #eeeeee;
        font-family: "Gordita-Regular";
        font-size: 14px;
        margin-left: 6px;
    }
`;
const Icon = styled.img`
    display: flex;
`;
const Image = styled.img`
    width: 100%;
    display: flex;
`;

export default Middle;
