import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../../components/context/constants";

const WardRegModal = () => {
    const [isWardModal, setWardModal] = useState(false);
    const [selectedWard, setSelectedWard] = useState("");
    const [wardList, setWardList] = useState([
        {
            id: 1,
            name: "Edavannapara ",
        },
        {
            id: 2,
            name: "Edavanna ",
        },
        {
            id: 3,
            name: "Edavayoor",
        },
        {
            id: 4,
            name: "Edavamalakunn",
        },
        {
            id: 5,
            name: "Edavamala",
        },
    ]);
    const renderWards = () => {
        return (
            <WardMainContainer>
                {wardList.map((ward) => (
                    <WardSingleContainer
                        onClick={() => {
                            setSelectedWard(ward.name);
                            setWardModal(false);
                        }}
                        className={selectedWard === ward.name && "active"}
                    >
                        {ward.name}
                    </WardSingleContainer>
                ))}
            </WardMainContainer>
        );
    };
    return (
        <View className="Right">
            <IconContainer to="/?action=local-body">
                <Icon
                    src={require("../../assets/images/arrow-left.svg").default}
                />
            </IconContainer>
            <View>
                <Text className="Heading">Enter Your Ward</Text>
                <Text className="subTitile">
                    Please input your ward code for connecting our One Creator
                    from One Ward programme
                </Text>
                <View className="Input">
                    {isWardModal && renderWards()}

                    <Input
                        placeholder="Enter your ward code/ward name"
                        type="text"
                    />
                </View>
            </View>
            <Button className="Btn" to="/?action=student-details">
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
        margin: 25px 0;
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
const Input = styled.input`
    width: -webkit-fill-available;
    font-family: "Gordita-Medium";
    font-size: 14px;
    border: 0px;
    color: #747474;

    &:focus {
        outline: none;
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
`;
const WardMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 3px;
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    height: 300px;
    max-height: 300px;
    background: #ffffff;
    box-shadow: -4px 4px 42px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow-y: scroll;
`;
const WardSingleContainer = styled.div`
    padding: 20px 24px;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    color: #6b6b6b;
    cursor: pointer;

    &.active {
        background: #e4f8ed;
        color: #4ca473;
        border-radius: 5px;
    }

    &:hover {
        background: #e4f8ed;
        color: #4ca473;
        border-radius: 5px;
    }
`;
export default WardRegModal;
