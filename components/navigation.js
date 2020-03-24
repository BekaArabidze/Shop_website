import React, { Component } from "react";
import Link from "next/link";

import anime from "../node_modules/animejs/lib/anime";

const NavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="paragraph-regular-font">{title}</a>
    </Link>
  );
};
const body_overflow = "body--modal-open";
export default class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    console.log("toggle");
  };

  render() {
    let { isOpen } = this.state;

    return (
      <React.Fragment>
        <header className="navigation">
          <div className="navigation__wrapper">
            <div className="navigation__logo">
              <img
                src=""
                alt="Logo"
                className="navigation__logo__property"
              ></img>
              <img
                className="navigation__logo__property logo_small"
                src=""
                alt="LogoSmall"
              />
            </div>

            <div className="navigation__menu">
              <ul className="navigation__menu__list">
                <li className="navigation__menu__list__items">
                  <NavLink route="/" title="Home." />
                </li>
                <li className="navigation__menu__list__items">
                  <NavLink route="/services" title="Services." />
                </li>
                <li className="navigation__menu__list__items">
                  <NavLink route="/clients" title="Clients." />
                </li>
                <li className="navigation__menu__list__items">
                  <NavLink route="/contact" title="Contacts." />
                </li>
                <li className="navigation__menu__list__items">
                  <NavLink route="/blog" title="Blog." />
                </li>
                <li className="navigation__menu__list__items">
                  <NavLink route="/about" title="About." />
                </li>
              </ul>
            </div>

            <div className="navigation__shop">
              <a href="#" className="btn-small-fill paragraph-regular-font">
                Trix Shop.
              </a>
            </div>

            <div className={isOpen ? "mobile_nav " : "mobile_nav new-opacity"}>
              <div className="mobile_nav__container">
                <div className="mobile__menu">
                  <ul className="mobile__menu__list">
                    <li className="mobile__menu__list__items">
                      <NavLink route="/" title="Home." />
                    </li>
                    <li className="mobile__menu__list__items">
                      <NavLink route="/services" title="Services." />
                    </li>
                    <li className="mobile__menu__list__items">
                      <NavLink route="/clients" title="Clients." />
                    </li>
                    <li className="mobile__menu__list__items">
                      <NavLink route="/contact" title="Contacts." />
                    </li>
                    <li className="mobile__menu__list__items">
                      <NavLink route="/blog" title="Blog." />
                    </li>
                    <li className="mobile__menu__list__items">
                      <NavLink route="/about" title="About." />
                    </li>
                  </ul>
                </div>
                <div className="mobile__shop">
                  <a
                    href="#"
                    className="btn-small-fill paragraph-regular-font paragraph-light-font"
                  >
                    Trix Shop.
                  </a>
                </div>
              </div>
            </div>

            <div
              className={
                !this.state.isOpen ? "hamburger" : "hamburger active-burger"
              }
              onClick={this.toggle}
            >
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999453 12.4625L28.3227 39.7857M11.7772 12.0826L29.418 29.7234M22.8404 11.0836L30.161 18.4041"
                  stroke="#151F28"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
