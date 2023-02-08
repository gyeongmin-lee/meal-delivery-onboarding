import { ReactElement } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { PlanCard } from "../../../components/PlanPage/PlanCard/PlanCard";
import { NextPageWithLayout } from "../../_app";
import "./index.scss";

const Page: NextPageWithLayout = () => {
  return (
    <div className="plan">
      <div className="plan-info">
        <h1 className="plan-info-title">Choose a Plan</h1>
        <div className="plan-info-box">
          <div className="plan-info-box-item">
            <div className="plan-info-box-item-text">
              Our meals each contains a single serving
            </div>
            <img
              className="plan-info-box-item-img"
              src="/images/meal-02.png"
              alt="meal"
            />
          </div>
          <div className="plan-info-box-divider"></div>
          <div className="plan-info-box-item">
            <div className="plan-info-box-item-text">
              Our Fresh+ add-on menu has multi-serve options.
            </div>
            <img
              className="plan-info-box-item-img"
              src="/images/meal-01.png"
              alt="meal"
            />
          </div>
        </div>
      </div>
      <div className="plan-items">
        <PlanCard
          mealCount={6}
          mealPrice="11.99"
          href="/signup/meal?choose=6"
        />
        <PlanCard
          mealCount={10}
          mealPrice="10.99"
          hasBadge
          href="/signup/meal?choose=10"
        />
        <PlanCard
          mealCount={14}
          mealPrice="9.99"
          href="/signup/meal?choose=14"
        />
      </div>
      <p className="plan-message">
        * Shipping added at checkout where applicable
      </p>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="signup">
      <NavBar />
      {page}
    </div>
  );
};

export default Page;
