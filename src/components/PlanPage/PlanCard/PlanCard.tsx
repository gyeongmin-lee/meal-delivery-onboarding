import React, { FC } from "react";
import thumbsUp from "../../../icons/thumbsup.svg";
import "./PlanCard.scss";

interface PlanCardProps {
  mealCount: number;
  mealPrice: String;
  hasBadge?: boolean;
  onClick?: (mealCount: number) => void;
}

export const PlanCard: FC<PlanCardProps> = ({
  mealCount,
  mealPrice,
  hasBadge = false,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(mealCount);
  };

  return (
    <div className="plancard" onClick={handleClick}>
      {hasBadge && (
        <div className="plancard-badge-container">
          <div className="plancard-badge">
            <img
              className="plancard-badge-img"
              src={thumbsUp}
              alt="thumbs up"
            />
            <p className="plancard-badge-text">MOST POPULAR</p>
          </div>
        </div>
      )}
      <div className="plancard-title">{mealCount}</div>
      <div className="plancard-subtitle">MEALS PER WEEK</div>
      <div className="plancard-info">
        <span className="plancard-info-alert"></span>
        <span className="plancard-info-text">${mealPrice}/meal</span>
      </div>
      <button className="plancard-btn">Select</button>
    </div>
  );
};
