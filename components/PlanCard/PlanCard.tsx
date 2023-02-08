import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { UrlObject } from "url";
import "./PlanCard.scss";

interface PlanCardProps {
  mealCount: number;
  mealPrice: String;
  hasBadge?: boolean;
  href?: string | UrlObject;
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
        <div className="plancard__badge-container">
          <div className="plancard__badge">
            <Image
              className="plancard__badge-img"
              src="/icons/thumbsup.svg"
              alt="thumbs up"
              width={20}
              height={20}
            />
            <p className="plancard__badge-text">MOST POPULAR</p>
          </div>
        </div>
      )}
      <div className="plancard__title">{mealCount}</div>
      <div className="plancard__subtitle">MEALS PER WEEK</div>
      <div className="plancard__info">
        <span className="plancard__alert"></span>
        <span className="plancard__text">${mealPrice}/meal</span>
      </div>
      <button className="plancard__btn">Select</button>
    </Link>
  );
};

export default PlanCard;
