import { Fragment } from "react";
import classes from "./Header.module.css";
import bgImage from "../../assets/wall.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React FatFix</h1>
        <HeaderCardButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]} >
        <img src={bgImage} alt="background"/>
      </div>
    </Fragment>
  );
};

export default Header;
