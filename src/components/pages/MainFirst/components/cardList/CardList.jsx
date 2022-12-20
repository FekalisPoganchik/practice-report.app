import React from "react";
import "../../../style/card_list.scss";

const cardList = (props) => {
    return <div className="main__content">{props.children}</div>;
};

export default cardList;
