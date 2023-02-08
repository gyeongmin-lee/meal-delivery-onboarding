import classNames from "classnames";
import React, { FC } from "react";
import "./Arrow.scss";

interface ArrowProps {
  direction: "up" | "right" | "down" | "left";
}

export const Arrow: FC<ArrowProps> = ({ direction }) => {
  return <div className={classNames("arrow", `arrow-${direction}`)}></div>;
};
