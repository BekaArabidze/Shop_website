import React, { Component, Fragment } from "react";
import Link from "next/link";

const FooterLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="paragraph-light-font">{title}</a>
    </Link>
  );
};

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="footer">
          <div className="footer_container">
            <div className="section_introduction">
              <div className="heading">
                <p className="heading-2 heading-bold-font ">
                  What are you waiting for?
                </p>
              </div>
              <div className="paragraph">
                <p className="paragraph-big paragraph-light-font ">
                  We are ready,are you?
                </p>
              </div>
              <div className="paragraph-1">
                <p className="heading-4 paragraph-regular-font ">
                  Our team is ready to serve you.We speak to emotions and
                  multiply conversations,
                  <br />
                  reach and profits - we help your dreams come true.
                </p>
              </div>
              <div className="contact_btn ">
                <a href="#" className="btn-small-fill paragraph-regular-font ">
                  contact us
                </a>
              </div>
              <div className="octagons_img"></div>
            </div>
            <div className="section_contact">
              <div className="section_contact__navigation">
                <ul>
                  <li>
                    <a
                      className="paragraph-small paragraph-light-font"
                      href="#"
                    >
                      <span
                        style={{
                          color: "rgba(191, 191, 191, 1)",
                          fontFamily: "heading-regular"
                        }}
                      >
                        See also
                      </span>
                    </a>
                  </li>
                  <li className="paragraph-medium">
                    <FooterLink route="/" title="Home" />
                  </li>
                  <li className="paragraph-medium">
                    <FooterLink route="/services" title="Services" />
                  </li>
                  <li className="paragraph-medium">
                    <FooterLink route="/clients" title="Clients" />
                  </li>
                  <li className="paragraph-medium">
                    <FooterLink route="/contacts" title="Contacts" />
                  </li>
                  <li className="paragraph-medium">
                    <FooterLink route="/blog" title="Blog" />
                  </li>
                  <li className="paragraph-medium">
                    <FooterLink route="/about" title="About" />
                  </li>
                </ul>
              </div>
              <div className="section_contact__networks">
                <ul>
                  <li>
                    <a
                      className="paragraph-small paragraph-light-font"
                      href="#"
                    >
                      <span
                        style={{
                          color: "rgba(191, 191, 191, 1)"
                        }}
                      >
                        More Contacts
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="paragraph-medium paragraph-light-font "
                      href="#"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="paragraph-medium paragraph-light-font "
                      href="#"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="paragraph-medium paragraph-light-font "
                      href="#"
                    >
                      Mail
                    </a>
                  </li>
                </ul>
              </div>
              <div className="section_contact__address">
                <ul>
                  <li>
                    <a
                      className="paragraph-small paragraph-light-font"
                      href="#"
                    >
                      <span
                        style={{
                          color: "rgba(191, 191, 191, 1)"
                        }}
                      >
                        Office
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="paragraph-medium paragraph-light-font "
                      href="#"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
