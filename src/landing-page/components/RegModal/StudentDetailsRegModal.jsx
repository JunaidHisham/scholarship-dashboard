import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StudentDetailsRegModal = ({ setSuccessModal, setToggleModal }) => {
    const [isClassModal, setClassModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState("");
    const navigate = useNavigate();
    const [classList] = useState([
        {
            id: 1,
            class: "5",
        },
        {
            id: 2,
            class: "6",
        },
        {
            id: 3,
            class: "7",
        },
        {
            id: 4,
            class: "8",
        },
        {
            id: 5,
            class: "9",
        },
        {
            id: 6,
            class: "10",
        },
        {
            id: 7,
            class: "+1",
        },
        {
            id: 8,
            class: "+2",
        },
    ]);
    const renderClass = () => {
        return (
            <SchoolMainContainer>
                {classList.map((studentClass) => (
                    <SchoolSingleContainer
                        onClick={() => {
                            setSelectedClass(studentClass.class);
                            setClassModal(false);
                        }}
                        className={
                            selectedClass === studentClass.class && "active"
                        }
                    >
                        {studentClass.class}
                    </SchoolSingleContainer>
                ))}
            </SchoolMainContainer>
        );
    };
    return (
        <View className="Right">
            <View>
                <Text className="Heading">Enter Student Details</Text>
                <Text className="subTitile">
                    Fill the student details for scholarship.
                </Text>
                <View className="Input">
                    <Label for="name">Student name*</Label>
                    <Input placeholder="Student name" type="text" id="name" />
                </View>
                <View className="Input">
                    <Label for="school">School name*</Label>
                    <Input
                        placeholder="Enter your school name"
                        type="text"
                        id="school"
                    />
                </View>
                <View className="class-container">
                    <View
                        className="Input class-div"
                        onClick={() => setClassModal(!isClassModal)}
                    >
                        {isClassModal && renderClass()}
                        <Label for="school">Class*</Label>
                        <View className="class">
                            <Text className="select">
                                {selectedClass
                                    ? selectedClass
                                    : window.innerWidth < 640
                                    ? "Class"
                                    : "Select Class"}
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
                    <View className="Input">
                        <Label for="division">Division</Label>
                        <Input
                            placeholder={
                                window.innerWidth < 640
                                    ? "Division"
                                    : "Enter Division"
                            }
                            type="text"
                            id="division"
                        />
                    </View>
                </View>
            </View>
            <Button
                className="Btn"
                onClick={() => {
                    navigate("/");
                    setToggleModal(false);
                    setSuccessModal(true);
                }}
            >
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
        background: #ffffff;
        margin-top: 25px;
        position: relative;

        &.class-div {
            cursor: pointer;
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
    &.class-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        & .Input {
            width: 48%;
        }
    }
    &.class {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Gordita-Medium";
        font-size: 14px;
        color: #747474;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        padding: 10px;
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

const IconContainer = styled.div`
    width: 18px;
    height: 18px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
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
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border: 1px solid #4ca473;
    }

    @media all and (max-width: 640px) {
        font-size: 13px;
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
const SchoolMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 3px;
    position: absolute;
    top: 62px;
    left: 0;
    width: 100%;
    height: 200px;
    max-height: 300px;
    background: #ffffff;
    box-shadow: -4px 4px 42px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow-y: scroll;
    z-index: 1;
`;
const SchoolSingleContainer = styled.div`
    padding: 12px 24px;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    color: #6b6b6b;
    cursor: pointer;

    &:last-child {
        border-bottom: 0;
    }

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
    @media all and (max-width: 640px) {
        font-size: 13px;
    }
`;
const Label = styled.label`
    font-size: 14px;
    color: #6b6b6b;
`;
export default StudentDetailsRegModal;
