import React from "react";
import DummyPage from "./Pages/DummyPage";

function App(): JSX.Element {
  return (
    <div>
      <DummyPage />
    </div>
  );
}

export function MesCouilles(zob: ReadonlyArray<string>): void {
  for (const J of zob) {
    console.log(J);
  }
}

export default App;
