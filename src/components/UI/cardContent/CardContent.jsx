import React, { useState } from "react";
import Arrow from "../../../icon/Arrow";
import Book from "../../../icon/Book";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./card_content.scss";

const CardContent = ({ header, descr }) => {
    const [status, setStatus] = useState(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
            navigator.userAgent
        )
            ? false
            : true
    );

    const checkMobile = () => {};

    checkMobile();

    const switcher = () => {
        setStatus(!status);
    };

    const renderItem = (arr) => {
        let clazz = status ? "card_content__wrap" : "card_content__wrap_hidden";

        let count = 0;
        const items = arr.map((i) => {
            let logo = "";
            let arrow = "";
            if (i.slice(0, 3) === "svg") {
                arrow = <Arrow />;
                i = i.slice(3);
            }
            if (i.slice(0, 3) === "log") {
                logo = <Book />;
                i = i.slice(3);
            }
            if (i.slice(0, 3) === "ita") {
                i = i.slice(3);
                i = <span>{i}</span>;
            }

            return (
                <div
                    className={"card_content__item"}
                    key={count++ + Date.now()}
                >
                    <div className={"card_content__item_content"}>
                        <div className="card_content__item_content__img">
                            {logo}
                        </div>
                        <p className="card_content__item_content__text">
                            {arrow}
                            {i}
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <CSSTransition timeout={500} classNames="post">
                <div className={clazz}>{items}</div>
            </CSSTransition>
        );
    };
    const items = renderItem(descr);

    let clazzbtn = status
        ? "card_content__footer_btn_active"
        : "card_content__footer_btn";

    return (
        <section className="card_content">
            <header className="card_content__header">{header}</header>
            <TransitionGroup>{status ? items : null}</TransitionGroup>
            <div className={"card_content__footer"}>
                <button onClick={switcher} className={clazzbtn}>
                    {status ? "Прочитано" : "Прочитать"}
                </button>
            </div>
        </section>
    );
};

export default CardContent;
