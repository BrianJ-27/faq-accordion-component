import React from "react";
import BgMobile from "../../assets/images/bg-pattern-mobile.svg";
import WomanMobile from "../../assets/images/illustration-woman-online-mobile.svg";
import WomanDesktop from "../../assets/images/illustration-woman-online-desktop.svg";
import BgDesktop from "../../assets/images/bg-pattern-desktop.svg";

const ImgContainer = () => {
  return (
    <React.Fragment>
      <div className="img__container">
        <img className="img__logo" src={WomanMobile} alt="" />
        <img className="img__shadow" src={BgMobile} alt="" />
        <img className="img__logo-desktop" src={WomanDesktop} alt="" />
        <img className="img__shadow-desktop" src={BgDesktop} alt="" />
      </div>
    </React.Fragment>
  );
};

export default ImgContainer;
