import React from "react";
import cssStyleClassName from "./ScopedStyle.module.sass";

export default function ScopedComponent(): JSX.Element {
  return (
    <div className={cssStyleClassName.Div}>
      <p className={cssStyleClassName.test}>
        Welcome In this template for react offer by e-constellatio<sup>©</sup>{" "}
        company. These lines have scoped CSS written in SASS !
      </p>
    </div>
  );
}
