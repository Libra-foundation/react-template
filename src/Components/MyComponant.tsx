import React from "react";
import MyChildComponent from "./MyChildComponant";

interface MyComponentStates {
  isMyState: boolean;
}

export default function MyComponent(): JSX.Element {
  const [IS_MYSTATE, SetMyState] = React.useState<MyComponentStates>({
    isMyState: false,
  });

  const HandleChangeMyState = (): void => {
    SetMyState({
      ...IS_MYSTATE,
      isMyState: !IS_MYSTATE.isMyState,
    });
  };

  return (
    <MyChildComponent
      isMyState={IS_MYSTATE.isMyState}
      ChangeMyState={HandleChangeMyState}
    />
  );
}
