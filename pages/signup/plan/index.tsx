import Image from "next/image";
import { ReactElement } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import PlanCard from "../../../components/PlanCard/PlanCard";
import { NextPageWithLayout } from "../../_app";
import "./index.scss";

const Page: NextPageWithLayout = () => {
  return (
    <div className="plan">
      <div>
        <h1 className="plan__title">Choose a Plan</h1>
        <div className="plan__box">
          <div className="plan__item">
            <div className="plan__item-text">
              Our meals each contains a single serving
            </div>
            <Image
              className="plan__item-img"
              src="/images/meal-02.png"
              priority
              alt="meal"
              width={210}
              height={168}
            />
          </div>
          <div className="plan__divider"></div>
          <div className="plan__item">
            <div className="plan__item-text">
              Our Fresh+ add-on menu has multi-serve options.
            </div>
            <Image
              className="plan__item-img"
              src="/images/meal-01.png"
              priority
              alt="meal"
              width={210}
              height={168}
            />
          </div>
        </div>
      </div>
      <div className="plan__row">
        <PlanCard
          mealCount={6}
          mealPrice="11.99"
          href={{ pathname: "/signup/meal", query: { choose: 6 } }}
        />
        <PlanCard
          mealCount={10}
          mealPrice="10.99"
          hasBadge
          href={{ pathname: "/signup/meal", query: { choose: 10 } }}
        />
        <PlanCard
          mealCount={14}
          mealPrice="9.99"
          href={{ pathname: "/signup/meal", query: { choose: 14 } }}
        />
      </div>
      <p className="plan__message">
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
