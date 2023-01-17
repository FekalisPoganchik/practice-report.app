import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__link">
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/main"
                >
                    Главная
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/firstkurs"
                >
                    1 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/secondkurs"
                >
                    2 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/thirdkurs"
                >
                    3 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/fourthkurs"
                >
                    4 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/utility"
                >
                    Утилита
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
