import classes from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModlaOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
      {reactDom.createPortal(<ModlaOverlay>{props.children}</ModlaOverlay>, portalElement)}
    </>
  );
};

export default Modal;
