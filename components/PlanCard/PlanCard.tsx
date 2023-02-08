import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import "./PlanCard.scss";

interface PlanCardProps {
  mealCount: number;
  mealPrice: String;
  hasBadge?: boolean;
  href?: string;
}

const PlanCard: FC<PlanCardProps> = ({
  mealCount,
  mealPrice,
  hasBadge = false,
  href,
}) => {
  return (
    <Link className="plancard" href={href}>
      {hasBadge && (
        <div className="plancard-badge-container">
          <div className="plancard-badge">
            <Image
              className="plancard-badge-img"
              src="/icons/thumbsup.svg"
              alt="thumbs up"
              width={20}
              height={20}
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
    </Link>
  );
};

export default PlanCard;
