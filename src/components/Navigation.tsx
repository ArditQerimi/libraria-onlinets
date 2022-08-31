import React, { useState } from "react";
import classes from "./Navigation.module.css";
import { IoMenu } from "react-icons/io5";

const Navigation = () => {
  const [isActive, setIsActive] = useState(1);
  const [isLoginBtnActive, setIsLoginBtnActive] = useState(2);
  const [showNav, setShowNav] = useState(false);

  const handleClick = (id: any) => {
    setIsActive(id);
  };

  const handleLoginClick = (id: any) => {
    setIsLoginBtnActive(id);
  };

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className={classes.navigation__container}>
        <img
          src={
            "https://mlcook.lib.oh.us/sites/default/files/migrated/Libby-Logo.png"
          }
          className={classes.nav__img}
          alt="brand__logo"
        />
        {/* </div> */}
        <div className={classes.navbar}>
          <div
            className={
              isActive === 1
                ? `${classes.nav__link} ${classes.active}`
                : classes.nav__link
            }
            onClick={() => handleClick(1)}
          >
            Overview
          </div>
          <div
            className={
              isActive === 2
                ? `${classes.nav__link} ${classes.active}`
                : classes.nav__link
            }
            onClick={() => handleClick(2)}
          >
            About us
          </div>
          <div
            className={
              isActive === 3
                ? `${classes.nav__link} ${classes.active}`
                : classes.nav__link
            }
            onClick={() => handleClick(3)}
          >
            Our Products
          </div>
          <div
            className={
              isActive === 4
                ? `${classes.nav__link} ${classes.active}`
                : classes.nav__link
            }
            onClick={() => handleClick(4)}
          >
            Contact Us
          </div>
        </div>
        <div className={classes.user}>
          <div
            className={
              isLoginBtnActive === 1
                ? `${classes.nav__link__user} ${classes.active}`
                : classes.nav__link__user
            }
            onClick={() => handleLoginClick(1)}
          >
            Login
          </div>
          <div
            className={
              isLoginBtnActive === 2
                ? `${classes.nav__link__user} ${classes.active}`
                : classes.nav__link__user
            }
            onClick={() => handleLoginClick(2)}
          >
            Register
          </div>
        </div>

        <IoMenu
          size={50}
          color={"#411530"}
          className={classes.menu__button}
          onClick={handleShowNav}
        />
      </div>

      <div
        className={
          !showNav ? classes.hide__navbar__column : classes.show__navbar__column
        }
      >
        <div
          className={
            isActive === 1
              ? `${classes.nav__link} ${classes.active}`
              : classes.nav__link
          }
          onClick={() => handleClick(1)}
        >
          Overview
        </div>
        <div
          className={
            isActive === 2
              ? `${classes.nav__link} ${classes.active}`
              : classes.nav__link
          }
          onClick={() => handleClick(2)}
        >
          About us
        </div>
        <div
          className={
            isActive === 3
              ? `${classes.nav__link} ${classes.active}`
              : classes.nav__link
          }
          onClick={() => handleClick(3)}
        >
          Our Products
        </div>
        <div
          className={
            isActive === 4
              ? `${classes.nav__link} ${classes.active}`
              : classes.nav__link
          }
          onClick={() => handleClick(4)}
        >
          Contact Us
        </div>
      </div>

      {/* /////////////////////////////// */}

      <div
        className={
          !showNav ? classes.hide__navbar__column : classes.show__navbar__column
        }
      >
        <div
          className={
            isLoginBtnActive === 1
              ? `${classes.nav__link__user} ${classes.active}`
              : classes.nav__link__user
          }
          onClick={() => handleLoginClick(1)}
        >
          Login
        </div>
        <div
          className={
            isLoginBtnActive === 2
              ? `${classes.nav__link__user} ${classes.active}`
              : classes.nav__link__user
          }
          onClick={() => handleLoginClick(2)}
        >
          Register
        </div>
      </div>
    </>
  );
};

export default Navigation;
