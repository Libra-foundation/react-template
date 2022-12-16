import React from "react";
import cssStyleClassName from "./ScopedStyle.module.sass";

export default function ScopedComponent(): JSX.Element {
  return (
    <div>
      <p className={cssStyleClassName.test}>Scoped</p>
    </div>
  );
}
