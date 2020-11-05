import classNames from "classnames";
import React, { FC } from "react";
import "./Counter.scss";

interface CounterProps {
  value: number;
  /**
   * @default "large"
   */
  onIncrement?: () => void;
  onDecrement?: () => void;
  customClassName?: string;
}

export const Counter: FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  customClassName = "",
}) => {
  return (
    <div className={classNames("counter", customClassName)}>
      {onDecrement && (
        <button className="counter-btn" onClick={onDecrement}>
          -
        </button>
      )}
      <div className="counter-value">{value}</div>
      {onIncrement && (
        <button className="counter-btn" onClick={onIncrement}>
          +
        </button>
      )}
    </div>
  );
};
