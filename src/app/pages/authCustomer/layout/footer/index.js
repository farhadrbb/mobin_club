import React from "react";
import Styles from "./index.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import MovieIcon from "@material-ui/icons/Movie";
import PublicIcon from "@material-ui/icons/Public";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  color: {
    color: "#929292",
    "&:hover": {
      color: "#f89921",
    },
  },
}));

const FooterLayout = () => {
  const classes = useStyles();
  return (
    <>
      <div className={Styles["footer"]}>
        <div className={Styles["footer-content-parent"]}>
          <ul className="d-flex m-0 mb-2 p-0 list-unstyled justify-content-center">
            <li className={Styles["footer-li"]}>
              {" "}
              <Link to={"/home"} className={classes.color}>
                صفحه اصلی
              </Link>
            </li>
            <li className={Styles["footer-li"]}>
              <Link to={"/branchPage"} className={classes.color}>
                شعب کارگزاری مبین سرمایه
              </Link>
            </li>
            <li className={Styles["footer-li"]}>
              پشتیبانی:<a style={{ color: "#929292" }} href="tel:1579">1579</a>
            </li>
          </ul>
          <ul className="d-flex m-0 p-0 list-unstyled justify-content-center">
            <li className="mx-1">
              <a href="https://t.me/mobinsb" className={classes.color}>
                <TelegramIcon />
              </a>
            </li>
            <li className="mx-1">
              <a
                href="https://www.instagram.com/mobinsarmayeh/"
                className={classes.color}
              >
                <InstagramIcon />
              </a>
            </li>
            <li className="mx-1">
              <a
                href="https://www.aparat.com/Mobinsb"
                className={classes.color}
              >
                <MovieIcon />
              </a>
            </li>
            <li className="mx-1">
              <a href="https://mobinsb.ir/" className={classes.color}>
                <PublicIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLayout;
