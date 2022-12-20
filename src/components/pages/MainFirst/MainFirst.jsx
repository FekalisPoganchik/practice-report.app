import React from "react";
import Card from "../../UI/card/Card";
import CardContent from "../../UI/cardContent/CardContent";
import CardList from "./components/cardList/CardList";
import Header from "../../UI/header/Header";
import Main from "./components/main/Main";
import CountDown from "../../UI/timer/CountDown";

const MainFirst = ({ arrayFiles, finishTime }) => {
    return (
        <Main>
            <Header header={"Организация учебных и производственных практик"} />
            <CardList>
                <Card
                    header={"Учебная практика"}
                    arrayFiles={[arrayFiles[0], arrayFiles[1]]}
                />
                <Card
                    header={"Производственная практика"}
                    arrayFiles={[arrayFiles[0], arrayFiles[1]]}
                />
            </CardList>
            <CountDown finishTime={finishTime} />
        </Main>
    );
};

export default MainFirst;
