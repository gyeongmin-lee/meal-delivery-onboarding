import Image from "next/image";
import { FC } from "react";
import { CartItem } from "../../../lib/redux/CartSlice";
import "./MealCheckoutItem.scss";

interface MealCheckoutItemProps {
  cartItem: CartItem;
}

const MealCheckoutItem: FC<MealCheckoutItemProps> = ({ cartItem }) => {
  const { meal, quantity } = cartItem;
  return (
    <div className="mlckitem">
      <Image
        width={60}
        height={60}
        src={meal.src}
        alt={meal.title}
        className="mlckitem-img"
      />
      <div className="mlckitem-body">
        <div className="mlckitem-body-section">
          <h1 className="mlckitem-body-section-title">{meal.title}</h1>
          <h1 className="mlckitem-body-section-subtitle">{meal.type}</h1>
        </div>
        <div className="mlckitem-body-quantity">x{quantity}</div>
      </div>
    </div>
  );
};

export default MealCheckoutItem;
