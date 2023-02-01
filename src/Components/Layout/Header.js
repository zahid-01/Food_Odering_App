import React, { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import Button from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <Button text="Cart" />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
