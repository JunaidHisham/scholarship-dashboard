import React from "react";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Media from "../components/Media";
import Messages from "../components/Message";
import Middle from "../components/Middle";
import PrintMedia from "../components/PrintMedia";
import Spotlight from "../components/Spotlight";
import VideoSection from "../components/VideoSection";

const Home = () => {
    return (
        <View>
            <Spotlight />

            <Course />
            <VideoSection />
            <Media />
            <Middle />
            <PrintMedia />
            <Messages />
            <Footer />
        </View>
    );
};
const View = styled.div`
    &.Wrapper {
        ${Styles.wrapper}
    }
`;

export default Home;
