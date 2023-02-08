import { ReactElement } from "react";
import { useSelector } from "react-redux";
import Input from "../../../components/Input/Input";
import MealCheckoutItem from "../../../components/Meal/MealCheckoutItem/MealCheckoutItem";
import NavBar from "../../../components/NavBar/NavBar";
import { RootState } from "../../../lib/redux";
import {
  selectAddOnPrice,
  selectPlanPrice,
  selectSubtotal,
} from "../../../lib/redux/CartSlice";
import "./index.scss";

const Page = () => {
  const { zip, email } = useSelector((state: RootState) => state.order);
  const { items, mpw } = useSelector((state: RootState) => state.cart);
  const planPrice = useSelector(selectPlanPrice);
  const addonPrice = useSelector(selectAddOnPrice);
  const subTotal = useSelector(selectSubtotal);

  return (
    <div className="checkout__wrapper">
      <div className="checkout">
        <div className="checkout__delivery checkout__section">
          <div className="checkout__header">Delivery Details</div>
          <div className="checkout__card checkout__section-card">
            <div className="checkout__card-title">Name</div>
            <div className="checkout__names">
              <Input placeholder="First Name" autoComplete="given-name" />
              <Input placeholder="Last Name" autoComplete="family-name" />
            </div>
            <div className="checkout__card-title">Location</div>
            <div className="checkout__address">
              <Input
                placeholder="Address Line 1"
                autoComplete="address-line1"
              />
              <Input
                placeholder="Address Line 2 (Optional)"
                autoComplete="address-line2"
              />

              <div className="checkout__row">
                <Input placeholder="City" autoComplete="address-level2" />
                <Input placeholder="State" autoComplete="address-level1" />
                <Input
                  placeholder="Zip"
                  lockedValue={zip}
                  autoComplete="postal-code"
                />
              </div>
            </div>
            <div className="checkout__card-title">Signup Information</div>
            <div className="checkout__info">
              <Input placeholder="Mobile Number" autoComplete="tel" />
              <Input
                placeholder="Email Address"
                autoComplete="email"
                lockedValue={email}
              />
              <Input
                placeholder="Password"
                autoComplete="new-password"
                isPassword
              />
            </div>
          </div>
        </div>
        <div className="checkout-summary checkout__section">
          <div className="checkout__header">Order Summary</div>
          <div className="checkout-summary__card checkout__section-card">
            <div className="checkout-summary__header">
              <h1 className="checkout-summary__title">My Meals</h1>
            </div>
            <div className="checkout-summary__items">
              {items.map((cartItem) => (
                <MealCheckoutItem cartItem={cartItem} key={cartItem.id} />
              ))}
            </div>
          </div>
          <div className="checkout-summary__bill">
            <div className="checkout-summary__info">
              <div className="checkout-summary__label">
                {mpw} Meal Plan Price
              </div>
              <div className="checkout-summary__value">${planPrice}</div>
            </div>
            <div className="checkout-summary__info">
              <div className="checkout-summary__label">Add-Ons</div>
              <div className="checkout-summary__value">${addonPrice}</div>
            </div>
            <div className="checkout-summary__divider"></div>
            <div className="checkout-summary__info">
              <div className="checkout-summary__label checkout-summary__label--primary">
                {"Today's Total"}
              </div>
              <div className="checkout-summary__value checkout-summary__value--primary">
                ${subTotal}
              </div>
            </div>
            <button className="checkout-summary__btn">Order Meals</button>
          </div>
        </div>
      </div>
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
