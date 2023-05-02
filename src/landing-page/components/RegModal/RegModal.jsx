import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../../components/context/constants";

import MobileRegModal from "./MobileRegModal";
import OtpRegModal from "./OtpRegModal";
import DistrictRegModal from "./DistrictRegModal";
import LocalBodyRegModal from "./LocalBodyRegModal";
import WardRegModal from "./WardRegModal";
import StudentDetailsRegModal from "./StudentDetailsRegModal";

const RegModal = ({ toggleModal, setToggleModal, setSuccessModal }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const action = searchParams.get("action");

    return (
        <>
            {toggleModal ? (
                <View className="container">
                    <View className="contentBox">
                        <View className="Left">
                            <View className="Top">
                                <LogoConatiner>
                                    <Logo
                                        src={
                                            require("../../assets/icons/logo.svg")
                                                .default
                                        }
                                    />
                                </LogoConatiner>
                                <Text className="Title">
                                    “One Creator from One Ward”
                                </Text>
                            </View>

                            <View className="LeftImage">
                                <Image
                                    src={
                                        require("../../assets/images/modal.svg")
                                            .default
                                    }
                                />
                            </View>
                        </View>

                        {action === "phone" ? (
                            <MobileRegModal />
                        ) : action === "otp" ? (
                            <OtpRegModal />
                        ) : action === "district" ? (
                            <DistrictRegModal />
                        ) : action === "local-body" ? (
                            <LocalBodyRegModal />
                        ) : action === "ward" ? (
                            <WardRegModal />
                        ) : action === "student-details" ? (
                            <StudentDetailsRegModal
                                setSuccessModal={setSuccessModal}
                                setToggleModal={setToggleModal}
                            />
                        ) : null}

                        <View
                            className="Close"
                            onClick={() => {
                                setToggleModal(false);
                                navigate("/");
                            }}
                        >
                            <Close
                                src={
                                    require("../../assets/icons/close.svg")
                                        .default
                                }
                            />
                        </View>
                    </View>
                </View>
            ) : null}
        </>
    );
};
const View = styled.div`
    &.Wrapper {
        ${Styles.wrapper}
    }
    &.container {
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        display: flex;
        flex: 1;
        height: 100%;
        aspect-ratio: 1;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 1000;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    &.contentBox {
        background: #fff;
        width: 60%;
        min-height: 55%;
        border-radius: 15px;
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;

        @media all and (max-width: 1080px) {
            width: 75%;
        }

        @media all and (max-width: 768px) {
            width: 90%;
        }

        @media all and (max-width: 480px) {
            flex-direction: column;
        }
    }
    &.Close {
        display: flex;
        background: #ffffff;
        box-shadow: 0px 4px 29px rgb(0 0 0 / 14%);
        border-radius: 33px;
        padding: 10px;
        position: absolute;
        top: 0;
        right: 0;
        top: -15px;
        right: -15px;
        cursor: pointer;
    }
    &.Left {
        min-width: 35%;
        /* height: 100%; */
        background: linear-gradient(
            180deg,
            #edf5eb 0%,
            rgba(237, 245, 235, 0.8) 100%
        );
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;

        @media all and (max-width: 480px) {
            border-bottom-left-radius: 0;
        }
    }
    &.Right {
        width: 65%;
        padding: 75px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &.LeftImage {
        position: absolute;
        bottom: 0px;
        display: flex;

        @media all and (max-width: 480px) {
            display: none;
        }
    }
    &.Top {
        padding-top: 50px;
        display: flex;
        height: max-content;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media all and (max-width: 480px) {
            padding: 20px 0;
        }
    }
    &.Input {
        display: flex;
        align-items: center;
        background: #ffffff;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        padding: 10px;
        margin-top: 25px;
    }
    &.Btn {
        background: linear-gradient(127.01deg, #0fa76f -9.18%, #0f9ea7 129.96%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        cursor: pointer;
    }
`;
const Close = styled.img`
    display: flex;
    width: 15px;
    height: 15px;
`;
const Text = styled.p`
    padding: 0px;
    margin: 0px;
    &.Title {
        background: linear-gradient(97.32deg, #78bc6d 2.85%, #0ca3ac 96.04%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-family: "Gordita-Medium";
        margin-top: 15px;
        font-size: 20px;
        width: 65%;
        text-align: center;
    }
    &.Heading {
        font-size: 20px;
        color: #0a0a0a;
        font-family: "Gordita-Medium";
    }
    &.subTitile {
        color: #747474;
        font-family: "Gordita-Regular";
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 60%;
    }
    &.IN {
        font-family: "Gordita-Medium";
        font-size: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0px 3px 0px 10px;
    }
    &.BtnTxt {
        font-size: 15px;
        font-family: "Gordita-Medium";
        color: #fff;
    }
`;
const Image = styled.img`
    width: 100%;
`;
const LogoConatiner = styled.div`
    display: flex;
    height: max-content;
    width: 35%;
    justify-content: center;
`;
const Logo = styled.img`
    width: 100%;
`;
const InputField = styled.input`
    font-family: "gordita_medium";
    width: 81%;
    color: #000;
    font-size: 17px;
    padding-left: 5px;
    caret-color: #5cc66a;
    @media (max-width: 640px) {
        width: 70%;
        ::placeholder {
            font-size: 14px;
        }
    }
    @media (max-width: 480px) {
        width: 80%;
        font-size: 16px;
        ::placeholder {
            font-size: 12px;
        }

        // transform: scale(0.9375);
        // transform-origin: left top;
    }
    @media (max-width: 380px) {
        font-size: 14px;
    }
`;

const IconContainer = styled.div`
    width: 35px;
    aspect-ratio: 1;
    border-radius: 50px;
    display: flex;
    overflow: hidden;
    border: 1px solid #e3e3e3;
    filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.03));
    border-radius: 60px;
`;
const Icon = styled.img`
    width: 100%;
`;
const Input = styled.input`
    width: -webkit-fill-available;
    font-family: "Gordita-Medium";
    font-size: 16px;
    border: 0px;

    &:focus {
        outline: none;
    }
`;
export default RegModal;
