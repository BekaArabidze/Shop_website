import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";

const BaseLayout = props => {
  return (
    <>
      {/* <Navigation /> */}
      <main>
        <div className="main_container">{props.children}</div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
