import React, { useContext, useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";

const PrintMedia = () => {
    const news = [
        {
            "paper-1": require("../assets/images/print-1.png"),
            "paper-2": require("../assets/images/print-2.png"),
            "paper-3": require("../assets/images/print-3.png"),
        },
        {
            "paper-1": require("../assets/images/print-1.png"),
            "paper-2": require("../assets/images/print-2.png"),
            "paper-3": require("../assets/images/print-3.png"),
        },
        // {
        //   'paper-1': require('../assets/images/print-1.png'),
        //   // 'paper-2': require('../assets/images/print-2.png'),
        //   // 'paper-3': require('../assets/images/print-3.png'),
        // },
        // {
        //   'paper-1': require('../assets/images/print-1.png'),
        //   // 'paper-2': require('../assets/images/print-2.png'),
        //   // 'paper-3': require('../assets/images/print-3.png'),
        // },
        // // {
        // //   'paper-1': require('../assets/images/print-1.png'),
        // //   // 'paper-2': require('../assets/images/print-2.png'),
        // //   // 'paper-3': require('../assets/images/print-3.png'),
        // // },
        // {
        //   // 'paper-1': require('../assets/images/print-1.png'),
        //   'paper-2': require('../assets/images/print-2.png'),
        //   'paper-3': require('../assets/images/print-3.png'),
        // },
    ];
    return (
        <View className="PrintMedia">
            <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce={true}
            >
                <View className="Wrapper mediaContainer">
                    <Text className="Title">
                        <Span>Talrop in</Span> Print Media
                    </Text>
                    <Text className="description">
                        To aid the development of a strong startup ecosystem in
                        our state, Talrop has designed four projects.
                    </Text>
                    <View className="container">
                        {news.map((item) => {
                            console.log(item.length, "Hi");
                            return (
                                <View className="contentContainer">
                                    <View
                                        className={
                                            item["paper-1"]
                                                ? "item-1 item"
                                                : "item-1 item margin-0"
                                        }
                                    >
                                        <Image src={item["paper-1"]} />
                                    </View>
                                    <View
                                        className={
                                            item["paper-2"]
                                                ? "item"
                                                : " item margin-0"
                                        }
                                    >
                                        <Image src={item["paper-2"]} />
                                    </View>
                                    <View
                                        className={
                                            item["paper-3"]
                                                ? "item"
                                                : " item margin-0"
                                        }
                                    >
                                        <Image src={item["paper-3"]} />
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </AnimationOnScroll>
        </View>
    );
};
const View = styled.div`
    &.Wrapper {
        ${Styles.wrapper}
    }
    &.mediaContainer {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 100px 0px;
    }
    &.PrintMedia {
        background: #f1f7ef;
    }
    &.contentContainer {
        display: grid;
        grid-template-columns: auto auto;
    }
    &.item-1 {
        grid-row: span 2;
    }
    &.item {
        display: flex;
        overflow: hidden;
        border-radius: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        height: max-content;
    }
    &.container {
        display: flex;
        flex-direction: row;
        overflow: scroll;
        width: 80%;
    }
    &.contentBox {
        display: flex;
        width: 50%;
    }
    &.margin-0 {
        margin-right: 0px;
    }
`;
const Text = styled.p`
    padding: 0px;
    margin: 0px;
    &.Title {
        font-size: 22px;
        font-family: "Gordita-Medium";
        margin-bottom: 10px;
    }
    &.description {
        color: #747474;
        font-family: "Gordita-Regular";
        font-size: 15px;
        width: 35%;
        margin-bottom: 25px;
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
const Image = styled.img`
    width: 100%;
`;
export default PrintMedia;
