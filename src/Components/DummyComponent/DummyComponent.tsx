import React from "react";
import "./DummyStyle.sass";
import ReactTemplateLogo from "../../Assets/ReactTemplateLogo.svg";

export default function DummyComponent(): JSX.Element {
  return (
    <div className="Div">
      <img src={ReactTemplateLogo} alt="React template logo" className="Logo" />
      <p className="test">E-constellatio React template</p>
    </div>
  );
}
