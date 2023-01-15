import React, {type ChangeEventHandler} from "react";

interface MyChildComponentProps {
  isMyState: boolean;
  ChangeMyState: ChangeEventHandler<HTMLInputElement>;
}

export default function MyChildComponent(
  props: Readonly<MyChildComponentProps>
): JSX.Element {
  // ESLint warining on myState, for ESLint myState must be in UPPER_CASE and prefixed by IS_
  const {isMyState, ChangeMyState} = props;

  return (
    <div>
      <input type="checkbox" onChange={ChangeMyState} />
      <p>{isMyState.toString()}</p>
    </div>
  );
}
