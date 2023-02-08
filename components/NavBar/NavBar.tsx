import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const router = useRouter();

  const activeClass = "nav-content__text nav-content__text--active";
  const inactiveClass = "nav-content__text";

  const getClassName = useCallback(
    (path: string) => {
      return router.pathname === path ? activeClass : inactiveClass;
    },
    [router.pathname]
  );

  return (
    <div className="nav">
      <div className="nav-content">
        <Link className="nav-logo" href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="nav-content__img"
            width={125}
            height={30}
          />
        </Link>
        <div className="nav-content__step">
          <Link href="/signup/plan" className={getClassName("/signup/plan")}>
            Plans
          </Link>
          <Image
            src="/icons/forward.svg"
            alt=""
            className="nav-content__arrow"
            width={20}
            height={20}
          />
          <Link
            href={{ pathname: "/signup/meal", query: { choose: 10 } }}
            className={getClassName("/signup/meal")}
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
            className={getClassName("/signup/checkout")}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
