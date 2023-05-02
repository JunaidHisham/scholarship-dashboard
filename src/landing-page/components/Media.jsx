import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";
import VideoPlayer from "../../components/applications/video-player/src/VideoPlayer";
import VideoModal from "./include/VideoModal";
import { AnimationOnScroll } from "react-animation-on-scroll";

import $ from "jquery";

const Media = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };
    const [play_url, setPlayUrl] = useState("");
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const mediaContent = [
        {
            id: 2,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3wGU98s",
        },
        {
            id: 1,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3WJYZwl",
        },

        {
            id: 2,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3wGU98s",
        },
        {
            id: 1,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3WJYZwl",
        },
        {
            id: 1,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3WJYZwl",
        },
        {
            id: 2,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3wGU98s",
        },
        {
            id: 1,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3WJYZwl",
        },
        {
            id: 2,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3wGU98s",
        },
        {
            id: 2,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3wGU98s",
        },
        {
            id: 1,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3WJYZwl",
        },
        {
            id: 2,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3wGU98s",
        },
        {
            id: 1,
            play_url:
                "https://player.vimeo.com/external/764557363.m3u8?s=009ead661977487ee9eeb060aeeaeecd908dbf78",
            thumbnail: "https://bit.ly/3WJYZwl",
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
        <View>
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
                        <Span>Talrop in</Span> Media
                    </Text>
                    <Text className="description">
                        To aid the development of a strong startup ecosystem in
                        our state, Talrop has designed four projects.
                    </Text>
                    <View className="container">
                        {mediaContent.map((item) => {
                            return (
                                <View className="component">
                                    <Image src={item.thumbnail} />
                                    <View
                                        className="Playbutton"
                                        onClick={() => {
                                            setPlayUrl(item.play_url);
                                            setThumbnail(item.thumbnail);
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
    &.container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        flex-wrap: wrap;
    }
    &.component {
        display: flex;
        width: 24%;
        aspect-ratio: 1.5;
        overflow: hidden;
        box-sizing: border-box;
        margin-top: 20px;
        border-radius: 10px;
        position: relative;
        margin-right: 1.3%;
        &:nth-child(4n) {
            margin-right: 0;
        }
    }
    &.Playbutton {
        display: flex;
        position: absolute;
        bottom: 15px;
        right: 15px;
        padding: 16px 15px;
        padding-left: 17px;
        background: #0bbe61;
        box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
        border-radius: 50px;
        cursor: pointer;
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
        margin-bottom: 20px;
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
    &.play {
        width: 17px;
        height: 17px;
    }
`;
export default Media;
