import classNames from "classnames";
import { FC } from "react";
import "./Counter.scss";

interface CounterProps {
  value: number;
  /**
   * @default "large"
   */
  onIncrement?: () => void;
  onDecrement?: () => void;
  customClassName?: string;
  size?: "small" | "regular";
}

const Counter: FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  customClassName = "",
  size = "regular",
}) => {
  return (
    <div
      className={classNames("counter", customClassName, {
        "counter--small": size === "small",
      })}
    >
      {onDecrement && (
        <button className="counter__btn" onClick={onDecrement}>
          -
        </button>
      )}
      <div className="counter__value">{value}</div>
      {onIncrement && (
        <button className="counter__btn" onClick={onIncrement}>
          +
        </button>
      )}
    </div>
  );
};

export default Counter;
