import React from "react";
import styles from "./Header.module.css";

import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import pizzaLogo from "../../assets/pizza.png";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.name}>
          <img className={styles.logo} src={pizzaLogo} alt="pizza" />
          <h1 className={styles.logoName}>LaTrattoria</h1>
        </div>

        <HeaderCartButton onClick={props.onClick}>Cart</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </>
  );
};

export default Header;
