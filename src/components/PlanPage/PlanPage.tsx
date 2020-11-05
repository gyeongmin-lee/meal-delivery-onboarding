import React from "react";
import { useHistory } from "react-router-dom";
import meal1 from "./meal-01.png";
import meal2 from "./meal-02.png";
import { PlanCard } from "./PlanCard/PlanCard";
import "./PlanPage.scss";

export const PlanPage = () => {
  const history = useHistory();

  const handleSelect = (mealCount: number) => {
    history.push(`meal/${mealCount}`);
  };

  return (
    <div className="plan">
      <div className="plan-info">
        <h1 className="plan-info-title">Choose a Plan</h1>
        <div className="plan-info-box">
          <div className="plan-info-box-item">
            <div className="plan-info-box-item-text">
              Our meals each contains a single serving
            </div>
            <img className="plan-info-box-item-img" src={meal2} alt="meal" />
          </div>
          <div className="plan-info-box-divider"></div>
          <div className="plan-info-box-item">
            <div className="plan-info-box-item-text">
              Our Fresh+ add-on menu has multi-serve options.
            </div>
            <img className="plan-info-box-item-img" src={meal1} alt="meal" />
          </div>
        </div>
      </div>
      <div className="plan-items">
        <PlanCard mealCount={6} mealPrice="11.99" onClick={handleSelect} />
        <PlanCard
          mealCount={10}
          mealPrice="10.99"
          hasBadge
          onClick={handleSelect}
        />
        <PlanCard mealCount={14} mealPrice="9.99" onClick={handleSelect} />
      </div>
      <p className="plan-message">
        * Shipping added at checkout where applicable
      </p>
    </div>
  );
};
