import React from "react";
import HeaderCss from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={HeaderCss.header}>
        <img className={HeaderCss.logo} src="./logo512.png" alt="" />
      </header>
    </>
  );
};
export default Header;
