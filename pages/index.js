import React, { Component } from "react";
import Head from "../components/utils/head";
import Link from "next/link";

import BaseLayout from "../components/base-layout";

const NavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="paragraph-regular-font">{title}</a>
    </Link>
  );
};
export class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Index</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>

        <BaseLayout>beqa</BaseLayout>
      </React.Fragment>
    );
  }
}

export default Index;
