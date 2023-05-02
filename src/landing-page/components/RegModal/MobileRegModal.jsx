import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../../components/context/constants";

const MobileRegModal = () => {
    const onChange = (event) => {
        const { eventCount, target, text } = event.nativeEvent;
        console.log(event.InputEvent);
    };
    return (
        <View className="Right">
            <View>
                <Text className="Heading">Enter Your Phone</Text>
                <Text className="subTitile">
                    Select your country code and enter your <br /> phone number.
                </Text>
                <View className="Input">
                    <IconContainer>
                        <Icon src={require("../../assets/images/india.png")} />
                    </IconContainer>
                    <Text className="IN">+91</Text>
                    <Input
                        placeholder="Enter phone number"
                        type="number"
                        maxlength="10"
                    />
                    <Text className="error-mesaage">
                        Enter valid phone number
                    </Text>
                </View>
            </View>
            <Button className="Btn" to="/?action=otp">
                <Text className="BtnTxt">Get an OTP</Text>
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

        & br {
            @media all and (max-width: 768px) {
                display: none;
            }
        }
    }
    &.IN {
        font-family: "Gordita-Medium";
        font-size: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0px 3px 0px 10px;
        @media all and (max-width: 640px) {
            font-size: 12px;
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
export default MobileRegModal;
