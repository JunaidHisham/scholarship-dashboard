import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../../components/context/constants";

const LocalBodyRegModal = () => {
    const [selectedLoclBody, setSelectedLocalBody] = useState("");
    const [localBodyList, setLocalBodyList] = useState([
        {
            id: 1,
            name: "Corporation",
        },
        {
            id: 2,
            name: "Panchayath",
        },
        {
            id: 3,
            name: "Municipality",
        },
    ]);

    return (
        <View className="Right">
            <IconContainer to="/?action=district">
                <Icon
                    src={require("../../assets/images/arrow-left.svg").default}
                />
            </IconContainer>
            <View>
                <Text className="Heading">Select Your Local Body</Text>
                <Text className="subTitile">
                    Please input your local body for connecting our One Creator
                    from One Ward programme{" "}
                </Text>
                {localBodyList.map((localbody) => (
                    <View
                        className={
                            selectedLoclBody === localbody.name
                                ? "Input active"
                                : "Input"
                        }
                        onClick={() => setSelectedLocalBody(localbody.name)}
                    >
                        <View className="round">
                            <View className="round-bg"></View>
                        </View>
                        <Text className="select">{localbody.name}</Text>
                    </View>
                ))}
            </View>
            <Button className="Btn" to="/?action=ward">
                <Text className="BtnTxt">Next</Text>
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
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        margin-bottom: 10px;
        cursor: pointer;

        &.active {
            border: 2px solid #4ca473;

            & .round-bg {
                background: #4ca473;
            }

            & .round {
                border: 1px solid #4ca473;
            }
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
    &.round {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid #9d9d9d;
        margin-right: 10px;
        overflow: hidden;
        padding: 2px;
    }

    &.round-bg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
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
        margin-bottom: 25px;
        width: 100%;

        & br {
            @media all and (max-width: 768px) {
                display: none;
            }
        }
    }
    &.BtnTxt {
        font-size: 15px;
        font-family: "Gordita-Medium";
        color: #fff;
    }
    &.select {
        font-family: "Gordita-Regular";
        font-size: 15px;
        width: 100%;
        padding-top: 5px;
        color: ${(p) => (p.selectedDistrict ? "#494A4A" : "#6B6B6B")};
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
    margin-top: 25px;

    @media all and (max-width: 480px) {
        margin-top: 40px;
    }
`;
const IconContainer = styled(Link)`
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #d4d4d4;
    filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.03));
    box-sizing: border-box;
    margin-bottom: 20px;
    cursor: pointer;
`;
const Icon = styled.img`
    width: 100%;
    display: block;
`;
export default LocalBodyRegModal;
