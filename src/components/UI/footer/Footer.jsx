import React from "react";
import Logo from "../../../icon/Logo";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div className="footer__wrap_left">
                    <Logo />
                </div>
                <div className="footer__wrap_right">
                    <span>Автор - Бакланова Елена Сергеевна</span>
                    <span>
                        <a
                            target={"_blank"}
                            rel={"noreferrer"}
                            href="https://github.com/FekalisPoganchik"
                        >
                            Администратор - Лебедев Игорь Владимирович
                        </a>
                    </span>
                    <span>Все права защищены ©</span>
                </div>
            </div>
        </footer>
    );
}
