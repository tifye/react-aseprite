import React from "react";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import Break from "../components/Break";
import Separator from "../components/Separator";

export default function () {
  const [count, setCount] = React.useState(0);

  function addClicked() {
    setCount((count) => {
      console.log(count);
      return count + 1;
    });
  }

  function subClicked() {
    setCount((count) => {
      console.log(count);
      return count - 1;
    });
  }

  return (
    <Dialog title="Meep">
      <Button />
      <Button text={count} />
      <Button />
      <Break />
      <Button text="-" onclick={subClicked} />
      <Button text="+" onclick={addClicked} />
    </Dialog>
  );
}
