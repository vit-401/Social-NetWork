import React from "react";
import HeaderCss from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <header className={HeaderCss.header}>
                <img className={HeaderCss.logo} src="./logo512.png" alt=""/>
                <div>
                    {
                        props.isAuth ? props.login :
                            <NavLink  to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </>
    );
};
export default Header;
