import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../lib/redux";
import { setEmail, setZip } from "../lib/redux/OrderSlice";
import "./index.scss";

export default function LandingPage() {
  const dispatch = useDispatch();
  const { email, zip } = useSelector((state: RootState) => state.order);

  return (
    <div className="landing">
      <div className="landing-navbar">
        <Image
          className="landing-navbar__img"
          src="/images/logo.png"
          alt="logo"
          width={133}
          height={32}
        />
        <button className="landing-navbar__btn">The Plans</button>
        <button className="landing-navbar__btn">The Food</button>
        <button className="landing-navbar__btn">How It Works</button>
        <div className="landing-navbar__user">
          <button className="landing-navbar__action landing-navbar__action--primary">
            Continue Sign Up
          </button>
          <button className="landing-navbar__action landing-navbar__action--secondary">
            My Account
          </button>
        </div>
      </div>
      <div className="landing-container">
        <Image
          className="landing-container__img"
          src="/images/bg.jpg"
          alt="landing"
          priority
          width={1950}
          height={1300}
        />
        <div className="landing-container__form">
          <form className="landing-container__box">
            <h1 className="landing-container__title">
              Delicously healthy prepared meals
            </h1>
            <h1 className="landing-container__title landing-container__title--primary">
              Delivered
              <br /> Right to Your Door
            </h1>
            <input
              placeholder="Email Address"
              className="landing-container__input"
              type="text"
              value={email}
              name="email"
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              placeholder="Zip Code"
              className="landing-container__input"
              type="text"
              value={zip}
              autoComplete="postal-code"
              onChange={(e) => dispatch(setZip(e.target.value))}
            />
            <Link href="/signup/plan">
              <button className="landing-container__btn">Get Started</button>
            </Link>
            <p className="landing-container__text">
              Already have an account?{" "}
              <a className="landing-container__link" href="http://google.com">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
