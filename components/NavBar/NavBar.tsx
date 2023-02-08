import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import "./NavBar.scss";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="nav">
      <div className="nav-content">
        <Link className="nav-logo" href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="nav-content-img"
            width={125}
            height={30}
          />
        </Link>
        <div className="nav-content-step">
          <Link
            href="/signup/plan"
            className={
              router.pathname === "/signup/plan"
                ? "nav-content-step-text active"
                : "nav-content-step-text"
            }
          >
            Plans
          </Link>
          <Image
            src="/icons/forward.svg"
            alt=""
            className="nav-content-step-arrow"
            width={20}
            height={20}
          />
          <Link
            href="/signup/meal?choose=10"
            className={
              router.pathname === "/signup/meal"
                ? "nav-content-step-text active"
                : "nav-content-step-text"
            }
          >
            Meals
          </Link>
          <Image
            src="/icons/forward.svg"
            alt=""
            className="nav-content-step-arrow"
            width={20}
            height={20}
          />
          <Link
            href="/signup/checkout"
            className={
              router.pathname === "/signup/checkout"
                ? "nav-content-step-text active"
                : "nav-content-step-text"
            }
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
