import React from "react";
import styled from "styled-components";

const SuccessModal = ({ isSuccessModal, setSuccessModal }) => {
    return (
        <>
            {isSuccessModal ? (
                <View className="container">
                    <View className="contentBox">
                        <View className="tick">
                            <Image
                                src={
                                    require("../../assets/images/success-tick.svg")
                                        .default
                                }
                            />
                        </View>
                        <Text className="Heading">Successfully Registered</Text>
                        <Text className="subTitile">
                            Your application for scholarship is successfully{" "}
                            <br />
                            registered, & Exam on <b>April 10th</b>. Thank you{" "}
                        </Text>
                        <Button
                            className="Btn"
                            onClick={() => setSuccessModal(false)}
                        >
                            <Text className="BtnTxt">Okay</Text>
                        </Button>
                    </View>
                </View>
            ) : null}
        </>
    );
};
const View = styled.div`
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
        width: 500px;
        min-height: 55%;
        border-radius: 15px;
        position: relative;
        box-sizing: border-box;
        padding: 40px;

        @media all and (max-width: 640px) {
            width: 90%;
        }
        @media all and (max-width: 480px) {
            padding: 40px 20px;
        }
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
    &.tick {
        width: 150px;
        height: 150px;
        margin: 0 auto 25px;

        @media all and (max-width: 640px) {
            width: 100px;
            height: 100px;
        }
        @media all and (max-width: 480px) {
            margin-bottom: 0;
        }
    }
`;
const Image = styled.img`
    width: 100%;
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
        font-size: 30px;
        color: #0a0a0a;
        font-family: "Gordita-Medium";
        text-align: center;
        margin-bottom: 15px;

        @media all and (max-width: 640px) {
            font-size: 24px;
        }
    }
    &.subTitile {
        color: #747474;
        font-family: "Gordita-Regular";
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        text-align: center;
        margin-bottom: 30px;

        & b {
            color: #009262;
            font-family: "gordita-medium";
        }

        & br {
            @media all and (max-width: 640px) {
                display: none;
            }
        }

        @media all and (max-width: 640px) {
            font-size: 15px;
        }
        @media all and (max-width: 480px) {
            font-size: 14px;
        }
    }
    &.BtnTxt {
        font-size: 15px;
        font-family: "Gordita-Medium";
        color: #fff;
    }
`;
const Button = styled.div`
    background: linear-gradient(127.01deg, #0fa76f -9.18%, #0f9ea7 129.96%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    cursor: pointer;
    text-decoration: none;
`;
export default SuccessModal;
