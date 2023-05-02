import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../../components/context/constants";

const OtpRegModal = ({ toggleModal, setToggleModal }) => {
    const onChange = (event) => {
        const { eventCount, target, text } = event.nativeEvent;
        console.log(event.InputEvent);
    };
    return (
        <View className="Right">
            <View>
                <Text className="Heading">Enter OTP</Text>
                <Text className="subTitile">
                    We have send you a verification code to <br />
                    your <b>+91 8987 989 023</b>
                </Text>
                <View className="Input">
                    <IconContainer>
                        <Icon
                            src={
                                require("../../assets/images/phone.svg").default
                            }
                        />
                    </IconContainer>
                    <Input
                        placeholder="Enter OTP"
                        type="number"
                        maxlength="10"
                    />
                    <Text className="error-mesaage">Incorrect OTP </Text>
                </View>

                <Resend>
                    Resend OTP in <b>16s</b>
                </Resend>
            </View>
            <Button className="Btn" to="/?action=district">
                <Text className="BtnTxt">Submit</Text>
            </Button>
        </View>
    );
};
const View = styled.div`
    &.Right {
        min-width: 65%;
        padding: 75px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;

        @media all and (max-width: 640px) {
            padding: 50px 15px;
        }
        @media all and (max-width: 640px) {
            padding: 20px 25px;
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
        position: relative;
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
const Text = styled.p`
    padding: 0px;
    margin: 0px;
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
        width: 100%;
        & b {
            color: #0fa76f;
        }

        & br {
            @media all and (max-width: 980px) {
                display: none;
            }
        }
    }
    &.BtnTxt {
        font-size: 15px;
        font-family: "Gordita-Medium";
        color: #fff;
    }
    &.error-mesaage {
        font-size: 13px;
        line-height: 16px;
        color: #ff5a4f;
        position: absolute;
        bottom: -20px;
        left: 0;
    }
`;

const IconContainer = styled.div`
    width: 23px;
    aspect-ratio: 1;
    display: flex;
    overflow: hidden;
    filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.03));
`;
const Icon = styled.img`
    width: 100%;
    display: block;
`;
const Input = styled.input`
    width: -webkit-fill-available;
    font-family: "Gordita-Medium";
    font-size: 16px;
    border: 0px;
    padding: 7px 0 0 5px;

    &:focus {
        outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &input[type="number"] {
        -moz-appearance: textfield;
    }

    @media all and (max-width: 640px) {
        font-size: 13px;
    }
`;
const Button = styled(Link)`
    background: linear-gradient(127.01deg, #0fa76f -9.18%, #0f9ea7 129.96%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    cursor: pointer;
    text-decoration: none;
    margin-top: 75px;

    @media all and (max-width: 480px) {
        margin-top: 40px;
    }
`;
const Resend = styled.p`
    color: #747474;
    font-family: "Gordita-Regular";
    font-size: 13px;
    margin-top: 4px;
    margin-bottom: 0px;
    width: 100%;
    text-align: right;
    & b {
        color: #0fa76f;
    }
`;
export default OtpRegModal;
