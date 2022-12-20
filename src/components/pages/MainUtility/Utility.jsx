import React, { useState } from "react";
import CardList from "./components/cardList/CardList";
import Header from "../../UI/header/Header";
import Main from "./components/main/Main";
import CountDown from "../../UI/timer/CountDown";
import MyInput from "../../UI/input/MyInput";
import "./style/utility.scss";

const Utility = ({ finishTime, setFinishTime }) => {
    const [inputValue, setInputValue] = useState("");
    const [UtilityValue, setUtilityValue] = useState("");

    const monthName = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        10: "Oct",
        11: "Now",
        12: "Dec",
    };

    const changeDate = (event) => {
        let day = event.slice(-2);
        let month = event.slice(5, 7);
        let year = event.slice(0, 4);
        month = monthName[month];
        setInputValue(event);
        setUtilityValue(new Date(`${year} ${month} ${day}`).getTime());
    };

    const confirmedDate = (value) => {
        setFinishTime(value);
        setInputValue("");
    };

    const deleteDate = () => {
        setUtilityValue(new Date().getTime() + 10);
        setFinishTime(new Date().getTime() + 10);
    };

    return (
        <Main>
            <Header header={"Утилита для контроля времени сдачи практики"} />
            <CardList>
                <div className="wrapper">
                    <CountDown finishTime={finishTime} />
                    <div className="utility_input">
                        <MyInput
                            type="date"
                            value={inputValue}
                            onChange={(event) => changeDate(event.target.value)}
                        />
                        <button
                            className="button"
                            onClick={() => {
                                confirmedDate(UtilityValue);
                            }}
                        >
                            Подтвердить
                        </button>
                        <button
                            className="button"
                            onClick={() => {
                                deleteDate();
                            }}
                        >
                            Сбросить таймер
                        </button>
                    </div>
                </div>
            </CardList>
        </Main>
    );
};

export default Utility;
