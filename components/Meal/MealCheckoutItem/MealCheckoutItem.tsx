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
        className="mlckitem__img"
      />
      <div className="mlckitem__body">
        <div>
          <h1 className="mlckitem__title">{meal.title}</h1>
          <h1 className="mlckitem__subtitle">{meal.type}</h1>
        </div>
        <div className="mlckitem__quantity">x{quantity}</div>
      </div>
    </div>
  );
};

export default MealCheckoutItem;
