import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
  selectAddOnPrice,
  selectPlanPrice,
  selectSubtotal,
} from "../../redux/CartSlice";
import { Input } from "../common/Input/Input";
import "./CheckoutPage.scss";
import { MealCheckoutItem } from "./MealCheckoutItem/MealCheckoutItem";

export const CheckoutPage = () => {
  const { zip, email } = useSelector((state: RootState) => state.order);
  const { items, mpw } = useSelector((state: RootState) => state.cart);
  const planPrice = useSelector(selectPlanPrice);
  const addonPrice = useSelector(selectAddOnPrice);
  const subTotal = useSelector(selectSubtotal);

  return (
    <div className="checkout-wrapper">
      <div className="checkout">
        <div className="checkout-delivery checkout-section">
          <div className="checkout-delivery-header checkout-section-header">
            Delivery Details
          </div>
          <div className="checkout-delivery-card checkout-section-card">
            <div className="checkout-delivery-card-title">Name</div>
            <div className="checkout-delivery-card-names">
              <Input placeholder="First Name" autoComplete="given-name" />
              <Input placeholder="Last Name" autoComplete="family-name" />
            </div>
            <div className="checkout-delivery-card-title">Location</div>
            <div className="checkout-delivery-card-address">
              <Input
                placeholder="Address Line 1"
                autoComplete="address-line1"
              />
              <Input
                placeholder="Address Line 2 (Optional)"
                autoComplete="address-line2"
              />

              <div className="checkout-delivery-card-address-level">
                <Input placeholder="City" autoComplete="address-level2" />
                <Input placeholder="State" autoComplete="address-level1" />
                <Input
                  placeholder="Zip"
                  lockedValue={zip}
                  autoComplete="postal-code"
                />
              </div>
            </div>
            <div className="checkout-delivery-card-title">
              Signup Information
            </div>
            <div className="checkout-delivery-card-info">
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
        <div className="checkout-summary checkout-section">
          <div className="checkout-summary-header checkout-section-header">
            Order Summary
          </div>
          <div className="checkout-summary-card checkout-section-card">
            <div className="checkout-summary-card-header">
              <h1 className="checkout-summary-card-header-title">My Meals</h1>
            </div>
            <div className="checkout-summary-card-items">
              {items.map((cartItem) => (
                <MealCheckoutItem cartItem={cartItem} key={cartItem.id} />
              ))}
            </div>
          </div>
          <div className="checkout-summary-bill">
            <div className="checkout-summary-bill-info">
              <div className="checkout-summary-bill-info-label">
                {mpw} Meal Plan Price
              </div>
              <div className="checkout-summary-bill-info-value">
                ${planPrice}
              </div>
            </div>
            <div className="checkout-summary-bill-info">
              <div className="checkout-summary-bill-info-label">Add-Ons</div>
              <div className="checkout-summary-bill-info-value">
                ${addonPrice}
              </div>
            </div>
            <div className="checkout-summary-bill-divider"></div>
            <div className="checkout-summary-bill-info">
              <div className="checkout-summary-bill-info-label checkout-summary-bill-info-label--primary">
                Today's Total
              </div>
              <div className="checkout-summary-bill-info-value checkout-summary-bill-info-value--primary">
                ${subTotal}
              </div>
            </div>
            <button className="checkout-summary-bill-btn">Order Meals</button>
          </div>
        </div>
      </div>
    </div>
  );
};
