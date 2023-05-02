import React, { useContext, useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import { Styles } from "../../components/context/constants";

const Footer = () => {
    return (
        <View className="Footer">
            <AnimationOnScroll
                animateIn="animate__fadeInBottomLeft"
                animateOnce={true}
            >
                <View className="Top">
                    <View className="TopContainer Wrapper">
                        <View className="TopContent">
                            <Text className="Title">
                                കേരളം{" "}
                                <Span>
                                    കൺസ്യൂമർ സ്‌റ്റേറ്റിൽ നിന്നും ക്രിയേറ്റർ
                                    സ്‌റ്റേറ്റിലേക്ക്
                                </Span>{" "}
                                മാറ്റാൻ സ്കൂൾ വിദ്യാർത്ഥികളെ ക്രിയേറ്റർ ആക്കാൻ
                            </Text>
                            <View className="buttonLeft">
                                <Text className="btnTxt">
                                    Apply for Scholarship
                                </Text>
                            </View>
                        </View>
                        <Image
                            className="TopImage"
                            src={require("../assets/images/footer.svg").default}
                        />
                    </View>
                </View>
            </AnimationOnScroll>

            <View className="Bottom">
                <View className="BottomContainer Wrapper">
                    <View className="equal">
                        <Text className="footerText">
                            © 2023, Steyp Private Limited. All rights reserved
                        </Text>
                    </View>

                    <View className="equal">
                        <View className="logoContainer">
                            <Logo
                                src={
                                    require("../assets/icons/logo.svg").default
                                }
                            />
                        </View>
                    </View>
                    <View className="equal">
                        <View className="iconContainer">
                            <Ul>
                                <Li>
                                    <Button href="#" target="_blank">
                                        <Icon
                                            src={
                                                require("../assets/icons/instagram.svg")
                                                    .default
                                            }
                                        />
                                    </Button>
                                </Li>
                                <Li>
                                    <Button href="#" target="_blank">
                                        <Icon
                                            src={
                                                require("../assets/icons/facebook.svg")
                                                    .default
                                            }
                                        />
                                    </Button>
                                </Li>
                                <Li>
                                    <Button href="#" target="_blank">
                                        <Icon
                                            src={
                                                require("../assets/icons/twitter.svg")
                                                    .default
                                            }
                                        />
                                    </Button>
                                </Li>
                                <Li>
                                    <Button href="#" target="_blank">
                                        <Icon
                                            src={
                                                require("../assets/icons/linkedin.svg")
                                                    .default
                                            }
                                        />
                                    </Button>
                                </Li>
                                <Li>
                                    <Button href="#" target="_blank">
                                        <Icon
                                            src={
                                                require("../assets/icons/youtube.svg")
                                                    .default
                                            }
                                        />
                                    </Button>
                                </Li>
                            </Ul>
                        </View>
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
    &.Footer {
        display: flex;
        flex-direction: column;
        background: #011409;
        align-items: center;
    }
    &.Top {
        padding: 50px 0px;
    }
    &.Bottom {
        display: flex;
        width: 100%;
        padding: 30px;
        border-top: 1px solid #3c3c3c;
    }
    &.TopContainer {
        display: flex;
        flex-direction: column;
        background: #ecf4ea;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        width: 90%;
        padding: 50px 0;
    }
    &.TopContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        text-align: center;
    }
    &.Bottom {
        display: flex;
        width: 100%;
        padding: 30px 0px;
    }
    &.BottomContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    &.equal {
        display: flex;
        flex: 0.3;
    }
    &.logoContainer {
        display: flex;
        width: 25%;
        margin: 0 auto;
    }
    &.iconContainer {
        display: flex;
        width: 100%;
        justify-content: flex-end;
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
        font-family: "Indulekha-Bold";
        font-size: 25px;
        color: #0a0a0a;
        margin-bottom: 20px;
        z-index: 999;
    }
    &.footerText {
        color: #fff;
        font-size: 14px;
        font-family: "Gordita-Regular";
    }
`;
const Image = styled.img`
    &.TopImage {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30%;
    }
`;
const Span = styled.p`
    padding: 0px;
    margin: 0px;
    display: inline-flex;
    color: #0fa290;
`;
const Logo = styled.img``;
const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    padding-left: 0px;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
`;
const Li = styled.li`
    display: flex;
    width: 18px;
    height: 15px;
    margin-right: 10px;
    cursor: pointer;
`;
const Icon = styled.img`
    display: flex;
    width: 100%;
`;
const Button = styled.a`
    display: flex;
    width: 100%;
`;
export default Footer;
