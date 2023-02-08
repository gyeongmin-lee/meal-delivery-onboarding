import classNames from "classnames";
import { FC } from "react";
import "./Arrow.scss";

interface ArrowProps {
  direction: "up" | "right" | "down" | "left";
}

const Arrow: FC<ArrowProps> = ({ direction }) => {
  return <div className={classNames("arrow", `arrow--${direction}`)}></div>;
};

export default Arrow;
