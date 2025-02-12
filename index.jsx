import React from "react";
import coinFlower from "./coin-flower.png";
import component from "./component.svg";
import currencyCrushBarChart from "./currency-crush-bar-chart.png";
import currencyCrushMoneyplant from "./currency-crush-moneyplant.png";
import differentTypesOfEducationOrEducationalLadder from "./different-types-of-education-or-educational-ladder.png";
import fox from "./fox.png";
import goodsAndPromotionsFlyingIntoTheShoppingCart from "./goods-and-promotions-flying-into-the-shopping-cart.png";
import homeIcon from "./home-icon.png";
import image from "./image.svg";
import learningHubIcon from "./learning-hub-icon.svg";
import lightModeToggleIcon1 from "./light-mode-toggle-icon-1.svg";
import managingPersonalFinancesWithAMobileApp from "./managing-personal-finances-with-a-mobile-app.png";
import notifIcon from "./notif-icon.png";
import practiceBrainIcon from "./practice-brain-icon.svg";
import shopaholicsOnlineShopping from "./shopaholics-online-shopping.png";
import "./style.css";
import subtract from "./subtract.svg";
import userIcon from "./user-icon.png";
import vector109 from "./vector-109.svg";
import vector from "./vector.svg";

export const Pg = () => {
  return (
    <div className="pg">
      <div className="modules">
        <div className="m">
          <img
            className="managing-personal"
            alt="Managing personal"
            src={managingPersonalFinancesWithAMobileApp}
          />
        </div>

        <div className="different-types-of-wrapper">
          <img
            className="different-types-of"
            alt="Different types of"
            src={differentTypesOfEducationOrEducationalLadder}
          />
        </div>

        <div className="shopaholics-online-wrapper">
          <img
            className="shopaholics-online"
            alt="Shopaholics online"
            src={shopaholicsOnlineShopping}
          />
        </div>

        <div className="component-wrapper">
          <img className="component" alt="Component" src={component} />
        </div>

        <div className="goods-and-promotions-wrapper">
          <img
            className="goods-and-promotions"
            alt="Goods and promotions"
            src={goodsAndPromotionsFlyingIntoTheShoppingCart}
          />
        </div>

        <div className="currency-crush-wrapper">
          <img
            className="currency-crush"
            alt="Currency crush"
            src={currencyCrushMoneyplant}
          />
        </div>
      </div>

      <div className="topbar">
        <div className="search">
          <div className="overlap">
            <div className="icon-search">
              <div className="overlap-group">
                <img className="subtract" alt="Subtract" src={subtract} />

                <img className="vector" alt="Vector" src={vector109} />
              </div>
            </div>

            <div className="text-wrapper">Search...</div>
          </div>
        </div>

        <div className="streak">
          <img className="img" alt="Vector" src={vector} />

          <div className="div">30</div>
        </div>

        <img className="notif-icon" alt="Notif icon" src={notifIcon} />

        <img className="user-icon" alt="User icon" src={userIcon} />

        <img
          className="light-mode-toggle"
          alt="Light mode toggle"
          src={lightModeToggleIcon1}
        />
      </div>

      <div className="sidebar">
        <div className="sidebar-components-wrapper">
          <div className="sidebar-components">
            <img className="fox" alt="Fox" src={fox} />

            <div className="learning-icon">
              <div className="text-wrapper-2">Learn</div>

              <img
                className="learning-hub-icon"
                alt="Learning hub icon"
                src={learningHubIcon}
              />
            </div>

            <div className="practice-icon">
              <img
                className="practice-brain-icon"
                alt="Practice brain icon"
                src={practiceBrainIcon}
              />

              <div className="text-wrapper-2">Practice</div>
            </div>

            <div className="home-icon">
              <div className="overlap-group-2">
                <div className="text-wrapper-3">HOME</div>

                <img className="home-icon-2" alt="Home icon" src={homeIcon} />
              </div>
            </div>

            <div className="dashboard-icon">
              <div className="text-wrapper-4">Dashboard</div>

              <img
                className="currency-crush-bar"
                alt="Currency crush bar"
                src={currencyCrushBarChart}
              />
            </div>

            <div className="settings-icon">
              <div className="settings">
                <img className="vector-2" alt="Vector" src={image} />
              </div>

              <div className="text-wrapper-5">Settings</div>
            </div>
          </div>
        </div>

        <div className="rectangle" />
      </div>

      <div className="welcome">
        <div className="overlap-2">
          <div className="we">MODULES</div>

          <img className="coin-flower" alt="Coin flower" src={coinFlower} />
        </div>
      </div>
    </div>
  );
};
