import React, { useState, useEffect } from "react";
import "./count_down.scss";

const CountDown = ({ finishTime }) => {
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        const diff = (finishTime - new Date()) / 1000;
        if (diff < 0) return;
        setDiff([
            Math.floor(diff / 86400),
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60),
        ]);
    }, [tick, finishTime]);

    useEffect(() => {
        const timerID = setInterval(() => setTick(!tick), 1000);
        return () => clearInterval(timerID);
    }, [tick]);

    return (
        <div className="wrapper_timer">
            <div className="wrapper_timer__item">
                {diffDays.toString().padStart(2, "0")}
                <span>Дней</span>
            </div>
            <div className="wrapper_timer__item">
                {diffH.toString().padStart(2, "0")}
                <span>Часов</span>
            </div>
            <div className="wrapper_timer__item">
                {diffM.toString().padStart(2, "0")}
                <span>Минут</span>
            </div>
            <div className="wrapper_timer__item">
                {diffS.toString().padStart(2, "0")}
                <span>Секунд</span>
            </div>
        </div>
    );
};

export default CountDown;
