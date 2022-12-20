import React from "react";
import Pdf from "../../../icon/Pdf";
import Word from "../../../icon/Word";
import "./card.scss";

const Card = ({ header, arrayFiles }) => {
    function renderItems(arr) {
        const items = arr.map((obj) => {
            return (
                <a
                    href={obj.url}
                    download
                    target="_blank"
                    rel="noreferrer"
                    key={obj.url + Date.now()}
                >
                    {obj.nameFiles.slice(-3) === "ocx" ? <Word /> : <Pdf />}
                    {/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                        navigator.userAgent
                    )
                        ? `${obj.nameFiles.slice(0, 20)}...`
                        : obj.nameFiles}
                </a>
            );
        });

        return <li>{items}</li>;
    }

    const items = renderItems(arrayFiles);

    return (
        <section className="card">
            <header className="card__header">{header}</header>
            <div className="card__downloads">
                <div className="card__downloads__files">
                    <span>Файлы</span>
                    <ol>{items}</ol>
                </div>
            </div>
        </section>
    );
};

export default Card;
