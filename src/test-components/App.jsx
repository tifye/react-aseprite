import React from "react";
import Button from "../components/button";
import Dialog from "../components/Dialog";
import Break from "../components/Break";
import Label from "../components/Label";

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
      <Label tail={`Counter: ${count}`} />
      <Button text="-" onclick={subClicked} />
      <Button text="+" onclick={addClicked} />
    </Dialog>
  );
}
