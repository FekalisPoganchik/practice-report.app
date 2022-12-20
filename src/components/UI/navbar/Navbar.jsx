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
                    to="/PracticeBES/build/main"
                >
                    Главная
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/PracticeBES/build/firstkurs"
                >
                    1 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/PracticeBES/build/secondkurs"
                >
                    2 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/PracticeBES/build/thirdkurs"
                >
                    3 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/PracticeBES/build/fourthkurs"
                >
                    4 курс
                </NavLink>
                <NavLink
                    activeClassName={"nav-link-selected"}
                    className="link"
                    to="/PracticeBES/build/utility"
                >
                    Утилита
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
