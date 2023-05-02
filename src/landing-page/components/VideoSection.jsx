import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import VideoModal from "./include/VideoModal";

import $ from "jquery";

const VideoSection = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };
    const [play_url, setPlayUrl] = useState("");
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    useEffect(() => {
        if (toggleModal) {
            $("html").addClass("modal-enabled");
        } else {
            $("html").removeClass("modal-enabled");
        }
    }, [toggleModal]);
    return (
        <View className="container">
            <VideoModal
                toggleModal={toggleModal}
                handleToggleModal={handleToggleModal}
                play_url={play_url}
                title={title}
                image={thumbnail}
            />
            <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce={true}
            >
                <View className="sectionBox">
                    <View className="subConatiner">
                        <Text className="Title">
                            “One Creator from One Ward”
                        </Text>
                        <Text className="paragraph">
                            Steyp is introducing{" "}
                            <Span>₹40 crores scholarship program</Span> to
                            transform kerala from consumer state to creator
                            state. One student from each ward of Kerala is
                            selected for this scholarship, and a total of 19498
                            students will be benefited
                        </Text>
                        <View className="Vcontainer">
                            <View>
                                <View className="component">
                                    <Image
                                        src={require("../assets/images/video.png")}
                                    />
                                    <View
                                        className="Playbutton"
                                        onClick={() => {
                                            setPlayUrl(
                                                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78"
                                            );
                                            setThumbnail(
                                                require("../assets/images/video.png")
                                            );
                                            setToggleModal(true);
                                        }}
                                    >
                                        <Image
                                            className="play"
                                            src={
                                                require("../assets/icons/play.svg")
                                                    .default
                                            }
                                        />
                                    </View>
                                    <View className="circle">
                                        <View className="round"></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </AnimationOnScroll>
        </View>
    );
};
const View = styled.div`
    &.container {
        display: flex;
        padding: 0px 35px;
        overflow: hidden;
    }
    &.sectionBox {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        background: #0b1e13;
        align-items: center;
        padding: 70px 0 0px;
        border-radius: 12px;
        position: relative;
    }
    &.subConatiner {
        display: flex;
        flex-direction: column;
        width: 52%;
        text-align: center;
    }
    &.Vcontainer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        flex-wrap: wrap;
        bottom: -40px;
        position: relative;
        border-radius: 15px;
        overflow: hidden;
    }
    &.component {
        display: flex;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 10px;
        position: relative;
        &:nth-child(4n) {
            margin-right: 0;
        }
    }
    &.Playbutton {
        display: flex;
        position: absolute;
        padding: 21px 20px;
        padding-left: 22px;
        background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
        box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
        border-radius: 50px;
        cursor: pointer;
        top: -40px;
        width: max-content;
        height: max-content;
        margin: auto;
        bottom: 0px;
        right: 0px;
        left: 0px;
    }
`;
const Text = styled.p`
    padding: 0px;
    margin: 0px;
    &.Title {
        font-family: "Gordita-Medium";
        color: #fff;
        font-size: 22px;
        margin-bottom: 10px;
    }
    &.paragraph {
        font-size: 15px;
        font-family: "Gordita-Regular";
        color: #d4d4d4;
        width: 95%;
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
    font-family: "Gordita-Medium";
`;

const Image = styled.img`
    width: 100%;
    &.play {
        width: 24px;
        height: 24px;
    }
`;

export default VideoSection;
