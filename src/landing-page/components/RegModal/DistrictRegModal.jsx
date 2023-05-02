import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styles } from "../../../components/context/constants";

const DistrictRegModal = () => {
    const [isDistrictModal, setDistrictModal] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [districtList, setDistricList] = useState([
        {
            id: 1,
            name: "Thiruvananthapuram",
        },
        {
            id: 2,
            name: "Kollam",
        },
        {
            id: 3,
            name: "Pathanamthitta",
        },
        {
            id: 4,
            name: "Alappuzha",
        },
        {
            id: 5,
            name: "Kottayam",
        },
        {
            id: 6,
            name: "Idukki",
        },
        {
            id: 7,
            name: "Ernakulam",
        },
        {
            id: 8,
            name: "Thrissur",
        },
        {
            id: 9,
            name: "Palakkad",
        },
        {
            id: 10,
            name: "Malappuram",
        },
        {
            id: 11,
            name: "Kozhikode",
        },
        {
            id: 12,
            name: "Wayanad",
        },
        {
            id: 13,
            name: "Kannur",
        },
        {
            id: 14,
            name: "Kasargod",
        },
    ]);
    const renderDistricts = () => {
        return (
            <DistrictMainContainer>
                {districtList.map((district) => (
                    <DistrictSingleContainer
                        onClick={() => setSelectedDistrict(district.name)}
                        className={
                            selectedDistrict === district.name && "active"
                        }
                    >
                        {district.name}
                    </DistrictSingleContainer>
                ))}
            </DistrictMainContainer>
        );
    };
    return (
        <View className="Right">
            <View>
                <Text className="Heading">Select Your District</Text>
                <Text className="subTitile">
                    Please input your district for connecting our One Creator
                    from One Ward programme{" "}
                </Text>
                <View
                    className="Input"
                    onClick={() => setDistrictModal(!isDistrictModal)}
                    isDistrictModal={isDistrictModal}
                >
                    {isDistrictModal && renderDistricts()}
                    <Text
                        className="select"
                        selectedDistrict={selectedDistrict}
                    >
                        {selectedDistrict
                            ? selectedDistrict
                            : "Select Your District"}
                    </Text>
                    <IconContainer>
                        <Icon
                            src={
                                require("../../assets/images/down-arrow.svg")
                                    .default
                            }
                        />
                    </IconContainer>
                </View>
            </View>
            <Button className="Btn" to="/?action=local-body">
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
            padding: 35px 25px 20px;
        }
    }
    &.Input {
        display: flex;
        align-items: center;
        background: #ffffff;
        /* border: 1px solid #d9d9d9; */
        border: ${(p) =>
            p.isDistrictModal ? "1px solid #12A46F" : "1px solid #d9d9d9"};

        border-radius: 8px;
        padding: 13px 10px;
        margin-top: 25px;
        cursor: pointer;
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
    &.select {
        font-family: "Gordita-Regular";
        font-size: 15px;
        width: 100%;
        color: ${(p) => (p.selectedDistrict ? "#494A4A" : "#6B6B6B")};
    }
    &.BtnTxt {
        font-size: 15px;
        font-family: "Gordita-Medium";
        color: #fff;
    }
`;

const IconContainer = styled.div`
    width: 23px;
    aspect-ratio: 1;
    border-radius: 50px;
    display: flex;
    overflow: hidden;
    filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.03));
`;
const Icon = styled.img`
    width: 100%;
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
const DistrictMainContainer = styled.div`
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
    scrollbar-width: thin;

    ::-webkit-scrollbar {
        width: 4px;
        background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #9ad2af;
    }
`;
const DistrictSingleContainer = styled.div`
    padding: 20px 24px;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    color: #6b6b6b;

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
export default DistrictRegModal;
