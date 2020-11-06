import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Input } from "../common/Input/Input";
import "./CheckoutPage.scss";

export const CheckoutPage = () => {
  const { zip, email } = useSelector((state: RootState) => state.order);

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
            SUMMARY CARD
          </div>
        </div>
      </div>
    </div>
  );
};
