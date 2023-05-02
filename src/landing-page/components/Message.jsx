import React, { useContext, useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";
import VideoModal from "./include/VideoModal";

import $ from "jquery";

const Messages = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };
    const [play_url, setPlayUrl] = useState("");
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const messages = [
        {
            id: 1,
            img: require("../assets/images/message.png"),
        },
        {
            img: require("../assets/images/message.png"),
            id: 2,
        },
        {
            img: require("../assets/images/message.png"),
            id: 3,
        },
        {
            id: 4,
            img: require("../assets/images/message.png"),
        },
        {
            id: 1,
            img: require("../assets/images/message.png"),
        },
        {
            img: require("../assets/images/message.png"),
            id: 2,
        },
        {
            img: require("../assets/images/message.png"),
            id: 3,
        },
        {
            id: 4,
            img: require("../assets/images/message.png"),
        },
    ];

    useEffect(() => {
        if (toggleModal) {
            $("html").addClass("modal-enabled");
        } else {
            $("html").removeClass("modal-enabled");
        }
    }, [toggleModal]);

    return (
        <View className="message">
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
                <View className="Wrapper mediaContainer">
                    <Text className="Title">
                        <Span>Greeting</Span> Messages
                    </Text>
                    <Text className="description">
                        To aid the development of a strong startup ecosystem in
                        our state, Talrop has designed four projects.
                    </Text>
                    <View className="message-Container">
                        {messages.map((item) => {
                            return (
                                <View className="component">
                                    <Image
                                        className="messager"
                                        src={item.img}
                                    />
                                    <View className="tag">
                                        <Playbutton
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
                                            <Play
                                                src={
                                                    require("../assets/icons/play.svg")
                                                        .default
                                                }
                                            />
                                            <Hover
                                                src={
                                                    require("../assets/icons/play-2.svg")
                                                        .default
                                                }
                                            />
                                        </Playbutton>
                                        <SubTag>
                                            <Name>Jayasuriya</Name>
                                            <Designation>Actor</Designation>
                                            <Circle>
                                                <View className="round"></View>
                                            </Circle>
                                        </SubTag>
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

const Circle = styled.div`
    display: flex;
    width: max-content;
    padding: 20px;
    background: rgba(255, 252, 243, 0.8);
    border-radius: 50px;
    position: absolute;
    bottom: -120px;
    right: -100px;
    z-index: 1000;
    transition: 0.4s;
    transition-timing-function: ease-out;
`;
const SubTag = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 35px 15px 15px;
    border-radius: 12px;

    transition: 1s;
    transition-timing-function: ease-out;
`;
const Name = styled.p`
    padding: 0px;
    margin: 0px;
    font-size: 18px;
    color: #000;
    font-family: "Gordita-Medium";
    margin-bottom: 2px;
`;
const Designation = styled.p`
    padding: 0px;
    margin: 0px;
    font-size: 15px;
    font-family: "Gordita-Regular";
    color: #707070;
`;
const Playbutton = styled.div`
    display: flex;
    position: absolute;
    padding: 16px 15px;
    padding-left: 17px;
    background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
    box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
    border-radius: 50px;
    cursor: pointer;
    top: -100px;
    left: 15px;
    width: max-content;
    height: max-content;
    margin: auto;
    bottom: 0px;
    z-index: 999;
`;
const Play = styled.img`
    width: 20px;
    height: 20px;
    display: flex;
`;
const Hover = styled.img`
    width: 20px;
    height: 20px;
    display: none;
`;
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
    &.message {
        background: #fff;
    }

    &.component {
        display: flex;
        width: 24%;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    &.message-Container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    &.tag {
        display: flex;
        position: absolute;
        width: 78%;
        bottom: 15px;
        background: #fff;
        margin: 0 auto;
        right: 0px;
        left: 0px;
        border-radius: 12px;
        text-align: left;
        z-index: 999;
        &:hover {
            ${Circle} {
                bottom: -35px;
                right: -30px;
            }
            ${SubTag} {
                background: linear-gradient(
                    97.32deg,
                    #78bc6d 2.85%,
                    #0ca3ac 96.04%
                );
            }
            ${Name} {
                color: #fff;
            }
            ${Designation} {
                color: #fff;
            }
            ${Playbutton} {
                background: #fff;
            }
            ${Play} {
                display: none;
            }
            ${Hover} {
                display: flex;
            }
        }
    }
    &.circle-C {
        display: flex;
        position: absolute;
        width: 78%;
        bottom: -15px;
        background: #fff;
        margin: 0 auto;
        right: -55px;
        left: 0px;
        padding: 80px 15px 15px;
        border-radius: 12px;
        text-align: left;
        background: transparent;
        overflow: hidden;
    }

    &.round {
        border-radius: 50px;
        display: flex;
        width: 50px;
        aspect-ratio: 1;
        background: #76ba6e;
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
    &.Name {
        font-size: 18px;
        color: #000;
        font-family: "Gordita-Medium";
        margin-bottom: 2px;
    }
    &.designation {
        font-size: 15px;
        font-family: "Gordita-Regular";
        color: #707070;
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
export default Messages;
